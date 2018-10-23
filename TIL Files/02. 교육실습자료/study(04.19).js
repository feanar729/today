/*
  동기 / 비동기
*/

// 동기
// const baseData = [1, 2, 3, 4, 5, 6, 100];

// function foo() {
//   baseData.forEach((v, i) => {
//     console.log("sync", i);
//     bar();
//   });
// }

// function bar() {
//   baseData.forEach((v, i) => {
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

const baseData = [1, 2, 3, 4, 5, 6, 100];

// case 1과 case 2의 결과 값 차이가 왜 있는가?
/* 
answer : scope 영역의 차이 때문
var는 function-scope / let은 block-scope 의 차이가 있다 
여기서 var는 아래와 같은 예시의 참조값을 받고 있는다(즉 비동기시 출력되는 참조값이 다 돌아진 상태의 값(7)이다)
      (i): 참조값 = 7
  ---------
  |   |   |
  0   1   2 : index
하지만 let의 경우 참조값의 범위가 block-scope단위로 각 index의 값이 저장된 상태의 참조값을 받고 출력한다
      (i): 참조값 = 1, 2, 3 ....
  ---------
  |   |   |
  0   1   2 : index
*/
// // case 1:
const asyncRun = (arr, fn) => {
  for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
      fn(i);
    }, 1000);
  }
}
asyncRun(baseData, idx => console.log(idx));

// // case 2:
const asyncRun2 = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      fn(i);
    }, 1000);
  }
}
asyncRun2(baseData, idx => console.log(idx));

// case 3: 
// const asyncRun3 = (arr, fn) => {
//   arr.forEach((v, i) => {
//     setTimeout(() => {
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


/* ============================================================================================================ */
// forEach 만들어 보기~(09.20 일자)
// const a = [1, 2, 3, 4, 5];

// function forEach(a) {
//   for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
//   }
// }

// forEach(a);

// 동기 & 비동기를 설명하시오!
const baseDataArr = [1, 2, 3, 4, 5, 6, 100];

const asyncRunExp = (arr, fn) => {
  arr.forEach((v, i) => {
    setTimeout(() => {
      setTimeout(() => {
        console.log("cb 2");
        fn(i)
      }, 2000);
      console.log("cb 1", v);
    }, 2000);
    console.log("forEach")
  });
  console.log("async")
}

asyncRunExp(baseDataArr, idx => console.log(idx));

// const baseData = [1, 2, 3, 4, 5, 6, 100];

// function sync() {
//   baseData.forEach((v, i) => {
//     console.log("sync ", i);
//   });
// }

// const asyncRun = (arr, fn) => {
//   arr.forEach((v, i) => {
//     setTimeout(() => fn(i), 1000);
//   });
// }


// function sync2() {
//   baseData.forEach((v, i) => {
//     console.log("sync 2 ", i);
//   });
// }

// asyncRun(baseData, idx => console.log(idx))
// sync();
// sync2();