const box = document.querySelectorAll("td");
const input = document.querySelectorAll("td > input");
const transduration = document.getElementById("inputDuration");
const btn = document.getElementById("change");
const time = document.getElementById("currentDuration");

box.forEach(function (target) {
    target.addEventListener("keyup", logEvent);
});

function logEvent(event) {
    const i = this.className;
    this.style.backgroundColor = input[i].value;
    console.log(input[i].value);
};

btn.addEventListener("click", transEvent);

function transEvent() {
    box.forEach(function(target) {
        target.style.transitionDuration = transduration.value + "s";
    })
    time.innerText = transduration.value + "초";
}