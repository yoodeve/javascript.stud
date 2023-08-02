window.onload = () => {
    main();
}

function main() {
    console.log("콘솔창에 뜬다");
    alert("알림창이다");
    let flag = confirm("확인창이다");
    console.log(flag);
    let name = prompt("이름 입력");
    console.log(name);
}