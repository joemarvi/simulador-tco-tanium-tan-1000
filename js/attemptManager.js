// attemptManager.js
export function checkAttempts(currentAttempt, MAX_ATTEMPTS, lastAttemptTime, BLOCK_TIME, startBtn) {
    const now = Date.now();
    if (currentAttempt >= MAX_ATTEMPTS) {
        const timePassed = now - lastAttemptTime;
        if (timePassed < BLOCK_TIME) {
            startBtn.disabled = true;
            const minutesLeft = Math.ceil((BLOCK_TIME - timePassed) / 60000);
            startBtn.textContent = `Limite de tentativas atingido. Aguarde ${minutesLeft} minuto(s)`;
        } else {
            currentAttempt = 0;
            localStorage.setItem("attemptsMade", 0);
        }
    }
    return currentAttempt;
}