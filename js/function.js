console.log(add(20, 10)); // 호이스팅

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return;
}

// 익명함수
const printInfo = function () {
  console.log("정보출력");
};
printInfo();
console.log(typeof printInfo);

function callback(fx) {
  console.log("콜백함수");
  fx();
}

callback(printInfo);

const fx1 = function (a) {
  console.log("a:" + a);
};

fx1(10);

// 화살표함수
const fx2 = (b) => {
  console.log("a:" + b);
};
fx2(10);
