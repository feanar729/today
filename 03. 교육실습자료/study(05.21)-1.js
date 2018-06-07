//2초뒤에  'codesquad'가 출력되도록 코드를수정하세요. (출력은 printMyname을 통해서 할 수 있음)
//(a,b객체를 직접 부를 수 없음. bind,call 등을 사용해야 함)
// https://gist.github.com/nigayo/d737480fa02d10dfff577c4ca7005632

// my Solution
const a = {
  run() {
    setTimeout(function() {
      console.log(this)
      const name = this.getName();
      printMyname(name);
    }.bind(b), 1000);
  }
  
}

const b = {
  start(printMyname) {
    setTimeout(function () {
      a.run();
    }, 1000);
  },
  getName() {
    return 'codesquad';
  }
}

const printMyname = (name) => console.log(name);
b.start();

// other solution
// const a = {
//   run() {
//     setTimeout(() => {
//       const name = this.getName();
//       printMyname(name);
//     }, 1000);
//   }
  
// }

// const b = {
//   start(printMyname) {
//     setTimeout(function() {
//       a.run.call(b);
//     }, 1000);
//   },
//   getName() {
//     return 'codesquad';
//   }
// }

// const printMyname = (name) => console.log(name);
// b.start();

// 느낀점
/*
  this가 가리키는 시점 
  this의 장점 그리고 용도
  call, bind의 사용법 어떻게 작동되는가?
  ES6 arrow function 사용법
*/ 

