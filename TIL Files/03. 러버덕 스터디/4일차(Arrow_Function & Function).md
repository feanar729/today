# 4 일차 러버덕

## 주제

- Arrow Function 과 Function 의 차이

## Arrow Function 은 무엇인가?

- 화살표 함수라고 불러지는 이 함수는 ES6 에 나오게 된 기술로 function 키워드 대신 화살표(=>)를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있다.
- 화살표 함수는 익명 함수로만 사용할 수 있다. 따라서 화살표 함수를 호출하기 위해서는 함수 표현식을 사용한다.

  ```
  ex) const pow = x => x * x; console.log(pow(10));
  ```

- 콜백 함수로 사용할 수 있다. 이 경우 일반적인 함수 표현식보다 표현이 간결하다.

  ```
  ex) const arr = [1, 2, 3]; const pow = arr.map(x => x * x);
  ```

- 요약해서 function 과 차이점을 적자면
  > - 간략한 사용방법으로 가독성이 좋음
  > - this 의 바인딩 대상이 Lexical 범위로 설정된다(ES6 Arrow Func).
- 하지만 모든 경우 사용할 수 있는 것은 아니다.

## 어떨 때 사용이 불가능 한가?

### 브라우저 환경에서 ES6 미지원 시

- ES6 기술인 Arrow Function 은 브라우저/브라우저 버전 마다 ES6 를 지원하지 않는 경우가 있는데 예를 들어 IE 의 경우는 ES6 를 지원 해주지 않는다.
  (우회적으로 트렌스파일링을 통해 사용하는것도 방법이나 안정성 측면에서 올바르게 작동될지가 의문이다....)

### 메소드 정의시

- 메소드 정의시 메소드로 정의한 화살표 함수 내부의 this 는 메소드를 소유한 객체, 즉 메소드를 호출한 객체를 가리키지 않고 상위 컨택스트인 전역 객체 window 를 가리킨다. 따라서 화살표 함수로 메소드를 정의하는 것은 바람직하지 않다.

  > 해결책: 이와 같은 경우는 메소드를 위한 단축 표기법인 ES6 의 축약 메소드 표현을 사용하는 것이 좋다.

  ```
  ex) 올바른 방법
  const person = {
  name: 'Lee',
  sayHi() { // === sayHi: function() {
    console.log(`Hi ${this.name}`);
    }
  };
  ```

### prototype

- 화살표 함수로 정의된 메소드를 prototype 에 할당하는 경우도 동일한 문제가 발생한다
  (메소드를 소유한 객체, 즉 `메소드를 호출한 객체를 가리키지 않고 상위 컨택스트인 전역 객체 window 를 가리킴`).
  따라서 prototype 에 메소드를 할당하는 경우, 일반 함수를 할당한다.

### 생성자 함수

- 생성자 함수는 prototype 프로퍼티를 가지며 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor 를 사용한다.
  하지만 화살표 함수는 prototype 프로퍼티를 가지고 있지 않다. 따라서 화살표 함수를 사용할 수 없다.

## addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this 는 어디를 가르키는가?

- addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this 가 상위 컨택스트인 전역 객체 window 를 가리킨다.

  > 해결책: addEventListener 함수의 콜백 함수에서 this 를 사용하는 경우, function 키워드로 정의한 일반 함수를 사용하여야 한다. 일반 함수로 정의된 addEventListener 함수의 콜백 함수 내부의 this 는 이벤트 리스너에 바인딩된 요소(currentTarget)를 가리킨다.

  ```
  ex) 올바른 방법
  var button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    console.log(this === button); // => true
    this.innerHTML = 'Clicked button';
  });
  ```

## Arrow Function 의 this 와 function 의 this 의 차이점

- 일반 함수의 경우, 해당 함수를 호출하는 패턴에 따라 this 에 바인딩되는 객체가 달라진다. 콜백 함수 내부의 this 는 전역 객체 window 를 가리킨다.

  > ES5 에서 콜백 함수 내부의 this 가 메소드를 호출한 객체(생성자 함수의 인스턴스)를 가리키게 하려면 3 가지 방법이 있다.
  >
  > - 변수 선언 후 선언된 변수에 this 를 할당하는 방법.
  > - 콜백 함수에서 즉시 실행 함수 형식으로 this 를 넣는법
  > - ES5 에 추가된 Function.prototype.bind()로 this 를 바인딩하는 방법.

- 화살표 함수의 this 는 언제나 자신을 포함하는 외부 스코프에서 this 를 계승 받는다. 다시 말해 화살표 함수는 자신만의 this 를 생성하지 않고 자신을 포함하고 있는 상위 컨텍스트로 부터 this 를 계승 받는다.
  이를 Lexical(현재 환경을 현재 블록, 함수 또는 다른 범위 단위 및 그 부모 즉, 현재 클럭을 둘러싸는 블록 또는 현재 함수를 호출 한 함수등에 정의 된 부분으로 제한하여 지원하는 범위) this 라 한다.

---

## 스터디 때 나온 질문들

- function 과 Arrow function 의 차이점이 무엇인가?
- function 과 arrow function 을 사용하는 자신만의 기준
- addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this 는 어디를 가르키는가?

## 참고 정보

- https://code.i-harness.com/ko/q/1ee6121
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
- https://blog.perfectacle.com/2016/11/11/babel-es6-with-ie8/
- http://meetup.toast.com/posts/85
- https://code.i-harness.com/ko/q/ffb9e
- https://poiemaweb.com/es6-arrow-function
- https://beomi.github.io/2017/07/12/understanding_js_scope_function_vs_arrow/
