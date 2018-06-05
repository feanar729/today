// javascript
//hello foo를 출력하세요.
// class a {
//   constructor(c) { // c = bo  인스턴스
//     this.c = c;
//     this.str = " hello"
//   }

//   printstr() {
//     return this.str;
//   }

//   run() {
//     return (() => {
//       setTimeout(() => {
//         setTimeout(() => {
//           this.c.log.call(this, this.printstr.bind(this)); // a.bo(=b).log
//         }, 100);
//       }, 100);
//     });
//   }
//   foo() {
//     return 'foo';
//   }
// }

// class b {
//   constructor(base = "welcome", a) {
//     this.base = base;
//   }

//   log(fn) {
//     const fooresult = this.foo(); // this: b => a로 바꿔야 함
//     const result = fn(); // fn(): a {b: b, str: " hello"}
//     console.log(result, fooresult);
//   }

// }

// var bo = new b();
// var ao = new a(bo);
// ao.run()();

// javascript 문제
// hello foo를 출력하세요.
// class a {
//   constructor(b) {
//     this.b = b;
//     this.str = " hello"
//   }

//   printstr() {
//     return this.str;
//   }

//   run() {
//     return (() => {
//       setTimeout(() => {
//         setTimeout(() => {
//           this.b.log(this, this.printstr);
//         }, 100)
//       }, 100);
//     })
//   }
//   foo() {
//     return 'foo';
//   }
// }

// class b {
//   constructor(base = "welcome", a) {
//     this.base = base;
//   }

//   log(fn) {
//     const fooresult = this.foo();
//     const result = fn();
//     console.log(result, fooresult);
//   }
// }

// var bo = new b();
// var ao = new a(bo);
// ao.run()();

// call(this, this.printstr)에서 printstr 메서드에 this가 불러온 이유를 알기위한 예시
// crong [7:26 PM] strict 모드와 관련있는 현상으로 이해를하세요.
// function a() {
//   const b = function () {
//     return this;
//   }
//   console.log('result is', b());
// }


// function stricta() {
//   "use strict"
//   const b = function () {
//     return this;
//   }
//   console.log('result is', b());
// }
// a();
// stricta();