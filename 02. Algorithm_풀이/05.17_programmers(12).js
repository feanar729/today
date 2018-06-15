// 수박수박수박수박수박수? Level 1
// water_melon함수는 정수 n을 매개변수로 입력받습니다.
// 길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 
// 문자열을 리턴하도록 함수를 완성하세요.

// 예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴하면 됩니다.

function waterMelon(n){
  let result = ""
  //함수를 완성하세요
  for(let i = 0; i < n; i++){
    if(i % 2 === 0) {
      result = result+"수";
    } else{
      result = result+"박";   
    }
  }
  return result;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))


// 타인 코드 1
// function waterMelon(n){
//   var result = "수박";
//    result = result.repeat(n-1).substring(0,n);
//   //함수를 완성하세요

//   return result;
// }

// 타인 코드 2
// function waterMelon(n){
//   // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
//   return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
// }

/*
  느낀점:
  - 어떻게 풀어야 할지 감이 은근히 생각이 안 나온 케이스였다. 다시 풀어야 할 것 같다.
  - 메서드에 대한 생각을 좀더 해봐도 될듯..
*/