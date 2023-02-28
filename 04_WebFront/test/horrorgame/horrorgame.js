let count = 0;
document.getElementById("div1").addEventListener("mouseover", function() {
    if (count <= 10) {
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
        this.style.fontFamily = "궁서";

        if (count == 0) {
            this.innerText = "사랑해";
        } else {
            this.innerText += "사랑해";
        }

        count++
    } else {
        this.innerText = "그만해!!!";
        this.style.backgroundColor = 'black';
        this.style.color = 'white';
        this.style.fontFamily = "궁서";
        this.style.lineHeight = "40px";
    }
})