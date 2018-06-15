// 디자인을 설계할때 기능을 구체화하고 그 기능을 안으로 갈수록 구체화하면서 쪼개나가기.

// 설계과정
// 1. 임의의 양의 정수 n을 넣는다.
// 2. n을 2로 나눈다.
// 3-1. 나누어 나온 몫을 n에 대입한다.
// 3-2. 나눈 값의 나머지를 배열에 unShift() 한다.
// 4. 3-1, 3-2를 반복한다 n이 0이 될 때까지(n=0)
// 5. getResult 함수에 들어간 배열을 .join() 해서 반환한다.


// 코딩구현시 문제점
// m을 만들필요가 없었음 그냥 n에 대입하면 해결 문제(별도로 나눈 몫의 값을 m을 넣으려 해서 문제였음.) 

function getResult(number, scale) {
  var arr = [];
  for (var i = number; number > 0; i--) {
    arr.unshift(number % scale);
    number = Math.floor(number / scale);
  }
  return arr.join('')
}

//console.log(getResult(11, 8));


//function equal(binary, ...arg) {
//  var res = arg.forEach(elem => {
//    console.log(elem.toString(binary));
//  });
//  return res;
//}
//console.log(equal(2, 1231, 3463, 234, 4353));



function equal (numberList, binary){
  for(let i = 0; i < numberList.length; i++){
    if(getResult(numberList[i], binary) !== (numberList[i]).toString(binary)){
      return false;
    }
  }
  return true;
}

console.log(equal([11, 12, 13, 14], 2));

