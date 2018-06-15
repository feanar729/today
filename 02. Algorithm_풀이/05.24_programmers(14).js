// 가운데 글자 가져오기 Level 1
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// word : return
// abcde : c
// qwer : we

// my Solution
function solution(s) {
  const cal = Math.ceil(s.length/2);
  if (s.length % 2 === 0) {
    const word2 = s.substring(cal-1, cal+1)
    return word2;
  } else {
    const word1 = s.substring(cal, cal-1)
    return word1;
  }
}

console.log(solution("abcde"));
console.log(solution("qwer"));

// 다른 사람 풀이 1
// function solution(s) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }


// 다른 사람 풀이 2
// function solution(s) {
//   return s.length % 2 == 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(Math.floor(s.length / 2), 1);
// }

// 느낀점
// 3항 연산자의 활용으로도 더 짧은 코드를 할 수 있을 것 같았음...