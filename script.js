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

    /* ESTADOS */

    let paused = false;
    let finished = false;
    let studyMode = false;

    let timerInterval = null;

    /* SHUFFLE */

    function shuffle(array) {

        for (let i = array.length - 1; i > 0; i--) {

            let j = Math.floor(Math.random() * (i + 1));

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }

        return array;

    }

    /* CARREGAR QUESTÕES */

    let questions = shuffle([...questionBank]).slice(0, 60);

    totalQuestions.textContent = questions.length;

    /* RANDOMIZAR ALTERNATIVAS */

    questions.forEach(function (q) {

        let options = q.answers.map(function (text, index) {

            return {
                text: text,
                correct: index === q.correct
            };

        });

        options = shuffle(options);

        q.answers = options.map(o => o.text);

        q.correct = options.findIndex(o => o.correct);

    });

    /* RENDER QUESTÕES */

    function renderQuestions() {

        quiz.innerHTML = "";

        questions.forEach(function (q, i) {

            const div = document.createElement("div");
            div.className = "question";

            let html = "";

            html += "<b>QUESTÃO " + (i + 1) + "</b>";

            if (q.topic) {
                html += "<div class='topic'>Tema: " + q.topic + "</div>";
            }

            html += "<div class='scenario'><strong>Cenário:</strong> " + q.scenario + "</div>";

            html += "<div class='questionText'><strong>Pergunta:</strong> " + q.question + "</div>";

            html += "<div class='answers'>";

            q.answers.forEach(function (answer, j) {

                html += "<label class='option'>";

                html += "<input type='radio' name='q" + i + "' value='" + j + "'>";

                html += " " + String.fromCharCode(65 + j) + ") " + answer;

                html += "</label>";

            });

            html += "</div>";

            div.innerHTML = html;

            quiz.appendChild(div);

        });

    }

    /* PROGRESSO */

    function updateProgress() {

        let answered = 0;

        questions.forEach(function (q, i) {

            let selected = document.querySelector("input[name='q" + i + "']:checked");

            if (selected) answered++;

        });

        answeredCount.textContent = answered;

        let percent = (answered / questions.length) * 100;

        progress.style.width = percent + "%";

    }

    /* MOSTRAR EXPLICAÇÃO (MODO ESTUDO) */

    function showExplanation(index) {

        const q = questions[index];

        if (!q.explanation) return;

        explanationPanel.style.display = "block";

        explanationContent.innerHTML =
            "<b>Resposta correta:</b> " +
            String.fromCharCode(65 + q.correct) +
            "<br><br>" +
            q.explanation;

    }

    /* RADIO CHANGE */

    quiz.addEventListener("change", function (event) {

        if (finished) return;

        if (event.target.type === "radio") {

            const name = event.target.name;

            const index = Number(name.replace("q", ""));

            updateProgress();

            if (studyMode) {
                showExplanation(index);
            }

        }

    });

    /* PAUSAR */

    pauseBtn.addEventListener("click", function () {

        if (finished) return;

        paused = true;

        pauseOverlay.style.display = "flex";

    });

    /* RETOMAR */

    resumeOverlay.addEventListener("click", function () {

        paused = false;

        pauseOverlay.style.display = "none";

    });

    /* RESTART OVERLAY */

    restartOverlay.addEventListener("click", function () {

        location.reload();

    });

    /* WARNING */

    closeWarning.addEventListener("click", function () {

        warningOverlay.style.display = "none";

    });

    /* MODO ESTUDO */

    studyModeBtn.addEventListener("click", function () {

        studyMode = !studyMode;

        studyModeStatus.textContent = studyMode ? "Ativado" : "Desativado";

        studyModeBtn.textContent = studyMode ?
            "📚 Desativar modo estudo" :
            "📚 Ativar modo estudo";

        if (!studyMode) {
            explanationPanel.style.display = "none";
        }

    });

    /* ESTATÍSTICAS */

    function calculateStats() {

        let stats = {};

        questions.forEach(function (q, i) {

            const topic = q.topic || "Geral";

            if (!stats[topic]) {

                stats[topic] = {
                    total: 0,
                    correct: 0
                };

            }

            stats[topic].total++;

            const selected = document.querySelector("input[name='q" + i + "']:checked");

            if (selected && Number(selected.value) === q.correct) {

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

            let percent = Math.round((s.correct / s.total) * 100);

            html += "<div class='stat'>";

            html += "<b>" + topic + "</b><br>";

            html += "Acertos: " + s.correct + " / " + s.total + "<br>";

            html += "Percentual: " + percent + "%";

            html += "</div>";

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

    /* FINALIZAR PROVA */

    finishBtn.addEventListener("click", function () {

        if (finished) return;

        let answered = 0;

        questions.forEach(function (q, i) {

            let selected = document.querySelector("input[name='q" + i + "']:checked");

            if (selected) answered++;

        });

        if (answered < questions.length) {

            warningOverlay.style.display = "flex";

            return;

        }

        finished = true;

        clearInterval(timerInterval);

        let score = 0;

        questions.forEach(function (q, i) {

            let selected = document.querySelector("input[name='q" + i + "']:checked");

            let options = document.querySelectorAll("input[name='q" + i + "']");

            options.forEach(function (opt, index) {

                let label = opt.parentElement;

                if (index === q.correct) {
                    label.classList.add("correct");
                }

                if (opt.checked && index !== q.correct) {
                    label.classList.add("wrong");
                }

                opt.disabled = true;

            });

            if (selected && Number(selected.value) === q.correct) {
                score++;
            }

        });

        let percent = Math.round((score / questions.length) * 100);

        let status = percent >= 70 ? "✅ APROVADO" : "❌ REPROVADO";

        result.innerHTML =
            "<h2>Resultado</h2>" +
            "Pontuação: " + score + " / " + questions.length + "<br>" +
            "Percentual: " + percent + "%<br>" +
            "Resultado: <b>" + status + "</b>";

        restartBtn.style.display = "inline-block";

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    });

    /* RESTART */

    restartBtn.addEventListener("click", function () {

        location.reload();

    });

    /* TIMER */

    let time = 6300;

    function updateTimer() {

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        timerDisplay.textContent =
            minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

    }

    updateTimer();

    timerInterval = setInterval(function () {

        if (paused || finished) return;

        time--;

        updateTimer();

        if (time <= 0) {

            finishBtn.click();

        }

    }, 1000);

    /* INIT */

    renderQuestions();
    updateProgress();

});