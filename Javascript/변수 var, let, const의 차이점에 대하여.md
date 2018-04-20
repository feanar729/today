## 변수
- 데이터 값을 담는 컨테이너로 값을 유지할 필요가 있을 때 사용한다.
- 변수의 생성은 3단계로 걸쳐 생성된다
  - 선언 - 변수(명)를 등록
  - 초기화 -  변수를 메모리에 할당(선언+할당)
  - 할당 - 변수에 데이터 실제값(undifined, null, number, string 등등..)을 넣는것
- var, let, const로 선언이 가능한데 각각의 특징과 기능이 다르다.
- scope변수의 유효범위가 위의 3가지에 따라 다르다.
  > 3가지의 차이점을 알기 위해서는 JS만의 특징인 호이스팅과 scope의 개념에 대해 사전에 이해가 필요했다.

- 호이스팅(Hoisting) - 끌어올리기 등의 뜻이 있는데 변수 선언문을 끌어올린다는 의미임 하지만 변수 값을 참조할 수는 없다.
- 스코프(scope) - 변수가 참조(데이터를 가져다가 쓸)할 수 있는 범위를 말함

## 왜 필요 했을까?
- var는 전역변수 function-scope로 사용 할 수 있다 그렇기 때문에...
- var 로 사용하게 되었을시 변경될 혹은 오염될 데이터의 내용을 막기위해 이를 대응할 기능이 필요했다.
- es 2015에 let과 const가 생겨서 변수의 변경을 막을 수 있게 되었다.

## var, let, const의 각각의 특징

### var
- 전역적으로 범위를 지정되거나 function-scope / lexical-scope로 지정 가능
- var 변수가 function-scope 외부 선언시 - 전역적인 범위
- var 변수가 function-scope 내부 선언시 - function에 범위
- var 변수는 재선언 하거나 할당 할 수 있다(중복선언도 가능).
- var 변수는 호이스팅이 가능하다

```
var outerFunction = function () {
  if (true) {
    var x = 5;
    //console.log(y); //line 1, ReferenceError: y not defined
  }

  var nestedFunction = function () {

    if (true) {
      var y = 7;
      console.log(x); //line 2, x will still be known prints 5
    }

    if (true) {
      console.log(y); //line 3, prints 7
    }
  }
  return nestedFunction;
}

var myFunction = outerFunction();
myFunction(); // print 5, 7
```

## let
- let은 Block-level-scope( 코드블럭 {} 안에 선언된 변수는 코드블럭 내부에서만 유효하고 외부로 참조할 수 없다)이다.
- let은 초기화 이후 재할당이 자유롭다 하지만 중복선언이 불가하다
> 참고: 블록스코프인 let도 호이스팅이 된다. 그렇지만 선언 전에 참조할 경우 undefined를 반환하지 않고 ReferenceError를 발생시키는 특징이 있다.
> 출처: http://meetup.toast.com/posts/86
```
let greeting = "say hi";
greeting = "say hello";
greeting // print 'say hello'
```
```
let greeting = "say hi";
let greeting = "say hello";
greeting // Uncaught SyntaxError: Identifier 'greeting' has already been declared
```
- let은 호이스팅 시 TDZ(Temporal Dead Zone의 약어)가 발생 let으로 선언된 변수가 선언 단계와 초기화단계가 분리되어 진행된다(var는 선언과 초기화 단계가 동시진행) 즉 등록(선언)은 되지만 초기화 단계서 Reference Error가 발생하고 이 시점은 TDZ라고 한다.

## const
- const는 let과 같이 Block-level-scope 이다.
- const는 let과는 다른점이 초기화이후 재할당이 금지된다.
```
const test2 = "321";
test2 = "123";
test2 // Uncaught TypeError: Assignment to constant variable.
```
- const는 반드시 선언과 동시에 초기화가 이뤄져야 한다.
```
const foo; // Uncaught SyntaxError: Missing initializer in const declaration
```

## 요약
- ES6 사용시 var 키워드는 사용을 자제한다.
- 변경이 발생하지 않는(재할당이 필요없는) primitive형 변수(or 객체변수)에는 const 사용
- 재할당이 필요한 primitive형 변수에는 let 사용

## 여담
- 가끔 번역된 용어명칭에서 실개념적용에 와닿지 않는 경우가 종종 있었다(선언, 할당, 로컬범위 / 렉시컬스코프, 함수 등등..) 영어로 된 명칭 설명이 오히려 혼돈이 적게 받는 느낌이었다.
- 코딩을 겸해서 실습과 이론을 5:5비율로 해보니 이해가 잘되었다.(좀더 익숙해 지려면 반복해야 겠지만..)


## 참고자료
- https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e
- https://www.w3schools.com/js/js_scope.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
- http://hjh5488.tistory.com/category/Programming/Javascript
- https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/