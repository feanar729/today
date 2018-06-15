// 평균구하기 Level 1
// 함수를 완성해서 매개변수 array의 평균값을 return하도록 만들어 보세요.
// 어떠한 크기의 array가 와도 평균값을 구할 수 있어야 합니다.

function average(array){
  //함수를 완성하세요
  // let count = 1;
  let sumValue = array.reduce((acc, curr) => {
      // if(acc+curr) count++;
      return acc+curr;
  });
  // return sumValue / count;
  return sumValue / array.length;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [5,3,4] 
console.log("평균값 : " + average(testArray));



// 다른 사람 코드 
// function average(array){
//   return array.reduce((a, b) => a + b) / array.length;
// }


// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// var testArray = [5,3,4] 
// console.log("평균값 : " + average(testArray));


// 느낀점
/*
  reduce를 써보고 싶어서 써봤는데 reduce의 이해가 부족하다고 느낌
  접근방법을 나처럼 생각하는 사람도 있었으나, 
  위에 다른 사람 최고의 코드에 배열의 길이를 설정해 나눈 생각은 못함;;
*/ 