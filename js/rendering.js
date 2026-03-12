// rendering.js
export function renderQuestions(quiz, questions) {
    quiz.innerHTML = "";
    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";
        div.id = `question-${i}`;

        let html = `<b>QUESTÃO ${i + 1}</b>`;
        if (q.domain) html += `<div class='topic'>Tema: ${q.domain}</div>`;
        if (q.scenario) html += `<div class='scenario'><strong>Cenário:</strong> ${q.scenario}</div>`;
        html += `<div class='questionText'><strong>Pergunta:</strong> ${q.question}</div>`;
        html += `<div class='answers'>`;
        q.answers.forEach((answer, j) => {
            const inputType = q.type === 'multi_select' ? 'checkbox' : 'radio';
            html += `<label class='option'><input type='${inputType}' name='q${i}' value='${j}'>${String.fromCharCode(65 + j)}) ${answer}</label>`;
        });
        html += `</div>`;
        html += `<div class="inline-explanation" id="exp-${i}" style="display:none;"></div>`;
        div.innerHTML = html;
        quiz.appendChild(div);
    });
}

export function showExplanation(questions, explanationPanel, explanationContent, index) {
    const q = questions[index];
    if (!q.explanation) return;

    explanationPanel.style.display = "block";

    let correctText = q.type === 'multi_select'
        ? q.correct.map(i => String.fromCharCode(65 + i)).join(', ')
        : String.fromCharCode(65 + q.correct);

    explanationContent.innerHTML = `<b>Resposta correta:</b> ${correctText}<br><br>${q.explanation}`;

    const inlineBox = document.getElementById(`exp-${index}`);
    if (inlineBox) {
        inlineBox.style.display = "block";
        inlineBox.innerHTML = `<b>Resposta correta:</b> ${correctText}<br><br>${q.explanation}`;
    }
}

export function renderStats(statsContainer, stats) {
    let html = "";
    for (let topic in stats) {
        let s = stats[topic];
        let percent = Math.round((s.correct / s.total) * 100);
        html += `<div class='stat'><b>${topic}</b><br>Acertos: ${s.correct} / ${s.total}<br>Percentual: ${percent}%</div>`;
    }
    statsContainer.innerHTML = html;
}

export function renderNavigator(navigatorContainer, questions, questionResults, finished, showExplanation) {
    navigatorContainer.innerHTML = "";
    questions.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.textContent = `Questão ${i + 1}`;
        if (finished) {
            btn.classList.add(questionResults[i] ? "nav-correct" : "nav-wrong");
        }
        btn.addEventListener('click', () => {
            const questionElement = document.getElementById(`question-${i}`);
            document.getElementById('navigatorOverlay').style.display = 'none';
            questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if (finished && !questionResults[i]) setTimeout(() => showExplanation(questions, document.getElementById('studyExplanation'), document.getElementById('explanationContent'), i), 400);
        });
        navigatorContainer.appendChild(btn);
    });
}