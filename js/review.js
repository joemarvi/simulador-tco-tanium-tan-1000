//js\review.js
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

    const wrongQuestions = JSON.parse(reviewDataRaw);

    if (!wrongQuestions || wrongQuestions.length === 0) {
        quizContainer.innerHTML = "<p>Não há questões erradas para revisar.</p>";
        return;
    }

    const reviewQuestions = wrongQuestions
        .map(item => {

            const questionId = item.id ?? item;

            const original = allQuestions.find(q => String(q.id) === String(questionId));

            if (!original) return null;

            const copy = {
                ...original,
                answers: original.answers ? [...original.answers] : []
            };

            if (item.selected !== undefined) {
                copy._selected = item.selected;
            }

            if (copy.type === "true_false") {
                copy.answers = ["Verdadeiro", "Falso"];
                copy._reviewNoShuffle = true;
            }

            copy._isReview = true;

            return copy;

        })
        .filter(q => q !== null);

    if (reviewQuestions.length === 0) {
        quizContainer.innerHTML = "<p>Não há questões erradas para revisar.</p>";
        return;
    }

    renderQuestions(quizContainer, reviewQuestions, allQuestions);
}