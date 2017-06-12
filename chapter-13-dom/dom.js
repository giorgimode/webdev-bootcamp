var body = document.querySelector("body");
var isBlue = false;

setInterval(function () {
    if (isBlue) {
        body.style.color = "blue";
    } else {
        body.style.color = "red";
    }
    isBlue = !isBlue;
}, 1000);