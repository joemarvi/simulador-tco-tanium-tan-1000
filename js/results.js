export function calculateStats(questions) {
    let stats = {};
    questions.forEach((q, i) => {
        const topic = q.domain || "Geral";
        if (!stats[topic]) stats[topic] = { total: 0, correct: 0 };
        stats[topic].total++;

        const selected = Array.from(document.querySelectorAll(`input[name='q${i}']:checked`))
            .map(input => parseInt(input.value));

        let correct = false;
        if (q.type === "multi_select") {
            selected.sort();
            correct = JSON.stringify(selected) === JSON.stringify([...q.correct].sort());
        } else {
            correct = selected[0] === q.correct;
        }

        if (correct) stats[topic].correct++;
    });

    return stats;
}

export function saveAttemptResult(stats, questions, questionResults) {
    const historyKey = "quizResultsHistory";
    let history = [];
    try { history = JSON.parse(localStorage.getItem(historyKey)) || []; } catch (e) { history = []; }

    const now = new Date();
    const wrongQuestions = [];
    let totalCorrect = 0;

    questions.forEach((q, i) => {
        const correct = questionResults ? questionResults[i] : false;

        if (correct) {
            totalCorrect++;
        } else {
            const selected = Array.from(document.querySelectorAll(`input[name='q${i}']:checked`))
                .map(input => parseInt(input.value));
            wrongQuestions.push({ id: q.id ?? i, selected });
        }
    });

    const attemptResult = {
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        timestamp: now.getTime(),
        totalQuestions: questions.length,
        totalCorrect,
        wrongQuestions,
        stats,
        results: questionResults || []
    };

    history.push(attemptResult);

    try { localStorage.setItem(historyKey, JSON.stringify(history)); } catch (e) {
        console.warn("Erro ao salvar histórico de resultados", e);
    }
}

export function getResultsHistory() {
    const historyKey = "quizResultsHistory";
    try { return JSON.parse(localStorage.getItem(historyKey)) || []; } catch (e) { return []; }
}

export function getWrongQuestions(attemptIndex) {
    const history = getResultsHistory();
    if (!history || !history[attemptIndex]) return [];
    return history[attemptIndex].wrongQuestions || [];
}

export function setupReviewWrongButton() {
    const buttons = document.querySelectorAll('.review-wrong-btn');
    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const wrongQuestions = getWrongQuestions(idx);
            if (!wrongQuestions || wrongQuestions.length === 0) {
                alert("Não há questões erradas para revisar.");
                return;
            }
            localStorage.setItem("reviewQuestions", JSON.stringify(wrongQuestions));
            window.location.href = "review-wrong.html";
        });
    });
}

export function clearResultsHistory() {
    localStorage.removeItem("quizResultsHistory");
}