// 문자열 내 p와 y의 개수 Level 1
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 리턴하도록 함수를 완성하세요. 'p', 'y' 
// 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 예를들어 s가 pPoooyY면 True를 리턴하고 Pyy라면 False를 리턴합니다.

// 내가 짠 코드
function numPY(s){
  //함수를 완성하세요

  let findIdxP = s.match(/\p/gi);
  let findIdxY = s.match(/\y/gi);
  let countP = findIdxP.length;
  let countY = findIdxY.length;

  if(countP === countY){
    return true;
  } else {
    return false;
  }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numPY("pPoooyY")); 
console.log(numPY("Pyy"));


// 다른사람 코드1
// function numPY(s) {
//   return s.match(/p/ig).length === s.match(/y/ig).length;
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(numPY("pPoooyY"))
// console.log(numPY("Pyy"))


// 다른 사람 코드 2
// function numPY(s){
//   //함수를 완성하세요
//     return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log( numPY("pPoooyY") )
// console.log( numPY("Pyy") )

// 느낀점
// 정규표현식 gi의 g는 완전일치(발생할 모든 pattern에 대한 전역 검색)
// i는 대/소문자 무시를 뜻한다 그래서 두개를 다합친 gi는 대/소문자 무시하고 완전 일치
// 각 메서드와 정규표현식에 대한 공부를 더해야 할 듯 하다.. 
// http://egloos.zum.com/nomasumer/v/9328413 <- 참고자료
