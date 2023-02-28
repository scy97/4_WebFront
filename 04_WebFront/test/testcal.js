const num1 = 0, num2 = 0, op = 0, arr = ["","",""];
const result = document.getElementById("text")

function num(btn) {
    const char = btn.innerText;
    arr[op] = char;
    result.innerText += char;
}

function op(btn) {
    const char = btn.innerText;
    op++;
    arr[op] = char;
    result.innerText += char;
}

// function cal() {

// }