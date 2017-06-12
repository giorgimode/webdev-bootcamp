var input = ask();
var todos = ["el1"];

while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        todos.push(prompt("Enter new item"));
    }
    input = ask();
}

console.log("YOU QUIT THE APP.");

function ask() {
    return prompt("what do you want to do? ");
}
