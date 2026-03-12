// progress.js
export function updateProgress(questions, answeredCount, progress) {
    let answered = 0;
    questions.forEach((q, i) => {
        const selected = Array.from(document.querySelectorAll(`input[name='q${i}']:checked`));
        if (selected.length) answered++;
    });
    answeredCount.textContent = answered;
    let percent = (answered / questions.length) * 100;
    progress.style.width = percent + "%";
}