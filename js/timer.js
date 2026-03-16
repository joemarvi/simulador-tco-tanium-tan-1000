export function updateTimerDisplay(timerDisplay, time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    if (timerDisplay) {
        timerDisplay.textContent =
            `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
}

export function startTimer(updateCallback, finishCallback, initialTime = 6300) {

    let time = initialTime;
    let interval = null;
    let finished = false;

    function tick() {

        if (finished) return;

        time--;

        updateCallback(time);

        if (time <= 0) {

            finished = true;

            clearInterval(interval);

            if (typeof finishCallback === "function")
                finishCallback();

        }

    }

    interval = setInterval(tick, 1000);

    return {

        pause() {
            clearInterval(interval);
        },

        resume() {
            interval = setInterval(tick, 1000);
        },

        stop() {
            finished = true;
            clearInterval(interval);
        },

        getTime() {
            return time;
        }

    };

}
