// function countdown2(n) {
//   //termination condition
//   console.log(n);
//   if (n <= 0) {
//       return;
//   }
//   countdown2(n - 1);
// }

// countdown2(10);


function factorial(n) {
  //implement
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  }
  console.log(n);
  return n * factorial(n-1);
}
factorial(3);

// 유의점
// 재귀는 조건문이 반드시 필요한다(안그러면 함수의 무한반복으로 멈추지 않게 된다.)
