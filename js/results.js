export function calculateStats(questions) {
    let stats = {};
    questions.forEach((q, i) => {
        const topic = q.domain || "Geral";
        if (!stats[topic]) stats[topic] = { total: 0, correct: 0 };
        stats[topic].total++;

        const selected = Array.from(document.querySelectorAll(`input[name='q${i}']:checked`))
            .map(input => parseInt(input.value));

        if (q.type === 'multi_select') {
            selected.sort();
            const correctSorted = [...q.correct].sort();
            if (JSON.stringify(selected) === JSON.stringify(correctSorted)) stats[topic].correct++;
        } else {
            if (selected[0] === q.correct) stats[topic].correct++;
        }
    });
    return stats;
}