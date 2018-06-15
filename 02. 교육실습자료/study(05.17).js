/*
사용이유: 
함수 단위에 기능들을 만들게 되면 중복된 데이터 변수 선언과 
프로그램이 커지면서 유지보수 관리에 어려움이 나타난다. 
그래서 비슷한 성질의 것들을 묶으려 하기 위해 객체를 사용한다.
*/

// 객체 리터럴 방식
// let test = {
//   "name": "leo",
//   function (params) {

//   }
// }

// 객체: 비슷한 성질의 것들을 묶음을 얘기함.
// 아래 예제처럼 제작함.
// const YOUTube = {};

// YOUTube.LeftMenu = {
//   list  : {
//       library : [],
//       subscribe : []
//   },

//   getList() {
//       return this.list;
//   },

//   setLibrary(data) {
//       this.list.library.push(data);
//   },

//   addSubscribe(data) {
//     this.list.subscribe.push(data);
//   }
// }


// YOUTube.cardUI = {
//     cardlist : [],
//     getList() {},
//     showList() {},
//     addCard(newCard) {
//         this.cardlist.push(newCard);
//         YOUTube.LeftMenu.addSubscribe();
//     }
// }

//객체를 생성하는 방식.
// class YOUTube.LeftMenu {
//     constructor() {

//     }
// }

// 아래 예제처럼 Method와 속성에 따라 하나의 객체로 만들어 낼수 있다. 
// class leftMenu {
//   constructor(bSubscribeData, baselibraries) {
//       this.list = {
//           library : []
//       };
//       if(baselibraries) this.list.library.push(baselibraries);
//       if(bSubscribeData) this.subscribe = [];
//   }
//   getList() {
//       return this.list;
//   }
//   setLibrary(data) {
//       this.list.library.push(data);
//   }
//   addSubscribe(data) {
//       this.list.subscribe.push(data);
//     }
// }

//어떤 속성에 의해서 객체를 동적으로 생성할 수 있다. <== class 를 사용하는 이유1
//es5에서는 function을 new키워드로 불려도 es6의 클래스와 같은식으로 동작.
// const lm = new YOUTube.LeftMenu(false, [1,2,3]);
// const lm = new YOUTube.LeftMenu(false);

//ES5 문법 방식으로 객체 제작
// function YOUTube.LeftMenu(bSubscribeData, baselibraries) {
//     this.list = {
//         library : []
//     };
//     if(baselibraries) this.list.library.push(baselibraries);
//     if(bSubscribeData) this.subscribe = []; 
// }

// YOUTube.LeftMenu.prototype.getList = function() {
// }

// YOUTube.LeftMenu.prototype.setLibrary = function() {
// }


// 다음 예제를 ES6 객체 클래스로 짜보시오
class myTodo {
  constructor(word) {
    this.wordList = {
      words: []
    };
  }
  addTodo(word) {
    if (word) this.wordList.words.push(word);
  }
  deleteWord(word) {
    let find = this.wordList.words.indexOf(word);
    if (word) this.wordList.words.splice(find, 1);
    this.showTodoStatus();
  }
  getTodo(word) {
    let showWord = this.wordList.words;
    for (let isWord of showWord) {
      setTimeout(function() { 
        // 여기서 arrow function으로 작성되었을 this가 window 전역객체를 가르키지 않고 
        // lexical Scope범위의 this로 적용된다 (익명함수+.bind(this) 불필요)
        this.showTodoStatus(isWord);
      }.bind(this), 1000);
    }
  }
  showTodoStatus(word) {
    if (word) {
      console.log(word);
    } else {
      console.log("삭제완료", this.wordList.words);
    }
  }
}

const todo = new myTodo();
todo.addTodo("haha");
todo.getTodo(); //결과를 출력
todo.deleteWord("haha");

// Learned
// this는 무얼 가리키는가? => 객체자신(이 코드에서는) 
// this는 실행되면서 정해진다.
// this의 값을 고정시킬 수 있는데 bind()를 사용해 진행하면 된다. 


// 추가 미션
// delete todo 특정 데이터 삭제() 
// showAllTodo 함수 기능을 setTimeout 1초뒤에 화면 출력 
// console.log() 만 출력되는 함수를 별도로 만들기