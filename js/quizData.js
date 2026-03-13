//C:quizData.js
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function weightedShuffle(questions) {
    const expanded = [];

    questions.forEach(q => {
        const weight = q.examWeight || 1;

        for (let i = 0; i < weight; i++) {
            expanded.push(q);
        }
    });

    return shuffle(expanded);
}

export function prepareQuestions(questionBank) {

    const TOTAL_QUESTIONS = 60;

    const reviewData = localStorage.getItem("reviewQuestions");

    if (reviewData) {

        const reviewItems = JSON.parse(reviewData);

        localStorage.removeItem("reviewQuestions");

        const reviewQuestions = reviewItems
            .map(item => {

                const questionId = item.id ?? item;

                const original = questionBank.find(q => String(q.id) === String(questionId));

                if (!original) return null;

                const q = {
                    ...original,
                    answers: original.answers ? [...original.answers] : []
                };

                if (item.selected !== undefined) {
                    q._selected = item.selected;
                }

                if (q.type === "true_false") {
                    q.answers = ["Verdadeiro", "Falso"];
                    q._reviewNoShuffle = true;
                }

                q._isReview = true;

                return q;

            })
            .filter(q => q !== null);

        return reviewQuestions;
    }

    questionBank.forEach((q, idx) => {
        if (q.id === undefined || q.id === null) q.id = `q_${idx}`;
        q.id = String(q.id);
    });

    let questions = shuffle([...questionBank]);

    if (questions.length > TOTAL_QUESTIONS) {
        questions = questions.slice(0, TOTAL_QUESTIONS);
    }

    questions.forEach(q => {

        if (q.type === "true_false" && q._reviewNoShuffle) return;

        if (q.type !== "multi_select") {
            q.correct = parseInt(q.correct);
        } else {
            q.correct = q.correct.map(i => parseInt(i));
        }

        let options = q.answers.map((text, idx) => ({
            text,
            correct: q.type === "multi_select"
                ? q.correct.includes(idx)
                : idx === q.correct
        }));

        if (q.shuffleAnswers !== false && !q._reviewNoShuffle) {
            options = shuffle(options);
        }

        q.answers = options.map(o => o.text);

        if (q.type === "multi_select") {

            q.correct = options
                .map((o, i) => o.correct ? i : -1)
                .filter(i => i !== -1);

        } else {

            q.correct = options.findIndex(o => o.correct);

        }

    });

    return questions;
}