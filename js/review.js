import { renderQuestions } from "./rendering.js";
import { questionBank as allQuestions } from "./questions.js";

export function loadReviewQuiz() {
    const quizContainer = document.getElementById("quizContainer");
    if (!quizContainer) return;

    const reviewDataRaw = localStorage.getItem("reviewQuestions");
    if (!reviewDataRaw) {
        quizContainer.innerHTML = "<p>Não há questões erradas para revisar.</p>";
        return;
    }

    const wrongQuestionIds = JSON.parse(reviewDataRaw);

    // Mapeia corretamente usando ID
    const reviewQuestions = wrongQuestionIds
        .map(id => {
            const q = allQuestions.find(q => String(q.id) === String(id.id || id));
            if (!q) return null;

            // Cria cópia para não alterar o questionBank original
            const copy = { ...q, answers: q.answers ? [...q.answers] : [] };

            // Marca respostas previamente selecionadas se existirem
            if (id.selected !== undefined) {
                copy._selected = id.selected;
            }

            // True/False sempre consistente
            if (copy.type === "true_false") {
                copy.answers = ["Verdadeiro", "Falso"];
                copy._reviewNoShuffle = true;
            }

            // Marca como revisão
            copy._isReview = true;

            return copy;
        })
        .filter(q => q !== null);

    renderQuestions(quizContainer, reviewQuestions, allQuestions);
}