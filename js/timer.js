// timer.js
export function updateTimerDisplay(timerDisplay, time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

export function startTimer(updateTimerDisplay, finishCallback, initialTime = 6300) {
    let time = initialTime;
    let paused = false;
    let finished = false;

    const timerInterval = setInterval(() => {
        if (paused || finished) return;
        time--;
        updateTimerDisplay(time);
        if (time <= 0) {
            finished = true;
            clearInterval(timerInterval);
            finishCallback();
        }
    }, 1000);

    return {
        pause: () => paused = true,
        resume: () => paused = false,
        stop: () => { finished = true; clearInterval(timerInterval); },
        getTime: () => time
    };
}