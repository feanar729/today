// 정수 내림차순으로 배치하기 Level 1
// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 
// 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372

// first my Solution
// function solution(n) {
//   let sumText = "";
//   const strSplit = String(n).split("");
//   for(let i = 0; i < strSplit.length; i++){
//     const sortList = strSplit.sort((first, second) => {
//       return second-first; 
//     });
//     sumText = sumText.concat(strSplit[i])
//   }
//   return Number(sumText);
// }

// console.log(solution(1138217))

// refactoring my Solution
function solution(n) {
  let sumText = "";
  const strSplit = n.toString().split("");
  const sortList = strSplit.sort((first, second) => {
    return second-first; 
  });
  sumText = parseInt(sortList.join(""));
  return sumText;
}

console.log(solution(1138217))
console.log(Object.prototype.toString.call(String()))
console.log(Object.prototype.toString.call(toString()))

// 다른 사람 풀이 1
// function solution(n) {
//   // 문자풀이
//   return parseInt((n+"").split("").sort().reverse().join(""));
// }

// 다른 사람 풀이 2
// function solution(n) {
//   var answer = 0;
//   var array = n.toString().split("");
//   array.sort(function(a,b){ return b-a;});
//   answer = parseInt(array.join(""));
//   return answer;
// }

// 배운 점
// 이전에 비슷한 알고리즘을 푼 경험이 있어 수월하게 진행함
// 이제 조금씩 알고리즘을 풀때의 사고를 하는 법을 알것 같다는 느낌이 듬
// 궁금한점이 생김 String(), toString()의 형변환에 성능에서 차이점이 있는가?
// 메서드가 사용되게 되는 방식의 차이도 있고 반환값이 같을 지라도
// 둘은 엄연히 다른 방식으로 작동된다. 그리고 String()을 쓰게되면
// null, undefined값일 때 그대로 문자열로 받지만 toString() method를
// 위에 처럼 쓰게 되었을 시는 오류를 발생 해주기 떄문에 toString()
// method를 쓰는것이 더 안전하다.

// 참고자료
/*
1: https://stackoverflow.com/questions/3945202/whats-the-difference-between-stringvalue-vs-value-tostring
2: https://www.reddit.com/r/javascript/comments/5m2e8j/string_vs_tostring/
*/