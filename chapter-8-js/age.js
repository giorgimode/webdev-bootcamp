var age = parseInt(prompt("what is your age?"));
var isRoot = calcAge(age);
alert("Your age is a perfect square: " + isRoot);

function calcAge(age) {
    for (var i = 0; i < age / 2; i++) {
        if (i * i > age) {
            return false;
        } else if (i * i === age) {
            return true;
        }
    }
}