// 서울에서김서방찾기 Level 1
// findKim 함수(메소드)는 String형 배열 seoul을 매개변수로 받습니다.
// seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하세요.
// seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function findKim(seoul){
  for(let i = 0; i < seoul.length; i++){
		return "김서방은 " + seoul[i] + "에 있다";
  }
}
console.log(findKim(["Queen", "Tod", "Kim"]));


// other Solution
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));