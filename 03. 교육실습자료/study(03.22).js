// 시간 재기
// var count = 0;
// var M = 100000;
// console.time("Start")

// for (var i = 0; i < M; i++) {
//   for (var j = 0; j < M; j++) {
//     count++;
//   }
// }
// console.timeEnd("Start")

// console.log(count);

// 수업 실습코드
// var data = [...Array(10)].map((v, i) => ++i);
// // var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var res = [];
// var sum;
// console.time("Start");

// function calculate(data, n) {
//   for (var i = n - 1; i < data.length; i++) {
//     for (var j = n - 1; j >= 0; j--) {
//       if (j >= 0) {
//         sum += data[i - j];
//       }
//     }
//     res.push(sum);
//     sum = 0;
//   }
//   return res;
// }

// console.log(calculate(data, 3));
// console.timeEnd("Start");


// O(n**) 에서 O(n)으로 줄여보기..
var data = [...Array(10)].map((v, i) => ++i);
// var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result = [];
var sum;
console.time("Start");

function calculate(data, n) {
  for (var i = 0; i < data.length; i++) { // 배열을 생성
    result.push(data[i]);
    // console.log(result);
  }
  // return result;

  for (var j = n - 1; j <= result.length; j--) { // 3개(n개)의 수를 계산 진행
    console.log(result.slice(i, i + n), i, n);
  }
  if (j >= 0) { // 음수를 뺀 양수만 넣고 더하기
    // sum()
  }
  // console.log(result);
  // if(sum > 0){
    // console.log(sum, "right");
  //   result.push()
  // }
  // res.push(sum);
  // sum = 0;
  // return res;
  // return res[res.length - 1];
}

calculate(data, 3);
console.timeEnd("Start");


// mando & woogi 코드
// function calculate2(arr, k) {
//   let result = 0;
//   for (let i = 0; i < k; i++) {
//     result = result + arr[i];
//   }
//   for (let i = 0; i < arr.length - (k - 1); i++) {
//     // console.log(result);   
//     result = result + arr[i + k] - arr[i];
//   }
// }

// 동동
// var data = [...Array(10)].map((val, idx) => ++idx);
// var res = [];

// function calc(data, n) {
//   for (var i = 0; i <= data.length - n; i++) {
//     res.push(data.slice(i, i + n).reduce((prev, curr) => prev + curr));
//   }
//   return res;
// }

// console.log(calc(data, 3));