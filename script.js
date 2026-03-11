document.addEventListener("DOMContentLoaded", function () {

    if (typeof questionBank === "undefined") {
        alert("Erro: questions.js não foi carregado.");
        return;
    }

    const startBtn = document.getElementById("startQuiz");
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

    const currentAttemptEl = document.getElementById("currentAttempt");
    const maxAttemptsEl = document.getElementById("maxAttempts");
    const remainingAttemptsEl = document.getElementById("remainingAttempts");

    const reviewControls = document.getElementById("reviewControls");
    const reviewWrongBtn = document.getElementById("reviewWrong");
    const reviewAllBtn = document.getElementById("reviewAll");

    const MAX_ATTEMPTS = 3;
    let currentAttempt = parseInt(localStorage.getItem("attemptsMade")) || 0;
    let paused = false;
    let finished = false;
    let studyMode = false;
    let timerStarted = false;
    let timerInterval = null;
    let time = 6300;

    const questionResults = [];

    const lastAttemptTime = parseInt(localStorage.getItem("lastAttemptTime")) || 0;
    const now = Date.now();

    const BLOCK_TIME = 3 * 60 * 1000;

    if (currentAttempt >= MAX_ATTEMPTS) {

        const timePassed = now - lastAttemptTime;

        if (timePassed < BLOCK_TIME) {

            startBtn.disabled = true;

            const minutesLeft =
                Math.ceil((BLOCK_TIME - timePassed) / 60000);

            startBtn.textContent =
                `Limite de tentativas atingido. Aguarde ${minutesLeft} minuto(s)`;

        } else {

            currentAttempt = 0;

            localStorage.setItem("attemptsMade", 0);

        }

    }

    currentAttemptEl.textContent = Math.min(currentAttempt, MAX_ATTEMPTS);
    remainingAttemptsEl.textContent = Math.max(0, MAX_ATTEMPTS - currentAttempt);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let questions = shuffle([...questionBank]).slice(0, 60);
    totalQuestions.textContent = questions.length;

    questions.forEach(function (q) {

        if (q.type !== "multi_select") {
            q.correct = parseInt(q.correct);
        } else {
            q.correct = q.correct.map(i => parseInt(i));
        }

        let options = q.answers.map(function (text, index) {
            return {
                text: text,
                correct: q.type === 'multi_select'
                    ? q.correct.includes(index)
                    : index === q.correct
            };
        });

        options = shuffle(options);

        q.answers = options.map(o => o.text);

        if (q.type === 'multi_select') {
            q.correct = options
                .map((o, i) => o.correct ? i : -1)
                .filter(i => i !== -1);
        } else {
            q.correct = options.findIndex(o => o.correct);
        }

    });

    function renderQuestions() {

        quiz.innerHTML = "";

        questions.forEach(function (q, i) {

            const div = document.createElement("div");
            div.className = "question";
            div.id = "question-" + i;

            let html = `<b>QUESTÃO ${i + 1}</b>`;

            if (q.domain)
                html += `<div class='topic'>Tema: ${q.domain}</div>`;

            if (q.scenario)
                html += `<div class='scenario'><strong>Cenário:</strong> ${q.scenario}</div>`;

            html += `<div class='questionText'><strong>Pergunta:</strong> ${q.question}</div>`;

            html += `<div class='answers'>`;

            q.answers.forEach(function (answer, j) {

                const inputType = q.type === 'multi_select'
                    ? 'checkbox'
                    : 'radio';

                html += `<label class='option'>`;

                html += `<input type='${inputType}' name='q${i}' value='${j}'>`;

                html += `${String.fromCharCode(65 + j)}) ${answer}`;

                html += `</label>`;

            });

            html += `</div>`;

            html += `<div class="inline-explanation" id="exp-${i}" style="display:none;"></div>`;

            div.innerHTML = html;

            quiz.appendChild(div);

        });
    }

    function updateProgress() {

        let answered = 0;

        questions.forEach(function (q, i) {

            const selected = Array.from(
                document.querySelectorAll(`input[name='q${i}']:checked`)
            );

            if (selected.length)
                answered++;

        });

        answeredCount.textContent = answered;

        let percent = (answered / questions.length) * 100;

        progress.style.width = percent + "%";
    }

    function showExplanation(index) {

        const q = questions[index];

        if (!q.explanation) return;

        explanationPanel.style.display = "block";

        let correctText;

        if (q.type === 'multi_select') {
            correctText = q.correct.map(i =>
                String.fromCharCode(65 + i)
            ).join(', ');
        } else {
            correctText = String.fromCharCode(65 + q.correct);
        }

        explanationContent.innerHTML =
            `<b>Resposta correta:</b> ${correctText}<br><br>${q.explanation}`;

        const inlineBox = document.getElementById(`exp-${index}`);

        if (inlineBox) {

            inlineBox.style.display = "block";

            inlineBox.innerHTML =
                `<b>Resposta correta:</b> ${correctText}<br><br>${q.explanation}`;

        }
    }

    quiz.addEventListener("change", function (event) {

        if (finished) return;

        const name = event.target.name;

        const index = Number(name.replace("q", ""));

        updateProgress();

        if (studyMode) {

            const q = questions[index];

            const options =
                document.querySelectorAll(`input[name='q${index}']`);

            options.forEach((opt) => {

                const label = opt.parentElement;
                const value = parseInt(opt.value);

                label.classList.remove("correct");
                label.classList.remove("wrong");

                if (q.type === "multi_select") {

                    if (q.correct.includes(value))
                        label.classList.add("correct");

                    if (opt.checked && !q.correct.includes(value))
                        label.classList.add("wrong");

                } else {

                    if (value === q.correct)
                        label.classList.add("correct");

                    if (opt.checked && value !== q.correct)
                        label.classList.add("wrong");

                }

            });

            showExplanation(index);

        }

        document
            .getElementById(`question-${index}`)
            .classList.remove("unanswered");

    });

    pauseBtn.addEventListener("click", function () {

        if (finished || !timerStarted) return;

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

    studyModeBtn.addEventListener("click", function () {

        studyMode = !studyMode;

        studyModeStatus.textContent =
            studyMode ? "Ativado" : "Desativado";

        studyModeBtn.textContent =
            studyMode ? "📚 Desativar modo estudo"
                : "📚 Ativar modo estudo";

        if (!studyMode) {

            explanationPanel.style.display = "none";

        } else {

            for (let i = 0; i < questions.length; i++) {

                const selected =
                    Array.from(
                        document.querySelectorAll(`input[name='q${i}']:checked`)
                    );

                if (selected.length) {

                    showExplanation(i);

                    break;

                }

            }

        }

    });

    function calculateStats() {

        let stats = {};

        questions.forEach(function (q, i) {

            const topic = q.domain || "Geral";

            if (!stats[topic])
                stats[topic] = { total: 0, correct: 0 };

            stats[topic].total++;

            const selected =
                Array.from(
                    document.querySelectorAll(`input[name='q${i}']:checked`)
                )
                    .map(input => parseInt(input.value));

            if (q.type === 'multi_select') {

                selected.sort();

                const correctSorted = [...q.correct].sort();

                if (JSON.stringify(selected) === JSON.stringify(correctSorted))
                    stats[topic].correct++;

            } else {

                if (selected[0] === q.correct)
                    stats[topic].correct++;

            }

        });

        return stats;

    }

    function renderStats() {

        const stats = calculateStats();

        let html = "";

        for (let topic in stats) {

            let s = stats[topic];

            let percent =
                Math.round((s.correct / s.total) * 100);

            html +=
                `<div class='stat'>
                    <b>${topic}</b><br>
                    Acertos: ${s.correct} / ${s.total}<br>
                    Percentual: ${percent}%
                </div>`;

        }

        statsContainer.innerHTML = html;

    }

    openStats.addEventListener("click", function () {

        renderStats();

        statsOverlay.style.display = "flex";

    });

    closeStats.addEventListener("click", function () {

        statsOverlay.style.display = "none";

    });

    finishBtn.addEventListener("click", function () {

        if (finished || !timerStarted) return;

        let unansweredFound = false;

        questions.forEach(function (q, i) {

            const selected =
                Array.from(
                    document.querySelectorAll(`input[name='q${i}']:checked`)
                );

            const questionDiv =
                document.getElementById(`question-${i}`);

            questionDiv.classList.remove("unanswered");

            if (!selected.length) {

                unansweredFound = true;

                questionDiv.classList.add("unanswered");

            }

        });

        if (unansweredFound) {

            warningOverlay.style.display = "flex";

            return;

        }

        finished = true;

        clearInterval(timerInterval);

        currentAttempt++;

        localStorage.setItem("attemptsMade", currentAttempt);

        localStorage.setItem("lastAttemptTime", Date.now());

        currentAttemptEl.textContent = currentAttempt;

        remainingAttemptsEl.textContent =
            MAX_ATTEMPTS - currentAttempt;

        if (currentAttempt >= MAX_ATTEMPTS) {

            startBtn.disabled = true;

            startBtn.textContent =
                "Limite de tentativas atingido. Aguarde 30 minutos";

        }

        let score = 0;

        questions.forEach(function (q, i) {

            const selected =
                Array.from(
                    document.querySelectorAll(`input[name='q${i}']:checked`)
                )
                    .map(input => parseInt(input.value));

            const options =
                document.querySelectorAll(`input[name='q${i}']`);

            let correct = false;

            if (q.type === 'multi_select') {

                const selSorted = [...selected].sort();

                const correctSorted = [...q.correct].sort();

                correct =
                    JSON.stringify(selSorted) === JSON.stringify(correctSorted);

            } else {

                correct = selected[0] === q.correct;

            }

            questionResults[i] = correct;

            options.forEach((opt, idx) => {

                const label = opt.parentElement;

                if (q.type === 'multi_select' && q.correct.includes(idx))
                    label.classList.add('correct');

                if (q.type === 'multi_select' && opt.checked && !q.correct.includes(idx))
                    label.classList.add('wrong');

                if (q.type !== 'multi_select' && idx === q.correct)
                    label.classList.add('correct');

                if (q.type !== 'multi_select' && opt.checked && idx !== q.correct)
                    label.classList.add('wrong');

                opt.disabled = true;

            });

            if (correct)
                score++;

        });

        const percent = Math.round((score / questions.length) * 100);

        const status =
            percent >= 70 ? "✅ APROVADO" : "❌ REPROVADO";

        result.innerHTML =
            `<h2>Resultado</h2>
            Pontuação: ${score} / ${questions.length}<br>
            Percentual: ${percent}%<br>
            Resultado: <b>${status}</b>`;

        restartBtn.style.display = "inline-block";

        reviewControls.style.display = "block";

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });

    });

    restartBtn.addEventListener("click", function () {

        location.reload();

    });

    function updateTimer() {

        const minutes = Math.floor(time / 60);

        const seconds = time % 60;

        timerDisplay.textContent =
            `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    }

    function startTimer() {

        if (timerStarted) return;

        timerStarted = true;

        timerInterval = setInterval(function () {

            if (paused || finished) return;

            time--;

            updateTimer();

            if (time <= 0)
                finishBtn.click();

        }, 1000);

    }

    function renderNavigator() {

        navigatorContainer.innerHTML = "";

        questions.forEach((_, i) => {

            const btn = document.createElement('button');

            btn.textContent = `Questão ${i + 1}`;

            if (finished) {

                if (questionResults[i])
                    btn.classList.add("nav-correct");
                else
                    btn.classList.add("nav-wrong");

            }

            btn.addEventListener('click', () => {

                const questionElement = document.getElementById(`question-${i}`);

                navigatorOverlay.style.display = 'none';

                questionElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                if (finished && !questionResults[i]) {

                    setTimeout(() => {
                        showExplanation(i);
                    }, 400);

                }

            });

            navigatorContainer.appendChild(btn);

        });

    }

    questionNavigatorBtn.addEventListener('click', () => {

        renderNavigator();

        navigatorOverlay.style.display = 'flex';

    });

    closeNavigator.addEventListener('click', () => {

        navigatorOverlay.style.display = 'none';

    });

    startBtn.addEventListener("click", function () {

        renderQuestions();

        updateProgress();

        startTimer();

        startBtn.style.display = "none";

    });

    reviewWrongBtn.addEventListener("click", function () {

        questions.forEach(function (q, i) {

            const questionDiv = document.getElementById(`question-${i}`);

            if (questionResults[i]) {

                questionDiv.style.display = "none";

            } else {

                questionDiv.style.display = "block";

                showExplanation(i);

            }

        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    reviewAllBtn.addEventListener("click", function () {

        questions.forEach(function (q, i) {

            const questionDiv = document.getElementById(`question-${i}`);

            questionDiv.style.display = "block";

        });

    });

});