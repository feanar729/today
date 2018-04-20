/*
  동기 / 비동기
*/

// 동기
// const baseData = [1,2,3,4,5,6,100];

// function foo() {
//   baseData.forEach((v,i) => {
//     console.log("sync", i);
//     bar();
//   });
// }

// function bar() {
//   baseData.forEach((v,i) => {
//     debugger;
//     console.log("sync2", i);
//   });
// }

// setTimeout(() => {
//   console.log(10);
// }, 1000);

// function plus() {
//   let a = 1;
//   setTimeout(() => {
//     console.log(++a);
//   }, 1000);
// }

// const result = plus();
// console.log("result", result);

const baseData = [1,2,3,4,5,6,100];

// case 1:
const asyncRun = (arr, fn) => {
  for(var i = 0; i < arr.length; i++){
    setTimeout(() => {
      fn(i);
    }, 1000);
  }
}
asyncRun(baseData, idx => console.log(idx));

// case 2:
// const asyncRun2 = (arr, fn) => {
//   for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//       fn(i);
//     }, 1000);
//   }
// }
// asyncRun2(baseData, idx => console.log(idx));

// case 3: 
// const asyncRun3 = (arr, fn) => {
//   arr.forEach((v,i) => {
//     setTimeout(() => {
//       debugger;
//       fn(i);
//     }, 1000);
//   });
// }
// asyncRun3(baseData, idx => console.log(idx));

// 동기 진행
// function animate() {
//   animate();
// }
// animate();
// 이유: js 동기 경우 싱글 쓰레드로 작동이 되는데 이때 재귀 함수로 조건없이 
// 정지되지 않고 반복해서 animate()함수가 call stack에 계속 쌓이게 된다 
// 그렇게 되면 컴퓨터가 cpu의 부담을 주지 않기 위해 call stack이 쌓인 함수가 최고점에 달했다는
// RangeError: Maximum call stack size exceeded 경고창을 보내고 강제중지된다.

// 비동기 진행
// function animate() {
//   setTimeout(animate, 1000);
//   console.log("도는 중...");
// }
// animate();
// 이유: 비동기의 경우 animate()함수가 실행 되면 call stack 메모리에 animate()함수가 올라가고(그전에 global Context가 call stack에있다) 
// 그다음 setTimeout()함수가 call stack에 쌓이게 된다 
// 이때 setTimeout()안에 있는 animate함수는 web API환경(DOM, Timeout.js, AJAX등)에 돌라가 1초뒤에 실행되고
// 1초뒤 stack Queue에 animate함수가 담긴다.
// call stack에서 setTimeout이 없어지고, 그 다음 animate함수가 없어지고, global Context가 없어져 call stack 이 비어지면
// Event Loop가 Queue에 담겨진 animate함수를 끌어다 call stack에 옮겨지고 animate()함수가 실행된다.
// 다시 animate() 함수가 실행되면 그 안에 다시 setTimeout이 실행되고 위와 반복되어 끝나지 않고 계속 진행된다.

