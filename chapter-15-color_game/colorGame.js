var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupMode();
    setupSquares();

    reset();

}

function setupMode() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");

            if (this.textContent === "Easy") {
                numberOfSquares = 3;
            } else if (this.textContent === "Medium") {
                numberOfSquares = 6;
            } else {
                numberOfSquares = 9;
            }
            reset();
        })
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add listeners to squares
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColor(clickedColor);
                h1.style.background = pickedColor;
                resetButton.textContent = "Play Again";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

resetButton.addEventListener("click", function () {
    reset();
});

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickRandomColor() {
    var randIndex = Math.floor(Math.random() * colors.length);
    return colors[randIndex];
}

function generateRandomColors(number) {
    var colors = [];

    for (var i = 0; i < number; i++) {
        colors.push(generateRandomColor());
    }

    return colors;
}

function generateRandomColor() {
    var colorIndexR = Math.floor(Math.random() * 256);
    var colorIndexG = Math.floor(Math.random() * 256);
    var colorIndexB = Math.floor(Math.random() * 256);

    return "rgb(" + colorIndexR + ", " + colorIndexG + ", " + colorIndexB + ")";
}