window.onload = () => {
  main();
};

function main() {
  var a = 10; // 변수(사용ㄴㄴ)
  let b = 20; // 변수
  const c = 30; // 상수

  console.log(a);
  console.log(b);
  console.log(c);

  var a = 40;
  console.log(a);

  b = 50;
  console.log(b);

  // c = 60;
  // console.log(c);
  let name = "한유정";
  let age = 29;
  let score = 90.5;
  let status = true;

  console.log("이름", name, "type(", typeof name, ")");
  console.log("나이", age, "type(", typeof age, ")");
  console.log("성적", score, "type(", typeof score, ")");
  console.log("상태", status, "type(", typeof status, ")");

  console.log("10" === 10); // 값+자료형 비교
  console.log("10" == 10); // 값만 비교

  console.log("10" != 10);
  console.log("10"!==10);

  let count; // undefined
  console.log(count);
  let count2 = null;
  console.log(count2);
}

