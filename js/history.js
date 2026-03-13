// history.js
import { getResultsHistory } from './results.js';
import { renderResultsHistory } from './rendering.js';

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("historyContainer");
    const history = getResultsHistory();
    renderResultsHistory(container, history);

    // Conecta os botões de review existentes
    const reviewButtons = container.querySelectorAll(".review-btn");
    reviewButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            const historyData = getResultsHistory();
            const attempt = historyData[index];

            if (!attempt || !attempt.wrongQuestions || attempt.wrongQuestions.length === 0) {
                alert("Não há questões erradas para revisar.");
                return;
            }

            localStorage.setItem(
                "reviewQuestions",
                JSON.stringify(attempt.wrongQuestions)
            );

            window.location.href = "review-wrong.html";
        });
    });

    // ===============================
    // BOTÃO PARA LIMPAR HISTÓRICO
    // ===============================
    const clearBtn = document.querySelector(".clear-history-btn");
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (confirm("Tem certeza que deseja apagar todo o histórico?")) {
                import('./results.js').then(module => {
                    module.clearResultsHistory();
                    // Atualiza a tabela
                    renderResultsHistory(container, []);
                });
            }
        });
    }

});
