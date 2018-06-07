// 스트링을 숫자로 바꾸기 Level 1
// strToInt 메소드는 String형 str을 매개변수로 받습니다.
// str을 숫자로 변환한 결과를 반환하도록 strToInt를 완성하세요.
// 예를들어 str이 1234이면 1234를 반환하고, -1234이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

function strToInt(str){
  var result = 0;
  //함수를 완성하세요
  result = Number(str);
  return result;
}


// // // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(strToInt("-1234"));


// // 다른 사람 코드
// function strToInt(str){
//   return +str; // or return str/1;
// }
// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(strToInt("-1234"));

// 느낀점 
/*
  자바스크립트 자체에 암묵적 형변환의 특성이 있어서 저런 방식을 활용해서 변환시키는 방식도 있다는 걸 알게됨..
  기능을 아에안쓰고 저렇게 형변환하는 걸 보고 감탄...
*/ 