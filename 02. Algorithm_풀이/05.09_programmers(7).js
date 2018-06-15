// 삼각형출력하기 Level 1
// printTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.
// 다음을 참고해 *(별)로 높이가 num인 삼각형을 문자열로 리턴하는 printTriangle 메소드를 완성하세요
// printTriangle이 return하는 String은 개행문자('\n')로 끝나야 합니다.

// 높이가 3일때

// *
// **
// ***
// 높이가 5일때

// *
// **
// ***
// ****
// *****

// 내가 한 코드
function printTriangle(num) {
  var result = ''
  // 함수를 완성하세요
  for(let i = 1; i <= num; i++){ // '*'을 num 만큼 생성
    for(let p = 0; p < i; p++){ // 위에 글자를 반복해 작동하기 위한 반복문
        result+='*';
    }
    result+='\n';
  }
  return result
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(3) );

// 솔로몬 코드
// function printTriangle(num) {
//   let result = "";
//   let sum = "";
//   for (let n = 1; n <= num; n++) {
//     sum += "*"
//     result += sum + ("\n");
//   }
//   return result;
// }


// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log( printTriangle(3) );

// 다른사람 코드
// function printTriangle(num) {
//   return num < 1 ? "" : printTriangle(num-1) + "*".repeat(num) + "\n";
// }
// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log( printTriangle(3) );