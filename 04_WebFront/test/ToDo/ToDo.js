const input_todo = document.getElementById("input_todo");
const sendBtn = document.getElementById("sendBtn");
let todoListNum = 0;

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
    const createlistCheckBtn = document.createElement("input");
    const createlistCheckLabel = document.createElement("label");
    const createtodoText = document.createElement("div");
    const createlistRemoveBtn = document.createElement("div");
    const createlistRemoveIcon = document.createElement("i");
    
    createlistCheckBtn.setAttribute("type", "checkbox");
    createlistCheckBtn.classList.add("listCheckBtn");
    createlistCheckBtn.id = "listCheckBtn" + (todoListNum++);
    createlistCheckBtn.ariaLabel = "check";
    createlistCheckLabel.setAttribute("for", createlistCheckBtn.id);

    createtodoText.classList.add("todoText");
    createlistRemoveBtn.classList.add("listRemoveBtn");
    createlistRemoveIcon.classList.add("fa-solid", "fa-trash");
    
    createlistRemoveBtn.append(createlistRemoveIcon);
    
    createtodoText.innerText = document.getElementById("input_todo").value;
    
    div.append(createlistCheckBtn, createlistCheckLabel, createtodoText, createlistRemoveBtn);
    
    document.getElementById("history").append(div);

    const listRemoveBtn = document.getElementsByClassName("listRemoveBtn");
    for (i of listRemoveBtn) {
        i.addEventListener("click", function() {
            this.parentElement.remove();
        });
    }
   
});


