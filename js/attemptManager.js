// attemptManager.js

export function checkAttempts(currentAttempt, MAX_ATTEMPTS, lastAttemptTime, BLOCK_TIME, startBtn) {

    const now = Date.now();

    currentAttempt = parseInt(currentAttempt) || 0;
    lastAttemptTime = parseInt(lastAttemptTime) || 0;

    if (currentAttempt >= MAX_ATTEMPTS) {

        const timePassed = now - lastAttemptTime;

        if (timePassed < BLOCK_TIME) {

            if (startBtn) {
                startBtn.disabled = true;
                const minutesLeft = Math.ceil((BLOCK_TIME - timePassed) / 60000);
                startBtn.textContent = `Limite de tentativas atingido. Aguarde ${minutesLeft} minuto(s)`;
            }

        } else {

            currentAttempt = 0;

            try {
                localStorage.setItem("attemptsMade", "0");

                if (startBtn) {
                    startBtn.disabled = false;
                    startBtn.textContent = "Iniciar Prova";
                }

            } catch (e) {
                console.warn("Erro ao resetar attemptsMade no localStorage", e);
            }

        }

    }

    return currentAttempt;

}


/**
 * Recupera os IDs das questões que foram marcadas como erradas na última tentativa
 * ou na tentativa específica, se fornecido o index
 * @param {number} attemptIndex (opcional) - índice da tentativa no histórico
 * @returns {Array} - IDs das questões erradas
 */
export function getWrongQuestionsFromAttempts(attemptIndex = null) {

    let history = [];

    try {
        history = JSON.parse(localStorage.getItem("quizResultsHistory")) || [];
    } catch (e) {
        history = [];
    }

    if (history.length === 0) return [];

    // se attemptIndex não fornecido, pega a última tentativa
    const attempt = attemptIndex !== null ? history[attemptIndex] : history[history.length - 1];

    return attempt.wrongQuestions || [];

}


/**
 * Recupera todos os resultados (corretos/incorretos) de uma tentativa específica
 * @param {number} attemptIndex - índice da tentativa
 * @returns {Array} - array de booleanos indicando acertos
 */
export function getResultsFromAttempt(attemptIndex) {

    let history = [];

    try {
        history = JSON.parse(localStorage.getItem("quizResultsHistory")) || [];
    } catch (e) {
        history = [];
    }

    if (!history[attemptIndex]) return [];

    return history[attemptIndex].results || [];

}