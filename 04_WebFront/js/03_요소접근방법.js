function fnTest1() {
    // id가 "div1"인 요소를 얻어와 상수형 변수 div1에 저장
    const div1 = document.getElementById("div1");

    // 접근한 요소의 배경색을 얻어와 변수(bgColor)에 저장
    const bgColor = div1.style.backgroundColor;

    if (bgColor == 'red') {
        div1.style.backgroundColor = "yellow";
    } else {
        div1.style.backgroundColor = "red";
    }
}

function fnTest2() {
    const arr = document.getElementsByClassName("div2");

    console.log(arr);
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);

    arr[0].style.backgroundColor = "green";
    arr[1].style.backgroundColor = "yellow";
    arr[2].style.backgroundColor = "red";

    // Java와 for문 형식 같음
    for (let i = 0; i < arr.length; i++) {
        arr[i].innerText = (i + 1) + '번째 요소입니다.';
    }
}

// 태그명으로 접근하기
function fnTest3() {
    // 문서내에 존재하는모든 li 요소를 얻어와 배열 형식으로 반환
    const arr = document.getElementsByTagName("li");

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i].innerText;

        arr[i].style.backgroundColor = "rgb(100," + num + " ,130)";

    }

}

// input 태그 값(value) 얻어오기 / 변경하기
function fnTest4() {
    // input 요소 접근하기
    const input = document.getElementById("inputTest");

    // input 관련 태그에 작성된 값을 나타내는 속성 == value

    // input 요소에 작성된 값을 얻어와 alert에 출력
    alert(input.value);

    input.value = "";
}

// name 속성으로 접근하기
function fnTest5() {
    // name 속성 값이 hobby인 요소를 모두 얻어와 배열 형식으로 변횐
    const hobbyArr = document.getElementsByName("hobby");

    let str = ""; // 체크된 체크박스의 값을 누적할 변수 선언
    let count = 0; // 체크 개수 카운트

    for (let i = 0; i < hobbyArr.length; i++) {
        // .checked 속성
        // 해당 요소가 체크되어 있다면 true / 아니면 false
        // radio, checkbox 전용 속성
        if (hobbyArr[i].checked) { // 체크된 경우
            str += hobbyArr[i].value + " "; //값 누적

            count++; // 1 증가
        }
    }

    const result5 = document.getElementById("result5");

    if (str != "") { // 체크된 것이 하나라도 있을 때
        result5.innerText = str;

        result5.innerHTML += "<br><br> 선택된 개수 : " + count;
    } else {
        result5.innerText = "선택된 취미가 없습니다.";
    }
}

// css 선택자로 접근하기
function fnTest6() {
    // id 속성값이 "cssTest"인 요소를 1개 선택
    // (여러 요소가 있는 경우 첫 번째 요소만 선택)
    document.querySelector("#cssTest").style.border = "3px solid green";
    document.querySelector("#cssTest > div").style.backgroundColor = "gold";
    const arr = document.querySelectorAll("#cssTest > div");

    for (let i = 0; i < arr.length; i++) {
        arr[i].style.fontSize = '30px';
    }
}

function readValue() { // 입력된 값을 읽어들여 채팅창에 출력
    // 채팅과 관련된 요소 모두 얻어오기
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chattingInput")

    // 채팅이 정상으로 입력된 경우에만 출력
    if (input.value.trim().length > 0) {
        // 문자열.trim() : 문자열 좌우 공백을 제거 (중간 공백 제거 X)

        // 채팅창에 입력된 값으로 채팅 추가
        bg.innerHTML += "<p><span>" + input.value + "</span></p>";

        // 스크롤을 제일 밑으로 내리기
        // 요소.scrollTop : 요소 내부 현재 스크롤의 위치
        // 요소.scrollHeight : 스크롤의 전체 높이
        // 요소.scrillTop = 위치 : 스크롤을 특정 위치로 이동
        bg.scrollTop = bg.scrollHeight;
    }

    input.value = "";
}

function inputEnter() {
    // 키보드 입력 과정
    // 키 누름 -> keydown 이벤트 -> input 태그에 입력
    // -> keypress -> (손을 때면) keyup

    // keydown : 모든 키가 눌렸을 때
    // keypress : 영문 / 숫자 / 특수문자 / 띄어쓰기

    if (window.event.key == "Enter") {
        readValue();
    }
}