var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(6);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors
    squares[i].style.background = colors[i];

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