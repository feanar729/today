// 문자열 내림차순으로 배치하기 Level 1
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 
// 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 
// 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// Zbcdefg	gfedcbZ

function solution(s) {
  const splitStr = s.split("");
  const sortStr = splitStr.sort((a, b) => {
    if(a > b) return -1;
    if(a < b) return 1;
  });
  return sortStr.join("");
}

const result = solution("ZDBsdsavbaA");
console.log(result)


// 다른 사람 코드 1
// function solution(s) {
//   return s.split('').sort((a, b) => {
//       if (a > b) return -1;
//       if (b > a) return 1;
//       return 0;
//   }).join('');
// }

// 다른 사람 코드 2
// function solution(s) {
//   return s.split("").sort((a,b) => a<b ? 1:-1).join("")
// }


// 느낀 점
// 내 코드와 별 차이가 없어서 딱히..  다르다면 짧게 했다 정도? 
// 느낀점은 크게 없는 것 같다.