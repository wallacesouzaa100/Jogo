let questions = [
    { category: "História", question: "Quem descobriu o Brasil?", answer: "Pedro Álvares Cabral" },
    { category: "Geografia", question: "Qual é a capital do Japão?", answer: "Tóquio" },
    { category: "Ciência", question: "Qual é o elemento químico de símbolo H?", answer: "Hidrogênio" }
];

let currentQuestion = 0;
let score = 0;

function startGame() {
    document.getElementById("player-name-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("category-title").textContent = q.category;
    document.getElementById("question").textContent = q.question;
}

function checkAnswer() {
    let userAnswer = document.getElementById("user-answer").value.trim();
    let correctAnswer = questions[currentQuestion].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("feedback").textContent = "Correto!";
        score++;
    } else {
        document.getElementById("feedback").textContent = "Errado! Resposta certa: " + correctAnswer;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("user-answer").value = "";
        showQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = `<h2>Fim do jogo!</h2><p>Seu placar: ${score} de ${questions.length}</p>`;
    }

    document.getElementById("score").textContent = `Placar: ${score}`;
}
