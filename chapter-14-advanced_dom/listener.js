var isPurple = false;
document.querySelector("button").addEventListener("click", function(){
    if (isPurple) {
        document.body.style.background = "white";
       isPurple = false;
    }
    else {
        document.body.style.background = "purple";
        isPurple = true;
    }
});

