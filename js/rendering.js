//js\rendering.js
import { getResultsHistory } from "./results.js";

export function renderQuestions(quiz, questions, questionBank = null) {

    if (!quiz) return;

    quiz.innerHTML = "";

    const reviewData = localStorage.getItem("reviewQuestions");

    if (reviewData && questionBank) {

        const reviewIds = JSON.parse(reviewData);

        localStorage.removeItem("reviewQuestions");

        questions = reviewIds.map(id => {

            const original = questionBank.find(q => String(q.id) === String(id.id ?? id));

            if (!original) {
                console.warn(`Questão com id ${id} não encontrada no questionBank`);
                return null;
            }

            const q = {
                ...original,
                answers: original.answers ? [...original.answers] : []
            };

            if (q.type === "true_false") {
                q.answers = ["Verdadeiro", "Falso"];
                q._reviewNoShuffle = true;
            }

            if (id.selected) {
                q._selected = id.selected;
            }

            q._isReview = true;

            if (!q.answers || !Array.isArray(q.answers)) {
                q.answers = [];
            }

            return q;

        }).filter(q => q !== null);
    }

    questions.forEach((q, i) => {

        if (!q) return;

        const div = document.createElement("div");
        div.className = "question";
        div.id = `question-${i}`;

        let html = `<b>QUESTÃO ${i + 1}</b>`;

        if (q.domain) {
            html += `<div class='topic'>Tema: ${q.domain}</div>`;
        }

        if (q.scenario) {
            html += `<div class='scenario'><strong>Cenário:</strong> ${q.scenario}</div>`;
        }

        html += `<div class='questionText'><strong>Pergunta:</strong> ${q.question}</div>`;

        if (q._isReview && q._selected) {

            let previousAnswer = q.type === "multi_select"
                ? q._selected.map(i => String.fromCharCode(65 + i)).join(", ")
                : String.fromCharCode(65 + q._selected[0]);

            let correctAnswer = q.type === "multi_select"
                ? q.correct.map(i => String.fromCharCode(65 + i)).join(", ")
                : String.fromCharCode(65 + q.correct);

            html += `
<div class="review-info">
<b>Sua resposta anterior:</b> ${previousAnswer}<br>
<b>Resposta correta:</b> ${correctAnswer}
</div>`;
        }

        html += `<div class='answers'>`;

        const inputType = q.type === "multi_select" ? "checkbox" : "radio";

        q.answers.forEach((answer, j) => {

            const isSelected = q._selected && q._selected.includes(j);

            const isCorrect = q.type === "multi_select"
                ? (q.correct || []).includes(j)
                : j === q.correct;

            let classes = "review-answer";

            if (q._isReview) {

                if (isSelected && !isCorrect) {
                    classes += " wrong";
                }

                if (isCorrect) {
                    classes += " correct";
                }

            }

            const checked = isSelected ? "checked" : "";
            const disabled = q._isReview ? "" : "";

            html += `
<label class="${classes}">
<input type="${inputType}" name="q${i}" value="${j}" ${checked} ${disabled}>
${String.fromCharCode(65 + j)}) ${answer}
</label>`;
        });

        html += `</div>`;

        if (q._isReview && q.explanation) {

            html += `
<div class="review-explanation">
<b>Explicação:</b><br>
${q.explanation}
</div>`;
        }

        div.innerHTML = html;
        quiz.appendChild(div);

        if (q._isReview) {

            const inputs = div.querySelectorAll(`input[name="q${i}"]`);

            inputs.forEach(input => {

                input.addEventListener("change", () => {

                    let selected = Array.from(div.querySelectorAll(`input[name="q${i}"]:checked`))
                        .map(el => parseInt(el.value));

                    let correct = false;

                    if (q.type === "multi_select") {

                        const correctAnswers = [...q.correct];

                        correct =
                            selected.length === correctAnswers.length &&
                            selected.every(val => correctAnswers.includes(val));

                    } else {

                        correct = selected[0] === q.correct;

                    }

                    inputs.forEach(inp => {

                        const label = inp.parentElement;
                        const val = parseInt(inp.value);

                        label.classList.remove("wrong", "correct");

                        const optionCorrect = q.type === "multi_select"
                            ? q.correct.includes(val)
                            : val === q.correct;

                        if (optionCorrect) {
                            label.classList.add("correct");
                        }

                        if (inp.checked && !optionCorrect) {
                            label.classList.add("wrong");
                        }

                    });

                    if (correct) {
                        div.classList.add("review-passed");
                    } else {
                        div.classList.remove("review-passed");
                    }

                });

            });

        }

    });

}

export function showExplanation(questions, explanationPanel, explanationContent, index) {

    if (!questions || !questions[index]) return;

    const q = questions[index];

    if (!q.explanation) return;

    if (explanationPanel) explanationPanel.style.display = "block";

    let correctText = q.type === "multi_select"
        ? q.correct.map(i => String.fromCharCode(65 + i)).join(", ")
        : String.fromCharCode(65 + q.correct);

    if (explanationContent) {
        explanationContent.innerHTML = `<b>Resposta correta:</b> ${correctText}<br><br>${q.explanation}`;
    }
}

export function renderStats(statsContainer, stats) {

    if (!statsContainer) return;

    let html = "";

    for (let topic in stats) {

        const s = stats[topic];

        const percent = s.total > 0
            ? Math.round((s.correct / s.total) * 100)
            : 0;

        html += `
<div class="stat">
<b>${topic}</b><br>
Acertos: ${s.correct}/${s.total}<br>
Percentual: ${percent}%
</div>`;
    }

    statsContainer.innerHTML = html;
}

export function renderNavigator(navigatorContainer, questions, questionResults, finished, showExplanation) {

    if (!navigatorContainer) return;

    navigatorContainer.innerHTML = "";

    questions.forEach((_, i) => {

        const btn = document.createElement("button");

        btn.textContent = `Questão ${i + 1}`;

        if (finished) {
            btn.classList.add(questionResults[i] ? "nav-correct" : "nav-wrong");
        }

        btn.addEventListener("click", () => {

            const q = document.getElementById(`question-${i}`);

            const overlay = document.getElementById("navigatorOverlay");

            if (overlay) overlay.style.display = "none";

            if (q) q.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

        navigatorContainer.appendChild(btn);

    });

}

export function renderResultsHistory(container, history) {

    if (!container) return;

    if (!history || history.length === 0) {

        container.innerHTML = `<tr><td colspan="7">Nenhum resultado registrado.</td></tr>`;

        return;

    }

    let html = "";

    history.forEach((item, index) => {

        const percent = item.totalQuestions > 0
            ? Math.round((item.totalCorrect / item.totalQuestions) * 100)
            : 0;

        html += `
<tr>
<td>${index + 1}</td>
<td>${item.date}</td>
<td>${item.time}</td>
<td>${item.totalCorrect}</td>
<td>${item.totalQuestions}</td>
<td>${percent}%</td>
<td>
<button type="button" class="review-btn" data-index="${index}">
<i class="fa-solid fa-circle-exclamation"></i> Review Mistakes
</button>
</td>
</tr>`;

    });

    container.innerHTML = html;

    const reviewButtons = container.querySelectorAll(".review-btn");

    reviewButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            const index = btn.dataset.index;

            const historyData = getResultsHistory();

            const attempt = historyData[index];

            if (!attempt || !attempt.wrongQuestions) return;

            localStorage.setItem("reviewQuestions", JSON.stringify(attempt.wrongQuestions));

            window.location.href = "review-wrong.html";

        });

    });

}