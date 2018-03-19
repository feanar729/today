<h1> Closure 실습 코드 </h1>

```
var make = function() {
  var funs=[];
  while(true) {
      if(funs.length >9) break;
      var rValue =Math.random()*10;
      //console.log(rValue)
      funs.push(function(){return rValue});
  }
  return funs;
}

var randomDataFuns = make();
console.log(randomDataFuns[3]());  //??
console.log(randomDataFuns[5]());  //??
```
<h2> 1. Scope, Scope Chain, Closure 의 이해 </h2>

- 그전에: JS의 `선언` - `(재)할당` - `실행` 등의 개념을 조금 알아야 함

<h3> Scope(선언 단계) </h3>

- 지역 혹은 전역의 범위를 말하며 저장된 값을 사용할 수 있는 유효범위를 말한다.

<h3> Scope Chain </h3>

1. 내부함수의 값이 값을 할당하기 위해 꼬리를 물고 계속 값의 범위를 넓히며 찾는 관계를 말함. </br>
2. 함수(외부) 안에 함수(내부)가 있다면 그 안에 값(지역)이 선언 후 그 값을 할당하기 위해 값을 찾는다. </br> 
그런데 그 값이 내부 함수(범위)에 없을 때, 외부 함수로 접근해 값을 찾고[반대로 외부함수는 내부함수에 접근할 수 없다.] </br>
그 범위에도 없을 시 다음 단계 범위로 점점 올라가 값을 찾는데 이것을 `Scope Chain`이라 한다.

<h3> Closure </h3>

- JS에서 내부(중첩 된)함수는 반환 후 함수 자체에 같은 범위에 있는 지역변수에 참조를 저장한다. </br>
이 참조집합(값)을 `클로저[Closure]`라고 한다.


<h2> 2. 작동 </h2>

<h3> 선언 </h3>

- `randomDataFuns`변수의 배열 index 3의 값을 출력(console.log) 선언
- `randomDataFuns`변수의 배열 index 5의 값을 출력(console.log) 선언
- `make`함수 선언
- `randomDataFuns` 변수 선언
- `funs` 변수 선언
- `rValue` 변수 선언

<h3> 할당 </h3>

- `randomDataFuns` 변수에 `make`함수를 할당
- `funs` 변수에 배열 할당
-  `rValue` 변수는 Math.random()메서드 * 10을 할당(Math.random은 0부터 1의 임의수를 생성 그것을 숫자 10을 곱한다.)

<h3> 실행 </h3>

- `randomDataFuns`변수 출력을 위해 `make` 함수에 접근
</br>
------------- 반복(조건에 부합될 때까지) ------------- </br>

- while문 조건 true 반복문 실행
- if 조건문 funs변수의 길이가 9보다 작으면 멈춘다.
- 변수 `rValue`에서 랜덤 값random()* 10]을 생성
- `funs`.push 메서드로 함수의 매개변수가 `rValue`값을 반환

------------- 반복 끝(조건문에 부합되면) ------------- </br>

-  조건문 배열 `funs`의 길이가 10이되면 멈춤
-  배열 `funs`를 반환
-  반환된 매개변수가 `make`함수에서 `randomDataFuns`로 전달
-  `randomDataFuns`변수의 배열 index 3의 값을 출력(console.log)
- `randomDataFuns`변수의 배열 index 5의 값을 출력(console.log)