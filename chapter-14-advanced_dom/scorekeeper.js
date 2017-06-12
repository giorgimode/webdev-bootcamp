var player1Btn = document.querySelector("#player1");
var player2Btn = document.getElementById("player2");
var resetBtn = document.getElementById("reset");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var playingTo = document.querySelector("#playingTo");
var maxSelector = document.querySelector("#maxNumber");
var winningScore = 5;
var player1score = 0;
var player2score = 0;
var isGameOver = false;
playingTo.textContent = winningScore;

player1Btn.addEventListener("click", function () {
    if (!isGameOver) {
        player1score++;
        score1.textContent = player1score;
        isGameOver = player1score === winningScore;
        if (isGameOver) {
            score1.classList.add("winner");
        }
    }
});

player2Btn.addEventListener("click", function () {
    if (!isGameOver) {
        player2score++;
        score2.textContent = player2score;
        isGameOver = player2score === winningScore;
        if (isGameOver) {
            score2.classList.add("winner");
        }
    }
});

resetBtn.addEventListener("click", function () {
    reset();
});

maxSelector.addEventListener("change", function () {
    winningScore = this.value;
    playingTo.textContent = winningScore;
    reset();
});

function reset() {
    isGameOver = false;
    player1score = 0;
    player2score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
}
