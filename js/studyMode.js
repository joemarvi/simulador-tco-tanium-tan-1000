// studyMode.js
export function toggleStudyMode(studyMode, studyModeStatus, studyModeBtn, explanationPanel, questions, showExplanation) {
    studyMode = !studyMode;
    studyModeStatus.textContent = studyMode ? "Ativado" : "Desativado";
    studyModeBtn.textContent = studyMode ? "📚 Desativar modo estudo" : "📚 Ativar modo estudo";

    if (!studyMode) {
        explanationPanel.style.display = "none";
    } else {
        for (let i = 0; i < questions.length; i++) {
            const selected = Array.from(document.querySelectorAll(`input[name='q${i}']:checked`));
            if (selected.length) { showExplanation(questions, explanationPanel, document.getElementById('explanationContent'), i); break; }
        }
    }

    return studyMode;
}