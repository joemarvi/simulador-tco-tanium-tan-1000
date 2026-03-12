// quizData.js
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function prepareQuestions(questionBank) {
    let questions = shuffle([...questionBank]).slice(0, 60);

    questions.forEach(q => {
        if (q.type !== "multi_select") {
            q.correct = parseInt(q.correct);
        } else {
            q.correct = q.correct.map(i => parseInt(i));
        }

        let options = q.answers.map((text, index) => ({
            text,
            correct: q.type === 'multi_select'
                ? q.correct.includes(index)
                : index === q.correct
        }));

        options = shuffle(options);
        q.answers = options.map(o => o.text);

        if (q.type === 'multi_select') {
            q.correct = options
                .map((o, i) => o.correct ? i : -1)
                .filter(i => i !== -1);
        } else {
            q.correct = options.findIndex(o => o.correct);
        }
    });

    return questions;
}