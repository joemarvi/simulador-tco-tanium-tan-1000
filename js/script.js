import { prepareQuestions } from './quizData.js';
import { renderQuestions, showExplanation, renderStats, renderNavigator } from './rendering.js';
import { startTimer, updateTimerDisplay } from './timer.js';
import { checkAttempts } from './attemptManager.js';
import { toggleStudyMode } from './studyMode.js';
import { calculateStats } from './results.js';
import { updateProgress } from './progress.js';
import { questionBank } from "./questions.js";

document.addEventListener("DOMContentLoaded", function () {

    if (typeof questionBank === "undefined") {
        alert("Erro: questions.js não foi carregado.");
        return;
    }

    // ===============================
    // CONFIGURAÇÃO DE TENTATIVAS
    // ===============================

    const MAX_ATTEMPTS = 3;
    const BLOCK_TIME = 3 * 60 * 1000;

    function getAttempts() {
        const attempts = localStorage.getItem("attemptsMade");
        return attempts ? parseInt(attempts) : 0;
    }

    function setAttempts(value) {
        localStorage.setItem("attemptsMade", value);
    }

    function setLastAttemptTime() {
        localStorage.setItem("lastAttemptTime", Date.now());
    }

    function getLastAttemptTime() {
        const t = localStorage.getItem("lastAttemptTime");
        return t ? parseInt(t) : 0;
    }

    let currentAttempt = getAttempts();
    let lastAttemptTime = getLastAttemptTime();

    // ===============================
    // DOM
    // ===============================

    const startBtn = document.getElementById("startQuiz");
    const quizContainer = document.getElementById("quizContainer");
    const candidateProfile = document.getElementById("candidateProfile");
    const quiz = document.getElementById("quiz");

    const totalQuestions = document.getElementById("totalQuestions");
    const answeredCount = document.getElementById("answeredCount");
    const progress = document.getElementById("progress");
    const timerDisplay = document.getElementById("time");

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

    const resultOverlay = document.getElementById("resultOverlay");
    const resultContent = document.getElementById("resultContent");
    const closeResult = document.getElementById("closeResult");

    const currentAttemptEl = document.getElementById("currentAttempt");
    const remainingAttemptsEl = document.getElementById("remainingAttempts");

    const examBlueprint = document.getElementById("examBlueprint");
    const topControls = document.getElementById("topControls");
    const footerControls = document.getElementById("footerControls");

    // ===============================
    // STATE
    // ===============================

    let paused = false;
    let finished = false;
    let studyMode = false;
    let timerStarted = false;
    let timer = null;

    const questionResults = [];

    // ===============================
    // BLOQUEIO DE TENTATIVAS
    // ===============================

    currentAttempt = checkAttempts(
        currentAttempt,
        MAX_ATTEMPTS,
        lastAttemptTime,
        BLOCK_TIME,
        startBtn
    );

    currentAttemptEl.textContent = Math.min(currentAttempt, MAX_ATTEMPTS);
    remainingAttemptsEl.textContent = Math.max(0, MAX_ATTEMPTS - currentAttempt);

    // ===============================
    // PREPARAR QUESTÕES
    // ===============================

    let questions = prepareQuestions(questionBank);
    totalQuestions.textContent = questions.length;

    // ===============================
    // EVENTO RESPOSTA
    // ===============================

    quiz.addEventListener("change", (event) => {

        if (finished) return;

        const index = Number(event.target.name.replace("q", ""));

        updateProgress(questions, answeredCount, progress);

        if (studyMode) {

            const q = questions[index];
            const options = document.querySelectorAll(`input[name='q${index}']`);

            options.forEach(opt => {

                const label = opt.parentElement;
                const value = parseInt(opt.value);

                label.classList.remove("correct", "wrong");

                if (q.type === "multi_select") {

                    if (q.correct.includes(value)) label.classList.add("correct");

                    if (opt.checked && !q.correct.includes(value))
                        label.classList.add("wrong");

                } else {

                    if (value === q.correct) label.classList.add("correct");

                    if (opt.checked && value !== q.correct)
                        label.classList.add("wrong");

                }

            });

            showExplanation(
                questions,
                explanationPanel,
                explanationContent,
                index
            );

        }

        const questionDiv = document.getElementById(`question-${index}`);

        if (questionDiv)
            questionDiv.classList.remove("unanswered");

    });

    // ===============================
    // PAUSE
    // ===============================

    if (pauseBtn) {
        pauseBtn.addEventListener("click", () => {

            if (!finished && timerStarted && timer) {

                timer.pause();

                if (pauseOverlay)
                    pauseOverlay.style.display = "flex";

            }

        });
    }

    if (resumeOverlay) {
        resumeOverlay.addEventListener("click", () => {

            if (timer)
                timer.resume();

            if (pauseOverlay)
                pauseOverlay.style.display = "none";

        });
    }

    if (restartOverlay)
        restartOverlay.addEventListener("click", () => location.reload());

    if (closeWarning)
        closeWarning.addEventListener("click", () => {
            if (warningOverlay)
                warningOverlay.style.display = "none";
        });

    // ===============================
    // STUDY MODE
    // ===============================

    if (studyModeBtn) {

        studyModeBtn.addEventListener("click", () => {

            studyMode = toggleStudyMode(
                studyMode,
                studyModeStatus,
                studyModeBtn,
                explanationPanel,
                questions,
                showExplanation
            );

        });

    }

    // ===============================
    // STATS
    // ===============================

    if (openStats)
        openStats.addEventListener("click", () => {

            renderStats(
                statsContainer,
                calculateStats(questions)
            );

            if (statsOverlay)
                statsOverlay.style.display = "flex";

        });

    if (closeStats)
        closeStats.addEventListener("click", () => {

            if (statsOverlay)
                statsOverlay.style.display = "none";

        });

    // ===============================
    // NAVIGATOR
    // ===============================

    if (questionNavigatorBtn)
        questionNavigatorBtn.addEventListener("click", () => {

            renderNavigator(
                navigatorContainer,
                questions,
                questionResults,
                finished,
                showExplanation
            );

            if (navigatorOverlay)
                navigatorOverlay.style.display = "flex";

        });

    if (closeNavigator)
        closeNavigator.addEventListener("click", () => {

            if (navigatorOverlay)
                navigatorOverlay.style.display = "none";

        });

    // ===============================
    // START QUIZ
    // ===============================

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            if (candidateProfile)
                candidateProfile.style.display = "none";

            if (examBlueprint)
                examBlueprint.style.display = "none";

            if (quizContainer)
                quizContainer.style.display = "block";

            renderQuestions(quiz, questions);

            updateProgress(
                questions,
                answeredCount,
                progress
            );

            timer = startTimer(

                (t) => updateTimerDisplay(timerDisplay, t),

                () => {
                    if (finishBtn)
                        finishBtn.click();
                }

            );

            startBtn.style.display = "none";

            if (topControls)
                topControls.style.display = "flex";

            if (footerControls)
                footerControls.style.display = "flex";

            timerStarted = true;

        });

    }

    // ===============================
    // FINISH QUIZ
    // ===============================

    if (finishBtn) {

        finishBtn.addEventListener("click", () => {

            if (finished || !timerStarted)
                return;

            let unansweredFound = false;

            questions.forEach((q, i) => {

                const selected = Array.from(
                    document.querySelectorAll(`input[name='q${i}']:checked`)
                );

                const div = document.getElementById(`question-${i}`);

                if (div) {

                    div.classList.remove("unanswered");

                    if (!selected.length) {

                        unansweredFound = true;

                        div.classList.add("unanswered");

                    }

                }

            });

            if (unansweredFound) {

                if (warningOverlay)
                    warningOverlay.style.display = "flex";

                return;

            }

            finished = true;

            if (timer)
                timer.stop();

            // ===============================
            // SALVAR TENTATIVA (PERSISTENTE)
            // ===============================

            currentAttempt++;

            setAttempts(currentAttempt);

            setLastAttemptTime();

            if (currentAttemptEl)
                currentAttemptEl.textContent = currentAttempt;

            if (remainingAttemptsEl)
                remainingAttemptsEl.textContent = MAX_ATTEMPTS - currentAttempt;

            // ===============================
            // CALCULAR RESULTADO
            // ===============================

            let score = 0;

            questions.forEach((q, i) => {

                const selected = Array.from(
                    document.querySelectorAll(`input[name='q${i}']:checked`)
                ).map(input => parseInt(input.value));

                const options = document.querySelectorAll(`input[name='q${i}']`);

                let correct =
                    (q.type === "multi_select")
                        ? JSON.stringify([...selected].sort()) === JSON.stringify([...q.correct].sort())
                        : selected[0] === q.correct;

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

                if (correct) score++;

            });

            const percent = Math.round((score / questions.length) * 100);

            if (resultContent) {

                resultContent.innerHTML =
                    `<h2>Resultado</h2>
                     Pontuação: ${score} / ${questions.length}<br>
                     Percentual: ${percent}%<br>
                     Resultado: <b>${percent >= 70 ? "✅ APROVADO" : "❌ REPROVADO"}</b>`;

            }

            if (resultOverlay)
                resultOverlay.style.display = "flex";

            if (restartBtn)
                restartBtn.style.display = "inline-block";

        });

    }

    if (closeResult)
        closeResult.addEventListener("click", () => {

            if (resultOverlay)
                resultOverlay.style.display = "none";

        });

    if (restartBtn)
        restartBtn.addEventListener("click", () => location.reload());

});

// ===============================
// INTRO TOGGLE
// ===============================

const toggleIntro = document.getElementById("toggleIntro");
const introContent = document.querySelector(".intro-content");

if (toggleIntro && introContent) {

    toggleIntro.addEventListener("click", () => {

        if (introContent.style.display === "none") {

            introContent.style.display = "block";

            toggleIntro.innerHTML =
                '<i class="fa-solid fa-chevron-up"></i> Ocultar';

        } else {

            introContent.style.display = "none";

            toggleIntro.innerHTML =
                '<i class="fa-solid fa-chevron-down"></i> Mostrar';

        }

    });

}