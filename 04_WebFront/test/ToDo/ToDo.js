const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const all = document.getElementById("all");
const doing = document.getElementById("doing");
const done = document.getElementById("done");
const removeAll = document.getElementById("removeAll");

let todoListNum = 0;

inputText.addEventListener("input", (e) => {
    e.target.style.height = "27px";
    e.target.style.height = (e.target).scrollHeight + "px";
});

window.addEventListener("resize", () => {
    inputText.style.height = "27px";
    inputText.style.height = inputText.scrollHeight + "px";
});

addBtn.addEventListener("click", () => {
    if ((inputText.value).trim().length > 0) {
        todoListNum++;
        const div = document.createElement("div");
        const createListCheckBtn = document.createElement("input");
        const createListCheckLabel = document.createElement("label");
        const createTodoText = document.createElement("div");
        const createListRemoveBtn = document.createElement("div");

        createListCheckBtn.setAttribute("type", "checkbox");
        createListCheckBtn.id = "listCheckBtn" + todoListNum;
        createListCheckBtn.classList.add("listCheckBtn");
        createListCheckLabel.setAttribute("for", createListCheckBtn.id);

        createTodoText.classList.add("todoText");
        createListRemoveBtn.classList.add("listRemoveBtn");

        createTodoText.innerText = document.getElementById("inputText").value;

        div.append(createListCheckBtn, createListCheckLabel, createTodoText, createListRemoveBtn);

        document.getElementById("historyList").append(div);

        inputText.value = null;
        inputText.focus();

        const listRemoveBtn = document.getElementsByClassName("listRemoveBtn");
        for (i of listRemoveBtn) {
            i.addEventListener("click", function () {
                this.parentElement.remove();

                const historyList = document.getElementById("historyList").children;
                listCount.innerText = historyList.length + "개";
            });
        }

        const historyList = document.getElementById("historyList").children;
        listCount.innerText = historyList.length + "개";
    } else {
        alert("해야 할 일을 입력해주세요.");
        inputText.value = null;
        inputText.focus();
    }
});

removeAll.addEventListener("click", () => {
    const history = document.getElementById("historyList");
    history.replaceChildren();

    const historyList = document.getElementById("historyList").children;
    listCount.innerText = historyList.length + "개";
});

all.addEventListener("click", () => {

});

doing.addEventListener("click", () => {

});

done.addEventListener("click", () => {

});