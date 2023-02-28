// 배열 확인
document.getElementById("btn1").addEventListener("click", function () {
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ['사과', '딸기', '바나나'];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // 배열에 존재하지 않는 인덱스에 값 대입
    // -> 자동으로 추가되면서 길이 증가
    arr1[0] = '뽀로로';
    arr1[1] = 5000;
    arr1[2] = true;

    // 중간 인덱스 건너뛰면, 건너뛴 부분은 empty로 남음
    arr1[5] = 111; // 추가 가능
    console.log(arr1);

    // for문으로 배열 요소 반복 접근하기

    // 1. 일반 for문 - 배열, 컬렉션
    // for(let i = 0; i < arr4.length; i++) {
    //     console.log(arr4[i]);
    // }

    // 2. 배열.forEach(function(item, index) { 반복수행 코드} ) - 배열
    // - item : 현재 접근중인 요소
    // - index : 현재 인덱스

    // * 여러 요소를 얻어온 경우(HTMLCollection, NodeList)는
    // 배열이 아니므로 forEach() 문 사용 불가!
    // arr4.forEach(function (a,i) {
    //     console.log(i + " : " + a);
    // })

    // 3. for(item of 배열(또는 컬렉션)) {} - 배열, 컬렉션
    // = Java 향상된 for문과 비슷함
    // (Symbol.iterator가 존재하는 객체에 사용 가능)
    for (let item of arr4) {
        console.log(item);
    }

    // li 태그에 작성된 값 얻어와서 합 구하기
    // const list = document.getElementsByTagName("li");
    const list = document.querySelectorAll("#test > li");

    let sum = 0;
    for (let item of list) {
        sum += Number(item.innerText);
        // 문자열 -> 숫자
    }

    console.log("sum : " + sum);

    // 4. for(let key in 객체) - JS 객체용 for문

})

// 배열 관련 함수 확인
document.getElementById("btn2").addEventListener("click", function () {
    // 비어있는 배열 생성
    const arr = []; // == new Array();

    // 배열.push(값) : 배열 마지막 요소로 전달한 값이 추가된다.
    arr.push("초밥");
    arr.push("냉면");
    arr.push("삼겹살");
    arr.push("쌀국수");

    // 배열.toString() : 배열 요소 사이 "," 추가한 문자열 반환
    console.log(arr.toString());

    // 배열.pop() : 배열의 마지막 요소를 꺼내와 반환
    const temp = arr.pop();
    console.log("arr : " + arr.toString());
    console.log("temp : " + temp);

    // 배열.indexOf("값")
    console.log("초밥 인덱스 : " + arr.indexOf('초밥'));
    console.log('갈비가 arr에 있는가? : ' +
        (arr.indexOf('갈비') != -1));

    // 배열.sort()
    console.log(arr.sort());

    // 숫자 정렬의 문제점과 해결방법
    const numArr = [5, 3, 2, 10, 1]; // -> 1, 2, 3, 5, 10
    console.log(numArr.sort()); // -> 1, 10, 2, 3, 5

    console.log(numArr.sort(function (a, b) { return a - b; }));
    // 버블 정렬, 삽입 정렬, 선택 정렬
    // -> 숫자 기분 정렬 : 1, 2, 3, 5, 10

    console.log(numArr);
    // * sort() 함수는 원본 배열의 순서를 정렬함
    // -> 원본 훼손 발생 (깊은 복사 이용해서 해결 가능)

    // 배열.join("구분자")
    console.log(numArr.join("//"));
})

document.getElementById("btn3").addEventListener("click", function () {
    const arr = [];

    for (let i = 0; i < 6; i++) {
        arr[i] = Math.floor(Math.random() * 46);

        for(let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j-1]) {
                console.log(arr[i] + "," + arr[j-1]);
                // console.log("-----");
                i--;
                break;
            }
        }
    }

    arr.sort(function (a, b) { return a - b; });
    console.log("로또번호 : " + arr.join(", "));

})

// 로또 번호 생성
// document.getElementById("btn3").addEventListener("click", function() {
//     const lotto = [];
//     // 1 ~ 45 난수
//     const ran = Math.floor(Math.random() * 45 + 1);

//     // 중복 검사

//     // 배열에 난수 값이 없으면
//     if (lotto.indexOf(ran) == -1) {
//         // 마지막 요소 추가
//         lotto.push(ran);
//     }

//     lotto.sort(function (a, b) { return a - b; }); // 오름차순 정렬
//     console.log("로또번호 : " + lotto);
// })