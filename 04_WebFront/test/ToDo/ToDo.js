const input_todo = document.getElementById("input_todo");
const sendBtn = document.getElementById("sendBtn");
const listCheckBtn = document.getElementsByClassName("listCheckBtn");
const history = document.getElementById("history").childNodes;

input_todo.addEventListener("input", (e) => {
    e.target.style.height = "1px";
    e.target.style.height = (event.target).scrollHeight + "px";
});

window.addEventListener("resize", () => {
    input_todo.style.height = "1px";
    input_todo.style.height = input_todo.scrollHeight + "px";
});

sendBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    const createlistCheckBtn = document.createElement("div");
    const createlistCheckIcon = document.createElement("i");
    const createtodoText = document.createElement("div");
    const createlistRemoveBtn = document.createElement("div");
    const createlistRemoveIcon = document.createElement("i");

    createlistCheckBtn.classList.add("listCheckBtn");
    createlistCheckIcon.classList.add("fa-regular", "fa-square-check");
    createtodoText.classList.add("todoText");
    createlistRemoveBtn.classList.add("listRemoveBtn");
    createlistRemoveIcon.classList.add("fa-solid", "fa-trash");

    createlistCheckBtn.append(createlistCheckIcon);
    createlistRemoveBtn.append(createlistRemoveIcon);

    createtodoText.innerText = document.getElementById("input_todo").value;

    div.append(createlistCheckBtn, createtodoText, createlistRemoveBtn);

    document.getElementById("history").append(div);
});

console.log(history);

for (let i of history) {
    i.addEventListener("click", () => {
        i.classList.toggle("fa-solid");
    });
}
