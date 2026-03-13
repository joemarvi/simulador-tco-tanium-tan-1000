export function toggleStudyMode(
    studyMode,
    studyModeStatus,
    studyModeBtn,
    explanationPanel,
    questions,
    showExplanation
) {

    studyMode = !studyMode;

    // Atualizar texto do botão
    if (studyModeBtn) {
        studyModeBtn.textContent = studyMode
            ? "Desativar Study Mode"
            : "Ativar Study Mode";
    }

    // Atualizar indicador visual
    if (studyModeStatus) {
        studyModeStatus.textContent = studyMode
            ? "Study Mode: ON"
            : "Study Mode: OFF";
    }

    // Quando DESATIVA study mode
    if (!studyMode) {

        // Remove todas marcações
        document.querySelectorAll(".correct, .wrong").forEach(el => {
            el.classList.remove("correct", "wrong");
        });

        // Oculta explicação
        if (explanationPanel)
            explanationPanel.style.display = "none";

    }

    // IMPORTANTE:
    // Quando ativa Study Mode NÃO mostramos respostas automaticamente
    // As respostas só aparecem no evento "change" no script.js

    return studyMode;
}