document.getElementById("change").addEventListener("click", function () {


});

const inputColor = document.querySelectorAll("td > input");
const colorBox = document.querySelectorAll("td > div");

inputColor.forEach(function(target) {
    target.addEventListener("keyup", logEvent);
});

function logEvent(event) {
    colorBox.style.backgroundColor = event;
}