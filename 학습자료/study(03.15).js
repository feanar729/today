// var name = 'play ground';
// function home() {
//   var homeName = 'my house';
//   function printName() {
//     var nickName = 'crong house';
//     debugger;
//     console.log(name); //play ground
//     console.log(homeName); //my house
//     console.log(nickName); //error, not defined
//   }
//   printName();
//   }
// home();

// function home() {
//   var homeName = 'my house';
//   debugger;
//   function printName() {
//     return 'my name is' + homeName;
//   }
//   return printName;
// }

// var print = home();
// print();

/*function home(){
  var homeName = 'my house';
  function printName(){
    //debugger;
    return 'my name is ' + homeName;
  }
  return printName;
}
var print = home();
console.log(print);
console.log(print());
print();*/


// 1차 만들어보기
// function make(word, value) {
//   // 필요한 값 : circle 함수인지 rect 함수인지 / 위 2개를 구분한 함수에 계산할 값을 넣어야 한다.
//   // 1. 함수구분 => 조건식에 맞게 분류('circle' 들어가면 circle 함수에 'rect' 들어가면 rect 함수에)
//   // 2. 지정 값을 구분된 함수에 넣기
//   function circle(c) {
//     // 반지름 * 반지름 * 3.14;
//     return c * c * Math.PI;
//   }

//   function rect(a, b) {
//     // 밑변 * 높이
//     return a * b;
//   }

//   if(word === 'circle'){
//     return circle;
//   } else {
//     return rect;
//   }

// }
// console.log(make('rect')(10, 10));



// 차이점... 뭘까..
function circle(a) {
  return Math.PI * Math.pow(a, 2);
}

function rect(a, b) {
  return a * b;
}

// 문자 arguments가 앞에 있을 때
// function make(word){
//   return word;
// }

// console.log(make(rect)(10, 20));
// console.log(make(circle)(10));

function make(a, b) {
  function value(poly) {
    // circle 값일 때 circle의 계산할 함수로 넘김  
    // rect 값일 rect의 계산할 함수로 넘김
    return poly(a, b);
  }
  return value;
}

// 문자 arguments가 뒤에 있을 때
console.log(make(10)(circle));
console.log(make(10, 20)(rect));
