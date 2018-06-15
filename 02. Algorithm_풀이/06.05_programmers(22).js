// 최댓값과 최솟값 Level 1
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 (최소값) (최대값)형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 1 2 3 4라면 1 4를 리턴하고, -1 -2 -3 -4라면 -4 -1을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// 입출력 예
// s | return
// 1 2 3 4 | 1 4
// -1 -2 -3 -4	| -4 -1
// -1 -1	| -1 -1

function solution(s) {
  const splitData = s.split(" ");
  const max = Math.max.apply(null, splitData)
  const min = Math.min.apply(null, splitData);
  return min + " " + max;
}

const sol1 = solution("1 2 3 4");
const sol2 = solution("-1 -2 -3 -4");
const sol3 = solution("-1 -1");
console.log(sol1, sol2, sol3)


// 다른사람 코드 1
// function solution(s) {
//   const arr = s.split(' ');

//   return Math.min(...arr)+' '+Math.max(...arr);
// }


// 다른 사람 코드 2
// function solution(s) {
//   var arr = s.split(" ");
//   return arr.reduce((p, c) => [Math.min(p[0], c), Math.max(p[1], c)], [arr[0], arr[1]]).join(" ")
// }

// 느낀점
// 쉬운 문제여서 패스
// reduce를 저렇게 쓸수 있다는 깨달음..