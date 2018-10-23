// callback bind & call review

// 문제: 순차적으로 출력 되게 하시오.
// const healthObj = {
//   name: "달리기",
//   lastTime: "PM12:10",
//   showHealth: function () {
//     console.log(this.name + "님 오늘은" + this.lastTime + "에 운동하셨네요~")
//     setTimeout(function () {
//       console.log("잠시뒤에 print가 출력 되어야 한다..");
//       this.printMsg();
//     }, 2000);
//   },
//   printMsg() {
//     console.log("print");
//   }
// }

// healthObj.showHealth();

// // solution 1
// const healthObj = {
//   name: "달리기",
//   lastTime: "PM12:10",
//   showHealth: function () {
//     console.log(this.name + "님 오늘은" + this.lastTime + "에 운동하셨네요~")
//     setTimeout(function () {
//       console.log("잠시뒤에 print가 출력 되어야 한다..");
//       this.printMsg();
//     }.bind(this), 2000);
//   },
//   printMsg() {
//     console.log("print");
//   }
// }

// // solution 2
// const healthObj = {
//   name: "달리기",
//   lastTime: "PM12:10",
//   showHealth: function () {
//     const that = this; // closure scope 방식
//     console.log(this.name + "님 오늘은" + this.lastTime + "에 운동하셨네요~")
//     setTimeout(function () {
//       console.log("잠시뒤에 print가 출력 되어야 한다..");
//       this.printMsg();
//     }, 2000);
//   },
//   printMsg() {
//     console.log("print");
//   }
// }


// 요렇게 출력되게 수정 해서 여기 올려주세요~
// sarah 님 안녕하세요
// hello crong!
// const obj = {
//   name: "crong"
// }

// const healthObj = {
//   name: "sarah",

//   show: function () {
//     setTimeout(function () {
//       console.log(this.name + "님 안녕하세요"); //sarah 님 안녕하세요
//       this.printMsg();
//     }.bind(this), 2000);
//   },
//   printMsg() {
//     this.name = obj.name;
//     console.log("hello", this.name); //hello crong!
//   }
// }

// healthObj.show();

// call method 활용
const obj = {
  name: "crong"
}

const healthObj = {
  name: "sarah",

  show: function () {
    setTimeout(function () {
      console.log(this.name + "님 안녕하세요"); //sarah 님 안녕하세요
      this.printMsg.call(obj);
    }.bind(this), 2000);
  },
  printMsg() {
    console.log("hello", this.name); //hello crong!
  }
}

healthObj.show();