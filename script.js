let score = 0;
let timer = 30;
let interval;

function startTimer() {
    interval = setInterval(function() {
        timer--;
        document.getElementById("timer").innerText = "Time: " + timer;
        if (timer <= 0) {
            clearInterval(interval);
            alert("Game Over! Your score is: " + score);
        }
    }, 1000);
}

function checkAnswer(answer) {
    if (answer === 4) {
        score++;
        document.getElementById("feedback").innerText = "Correct!";
    } else {
        document.getElementById("feedback").innerText = "Incorrect!";
    }
    document.getElementById("score").innerText = "Score: " + score;
}

startTimer();
