// 행렬의 덧셈 Level 1
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
// 같은 열의 값을 서로 더한 결과가 됩니다. 
// 2개의 행렬을 입력받는 sumMatrix 함수를 완성하여 
// 행렬 덧셈의 결과를 반환해 주세요.

// 예를 들어 2x2 행렬인 A = ((1, 2), (2, 3)), B = ((3, 4), (5, 6)) 가 주어지면, 
// 같은 2x2 행렬인 ((4, 6), (7, 9))를 반환하면 됩니다.
// (어떠한 행렬에도 대응하는 함수를 완성해주세요.)

function sumMatrix(A,B){
  let sumArray = Array();
  
  A.forEach((a, i) => {
    let otherArray = [];
    a.forEach((b, n) => {
      otherArray.push(b+B[i][n]);
    })
    sumArray.push(otherArray);
  })
  return sumArray;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]));


// 풀이
// otherArray에 선언한 배열에 push를 하고 있으니!
// map은
// var new_array = arr.map(function callback(currentValue[, index[, array]])
// arr배열을 돌면서 new_array에 새로 담는 기능!
// 중첩 배열에 대한 알고리즘 탐색 및 추출에 대해 좀더 공부해야 할듯 하다.(느낀점)


// 다른 사람 풀이 1
// functionfun  sumMatrix(A,B){
//   /*var answer = Array();
// var rowMax = A.length > B.length ? A.length : B.length;
// var colMax = A[0].length > B[0].length ? A[0].length : B[0].length;
//   for(var i=0; i < rowMax; i++)
// {
//   answer[i] = new Array();
//   for(var j=0; j < colMax; j++)
//   {
//     console.log(isNaN(A[i][j])?0:A[i][j]);
//     console.log(isNaN(B[i][j])?0:B[i][j]);
//           answer[i][j] = parseInt(isNaN(A[i][j])?0:A[i][j]) + parseInt(isNaN(B[i][j])?0:B[i][j]);
//   }
// }*/
// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))

// 다른 사람 풀이 2
// function sumMatrix(A,B){
//   return A.map((a,i) => a.map((b, j) => b + B[i][j]));
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))

// // 화살표 함수를 풀어 쓴 코드
// function sumMatrix(A,B){
//     return A.map(function(a, i){
//              return a.map(function(b, j){
//                      return b + B[i][j]
//                    })
//          })
// }

// 다른 사람 풀이 3
// function sumMatrix(A,B){
//   return A.map(function(v,i){
//   return (typeof(v)=="object")? sumMatrix(v,B[i]):v+B[i];
// });
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]])) 


function sumMatrix(A,B){
  let sumArray = Array();
  
  A.forEach((a, i) => {
    let otherArray = [];
    a.forEach((b, n) => {
      otherArray.push(b+B[i][n]);
    })
    sumArray.push(otherArray);
  })
  return sumArray;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]));