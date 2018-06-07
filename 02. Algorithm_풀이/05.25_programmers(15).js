// 하샤드 수
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 n을 입력받아 n이 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// n은 1 이상, 10000 이하인 정수입니다.
// 입출력 예
// arr	return
// 10	true
// 12	true
// 11	false
// 13	false
// 입출력 예 설명
// 입출력 예 #1
// 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

// 입출력 예 #2
// 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

// 입출력 예 #3
// 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

// 입출력 예 #4
// 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.

// my Solution
function solution(x) {
  const splitWord = String(x).split("");
  let calNum = 0;
  for(let i = 0; i < splitWord.length; i++){
    calNum += Number(splitWord[i]);
  }
  if(x % calNum === 0){
    return true;
  } else {
    return false;
  }
}

console.log(solution(10));

// 다른 사람 코드1
// function Harshad(n){
//   return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
// }

// 다른 사람 코드2
// function Harshad(n){
//   return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;}));
// }

// 다른 사람 코드3
// function Harshad(n){
//   var result ;
//   var sum = 0;
//   var arr = String(n).split('');
//   for(var i=0; i<arr.length; i++) {
//     sum += Number(arr[i]);
//   }
//   return n % sum == 0 ? true : false;
// }

// 느낀점
// reduce로 활용해 데이터 변환 후 다시 계산하는 방법을 보게됨 reduce의 활용도는 무궁무진...