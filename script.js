document.addEventListener("DOMContentLoaded", function () {

    if (typeof questionBank === "undefined") {
        alert("Erro: questions.js não foi carregado.");
        return;
    }

    /* ELEMENTOS */

    const quiz = document.getElementById("quiz");
    const totalQuestions = document.getElementById("totalQuestions");
    const answeredCount = document.getElementById("answeredCount");
    const progress = document.getElementById("progress");
    const timerDisplay = document.getElementById("time");
    const result = document.getElementById("result");

    const pauseBtn = document.getElementById("pause");
    const finishBtn = document.getElementById("finish");
    const restartBtn = document.getElementById("restart");

    const pauseOverlay = document.getElementById("pauseOverlay");
    const resumeOverlay = document.getElementById("resumeOverlay");
    const restartOverlay = document.getElementById("restartOverlay");

    const warningOverlay = document.getElementById("warningOverlay");
    const closeWarning = document.getElementById("closeWarning");

    const studyModeBtn = document.getElementById("toggleStudyMode");
    const studyModeStatus = document.getElementById("studyModeStatus");
    const explanationPanel = document.getElementById("studyExplanation");
    const explanationContent = document.getElementById("explanationContent");

    const statsOverlay = document.getElementById("statsOverlay");
    const openStats = document.getElementById("openStats");
    const closeStats = document.getElementById("closeStats");
    const statsContainer = document.getElementById("statsContainer");

    const questionNavigatorBtn = document.getElementById("questionNavigator");
    const navigatorOverlay = document.getElementById("navigatorOverlay");
    const navigatorContainer = document.getElementById("navigatorContainer");
    const closeNavigator = document.getElementById("closeNavigator");

    /* ESTADOS */
    let paused = false;
    let finished = false;
    let studyMode = false;

    let timerInterval = null;

    /* SHUFFLE */
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /* CARREGAR QUESTÕES */
    let questions = shuffle([...questionBank]).slice(0, 60);
    totalQuestions.textContent = questions.length;

    /* RANDOMIZAR ALTERNATIVAS */
    questions.forEach(function (q) {
        let options = q.answers.map(function (text, index) {
            return { text: text, correct: q.type === 'multi_select' ? q.correct.includes(index) : index === q.correct };
        });
        options = shuffle(options);
        q.answers = options.map(o => o.text);
        if (q.type === 'multi_select') {
            q.correct = options.map((o, i) => o.correct ? i : -1).filter(i => i !== -1);
        } else {
            q.correct = options.findIndex(o => o.correct);
        }
    });

    /* RENDER QUESTÕES */
    function renderQuestions() {
        quiz.innerHTML = "";
        questions.forEach(function (q, i) {
            const div = document.createElement("div");
            div.className = "question";
            div.id = "question-" + i;

            let html = `<b>QUESTÃO ${i + 1}</b>`;
            if (q.domain) html += `<div class='topic'>Tema: ${q.domain}</div>`;
            if (q.scenario) html += `<div class='scenario'><strong>Cenário:</strong> ${q.scenario}</div>`;
            html += `<div class='questionText'><strong>Pergunta:</strong> ${q.question}</div>`;

            html += `<div class='answers'>`;
            q.answers.forEach(function (answer, j) {
                const inputType = q.type === 'multi_select' ? 'checkbox' : 'radio';
                html += `<label class='option'>`;
                html += `<input type='${inputType}' name='q${i}' value='${j}'> ${String.fromCharCode(65 + j)}) ${answer}`;
                html += `</label>`;
            });
            html += `</div>`;

            div.innerHTML = html;
            quiz.appendChild(div);
        });
    }

    /* PROGRESSO */
    function updateProgress() {
        let answered = 0;
        questions.forEach(function (q, i) {
            const selected = Array.from(document.querySelectorAll(`input[name='q${i}']:checked`));
            if (selected.length) answered++;
        });
        answeredCount.textContent = answered;
        let percent = (answered / questions.length) * 100;
        progress.style.width = percent + "%";
    }

    /* MOSTRAR EXPLICAÇÃO */
    function showExplanation(index) {
        const q = questions[index];
        if (!q.explanation) return;
        explanationPanel.style.display = "block";
        let correctText;
        if (q.type === 'multi_select') {
            correctText = q.correct.map(i => String.fromCharCode(65 + i)).join(', ');
        } else {
            correctText = String.fromCharCode(65 + q.correct);
        }
        explanationContent.innerHTML = `<b>Resposta correta:</b> ${correctText}<br><br>${q.explanation}`;
    }

    /* CAPTURA DE RESPOSTAS */
    quiz.addEventListener("change", function (event) {
        if (finished) return;
        const name = event.target.name;
        const index = Number(name.replace("q", ""));
        updateProgress();
        if (studyMode) showExplanation(index);
    });

    /* PAUSAR */
    pauseBtn.addEventListener("click", function () {
        if (finished) return;
        paused = true;
        pauseOverlay.style.display = "flex";
    });

    resumeOverlay.addEventListener("click", function () {
        paused = false;
        pauseOverlay.style.display = "none";
    });

    restartOverlay.addEventListener("click", function () {
        location.reload();
    });

    closeWarning.addEventListener("click", function () {
        warningOverlay.style.display = "none";
    });

    /* MODO ESTUDO */
    studyModeBtn.addEventListener("click", function () {
        studyMode = !studyMode;
        studyModeStatus.textContent = studyMode ? "Ativado" : "Desativado";
        studyModeBtn.textContent = studyMode ? "📚 Desativar modo estudo" : "📚 Ativar modo estudo";
        if (!studyMode) explanationPanel.style.display = "none";
    });

    /* ESTATÍSTICAS */
    function calculateStats() {
        let stats = {};
        questions.forEach(function (q, i) {
            const topic = q.domain || "Geral";
            if (!stats[topic]) stats[topic] = { total: 0, correct: 0 };
            stats[topic].total++;
            const selected = Array.from(document.querySelectorAll(`input[name='q${i}']:checked`)).map(input => parseInt(input.value));
            if (q.type === 'multi_select') {
                selected.sort();
                const correctSorted = [...q.correct].sort();
                if (JSON.stringify(selected) === JSON.stringify(correctSorted)) stats[topic].correct++;
            } else {
                if (selected[0] === q.correct) stats[topic].correct++;
            }
        });
        return stats;
    }

    function renderStats() {
        const stats = calculateStats();
        let html = "";
        for (let topic in stats) {
            let s = stats[topic];
            let percent = Math.round((s.correct / s.total) * 100);
            html += `<div class='stat'><b>${topic}</b><br>Acertos: ${s.correct} / ${s.total}<br>Percentual: ${percent}%</div>`;
        }
        statsContainer.innerHTML = html;
    }

    openStats.addEventListener("click", function () {
        renderStats();
        statsOverlay.style.display = "flex";
    });
    closeStats.addEventListener("click", function () { statsOverlay.style.display = "none"; });

    /* FINALIZAR PROVA */
    finishBtn.addEventListener("click", function () {
        if (finished) return;
        let answered = 0;
        questions.forEach(function (q, i) {
            const selected = Array.from(document.querySelectorAll(`input[name='q${i}']:checked`));
            if (selected.length) answered++;
        });
        if (answered < questions.length) {
            warningOverlay.style.display = "flex";
            return;
        }

        finished = true;
        clearInterval(timerInterval);

        let score = 0;
        questions.forEach(function (q, i) {
            const selected = Array.from(document.querySelectorAll(`input[name='q${i}']:checked`)).map(input => parseInt(input.value));
            const options = document.querySelectorAll(`input[name='q${i}']`);
            options.forEach((opt, idx) => {
                const label = opt.parentElement;
                if (q.type === 'multi_select' && q.correct.includes(idx)) label.classList.add('correct');
                if (q.type === 'multi_select' && opt.checked && !q.correct.includes(idx)) label.classList.add('wrong');
                if (q.type !== 'multi_select' && idx === q.correct) label.classList.add('correct');
                if (q.type !== 'multi_select' && opt.checked && idx !== q.correct) label.classList.add('wrong');
                opt.disabled = true;
            });
            if (q.type === 'multi_select') {
                const selSorted = [...selected].sort();
                const correctSorted = [...q.correct].sort();
                if (JSON.stringify(selSorted) === JSON.stringify(correctSorted)) score++;
            } else {
                if (selected[0] === q.correct) score++;
            }
        });

        const percent = Math.round((score / questions.length) * 100);
        const status = percent >= 70 ? "✅ APROVADO" : "❌ REPROVADO";
        result.innerHTML = `<h2>Resultado</h2>Pontuação: ${score} / ${questions.length}<br>Percentual: ${percent}%<br>Resultado: <b>${status}</b>`;
        restartBtn.style.display = "inline-block";
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    /* RESTART */
    restartBtn.addEventListener("click", function () { location.reload(); });

    /* TIMER */
    let time = 6300;
    function updateTimer() {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
    updateTimer();
    timerInterval = setInterval(function () {
        if (paused || finished) return;
        time--;
        updateTimer();
        if (time <= 0) finishBtn.click();
    }, 1000);

    /* QUESTION NAVIGATOR */
    function renderNavigator() {
        navigatorContainer.innerHTML = "";
        questions.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.textContent = `Questão ${i + 1}`;
            btn.addEventListener('click', () => {
                document.getElementById(`question-${i}`).scrollIntoView({ behavior: 'smooth' });
                navigatorOverlay.style.display = 'none';
            });
            navigatorContainer.appendChild(btn);
        });
    }
    questionNavigatorBtn.addEventListener('click', () => {
        renderNavigator();
        navigatorOverlay.style.display = 'flex';
    });
    closeNavigator.addEventListener('click', () => { navigatorOverlay.style.display = 'none'; });

    /* INIT */
    renderQuestions();
    updateProgress();
});
