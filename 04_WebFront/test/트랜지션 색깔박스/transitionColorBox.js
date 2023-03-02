const box = document.querySelectorAll("td");
const input = document.querySelectorAll("td > input");
const inputDuration = document.getElementById("inputDutation");
const change = document.getElementById("change");

for(let val of box) {
    val.addEventListener("keyup", () => {
        console.log(event.target.value);
        val.firstElementChild.style.backgroundColor = event.target.value;
    });
}

change.addEventListener("click", () => {
    // box.style.transitionDuration = inputDuration.value;
    console.log(inputDuration.value);
});