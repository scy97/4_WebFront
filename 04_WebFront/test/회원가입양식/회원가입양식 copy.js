document.getElementById("id").addEventListener("focusout", function () {
    const regExp = /^[a-z][\w-_]{5,13}$/;

    if (regExp.test(this.value)) {
        this.style.backgroundColor = "green";
        this.style.color = "white";
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }
})

document.getElementById("idCheck").addEventListener("click", function () {
})

document.getElementById("pw").addEventListener("keyup", function () {
    if (document.getElementById("pwCheck").value != "") {
        if (document.getElementById("pwCheck").value == this.value) {
            document.getElementById("pwConfirm").style.color = "green";
            document.getElementById("pwConfirm").innerText = "비밀번호 일치";
        } else {
            document.getElementById("pwConfirm").style.color = "red";
            document.getElementById("pwConfirm").innerText = "비밀번호 불일치";
        }
    }
})

document.getElementById("pwCheck").addEventListener("keyup", function () {
    if (document.getElementById("pw").value.trim().length == 0) {
        alert("비밀번호를 입력해주세요.");
        this.value = "";
        document.getElementById("pw").focus();
    } else {
        if (document.getElementById("pw").value == this.value) {
            document.getElementById("pwConfirm").style.color = "green";
            document.getElementById("pwConfirm").innerText = "비밀번호 일치";
        } else {
            document.getElementById("pwConfirm").style.color = "red";
            document.getElementById("pwConfirm").innerText = "비밀번호 불일치";
        }
    }

})

document.getElementById("name").addEventListener("keyup", function () {
    const regExp = /^[가-힣]{2,5}$/
    if (regExp.test(this.value)) {
        document.getElementById("nameConfirm").style.color = "green";
        document.getElementById("nameConfirm").innerText = "정상입력";
    } else {
        document.getElementById("nameConfirm").style.color = "red";
        document.getElementById("nameConfirm").innerText = "한글만 입력하세요";
    }
})

function validate() {
    // 성별이 선택되지 않은 경우
    // '성별을 선택해주세요.' 경고창 출력
    // submit 기본 이벤트를 제거함.

    // 체크된 라디오 버튼만 얻어오기
    const gender = document.querySelector("input[name='gender']:checked")

    if (gender == null) {
        alert("성별을 선택해주세요");
        return false;
    }

    // 전화번호
    const inputtel = document.getElementById("phoneNumber");

    const regExp = /^[0]\d{1,2}-\d{3,4}-\d{4}$/;

    if(!regExp.test(inputtel.value)) {
        alert("전화번호 형식이 올바르지 않습니다.");
        return false;
    }

    return false;

}