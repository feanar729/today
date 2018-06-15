// 올바른 괄호
// 올바른 괄호란 두 개의 괄호 '(' 와 ')' 만으로 구성되어 있고, 괄호가 올바르게 짝지어진 문자열입니다. 
// 괄호가 올바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 합니다.
// 예를들어

// ()() 또는 (())() 는 올바른 괄호입니다.
// )()( 또는 (()( 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 
// 문자열 s가 올바른 괄호이면 true를 return 하고, 
// 올바르지 않은 괄호이면 false를 return하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
// 입출력 예
// s	/ answer
// ()()	/ true
// (())() /	true
// )()(	/ false
// (()(	/ false
// 입출력 예 설명
// 입출력 예 #1,2,3,4
// 문제의 예시와 같습니다.

function solution(s) {
  const splitWord = s.split("");
  let bracket = 0;

  for (let value in splitWord) {
    if (splitWord[value] === '(') {
      bracket += 1;
    } else if (splitWord[value] === ')') {
      if(bracket === 0) return false;
      bracket -= 1;
    }
  }

  if (bracket === 0) {
    return true;
  } else {
    return false;
  }

}

const solution1 = solution("(())");
const solution2 = solution("())");
const solution3 = solution(")()(");
console.log(solution1 + "\n" + solution2 +"\n"+ solution3);

// 접근 방식
/*
https://medium.com/@akastwit/%EC%98%AC%EB%B0%94%EB%A5%B8-%EA%B4%84%ED%98%B8-ps-programmers-level-8-8b16c79dc87e
위에 글을 보고 memoization 방식이 필요하다고 판단이 들었다.
더불어 parser lecture에서도 필요한 방식이라 여러방면에서 찾아보고 생각을 해보게 됨

처음에는 각각의 괄호가 있을시 그 괄호에 대해 누적된 값을 적용하게 함
'(' 괄호가 있다면 +1 
')' 괄호가 있다면 -1
누적된 값이 0일시 true를 반환하고 아니면 false;

하지만 다른 문제점이 발생함 ')()(' 와 같은 경우 
각각의 문자가 있어서 결과가 0이되어 버리는 버그 상황이 발생됨 
조건 사항은 올바르게 된 '()' 와 같은 형태의 괄호가 있어야 함.
그래서 자른 문자열에서 저 같이 처음에 ')' 문자열이 들어오면 -1의 값이 할당 되고
그다음 오는 문자가 '(' 문자여서 변수에 할당된 값이 0이 됨을 발견 그래서 '('조건을 탐색 후 
')' 조건에 들어올 때의 값이 0일때 false를 리턴해 조건을 충족 시킴
모든 테스트 조건을 통과해 clear
*/

// 다른 사람 코드 1
// function is_pair(s){
//   var result = s.match(/(\(|\))/g);
//   return result[0] == '(' && result.length % 2 == 0 ? true : false
// }

// 느낀점
// 다른 코드를 보았을 때 정규표현식과 match search 메서드를 잘활용하면 좋을 수 있겠다고 생각이 듦.


// other Solution 
// https://js-algorithms.tutorialhorizon.com/2015/11/16/justify-if-a-string-consists-of-valid-parentheses/

// solution 1
// function isValid(s) {
//   if (s.length <= 1) return false;

//   let matchingOpeningBracket;
//   let stringWord;
//   let stackArr = [];

//   let openingBrackets = ['[', '{', '('];
//   let closingBrackets = [']', '}', ')'];

//   for (let i = 0; i < s.length; i++) {
//     stringWord = s[i];

//     if (closingBrackets.indexOf(stringWord) > -1) {
//       matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(stringWord)]
//       if (stackArr.length === 0 || (stackArr.pop() != matchingOpeningBracket)) {
//         return false;
//       }
//     } else {
//       stackArr.push(stringWord);
//     }
//   }

//   return (stackArr.length == 0)
// };
// console.log(isValid("([)]")) // false
// console.log(isValid("()")) // true
// console.log(isValid("{}[]()")) // true
// console.log(isValid("{[}]")) // false
// console.log(isValid("{[}]")) // false
// console.log(isValid("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")) // true
// console.log(isValid("{}[]()")) // true
