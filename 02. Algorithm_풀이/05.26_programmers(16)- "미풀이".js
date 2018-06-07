// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 
// 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 입출력 예
// a	b	result
// 5	24	TUE

function solution(a, b) {
  if(a < 12 && b  < 31){
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let month = a;
    let day = b;
    if(month === 2) day = day+1;
    // let calNum = day + (((month + 1) * 26 / 10) + 16 + (16/4) + (20/4) - 2*20) / 7;
    // let calDay = parseInt(calNum);

    let theDay = new Date(2016);
    let result = theDay.getDay(2016,month,day);
    return days[result];
  }
}

const result= solution(2, 11);
console.log(result);


// other my Solution 윤년까지 구하기(그냥 해봄)
// function solution(y) {
//   const years = y;
//   if(years % 4 === 0 && years % 100 !== 0 || years % 400 === 0){
//     console.log("윤년");
//   } else {
//     console.log("none 윤년");
//   }

// 해결 과정
// 요일 구하기 계산 공식을 찾아봄
// http://ppqqzz77.tistory.com/177
// 특정 날짜를 구하기 위한 메서드를 찾아봄(getDay...  etc)
