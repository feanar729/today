# 3 일차 러버덕

## 주제

- prototype

### Prototype 이란 무엇인가?

- 자바스크립트는 Class 가 존재하지 않는다. 그래서 자바스크립트에서는 객체의 원형인 프로토타입을 이용한 클로닝(Cloning: 복사)과 객체특성을 확장해 나가는 방식을 통해 새로운 객체를 생성해 낸다.
- 프로토타입을 이용하면 객체와 객체를 연결하고 한쪽 방향으로 상속을 받는 형태를 만들 수가 있다
- 즉 자바스크립트에서 객체와 객체를 연결해서 상속 받는다는 것은 다른 말로 객체와 객체를 연결해 멤버 함수나 멤버 변수를 공유 한다는 뜻
- 그것을 기반으로 하는 프로그래밍이 프로토타입 프로그래밍이다 객체의 원형인 프로토타입을 이용하여 새로운 객체를 만들어내는 프로그래밍 기법이다. 이렇게 만들어진 객체 역시 자기자신의 프로토타입을 갖는다. 이 새로운 객체의 원형을 이용하면 또 다른 새로운 객체를 만들어 낼수도 있으며 이런 구조로 객체를 확장하는 방식을 프로토타입 기반 프로그래밍이라고 한다.

### Prototype Link 와 Prototype Object 의 차이[수정필요]

- Prototype Object 는 Prototype Property 가 가리키고 있는 Prototype Object 와 자기 자신을 만들어낸 객체의 원형을 의미하는 Prototype Link 가 차이점임.

### `[[prototype]]`프로퍼티와 prototype 프로퍼티 각각의 프로퍼티의 차이점이 있나??

- 모두 프로토타입 객체를 가르키지만 시작되는 관점의 차이가 있다.

- [[Prototype]] 프로퍼티 (=`__proto__`)

  > - 함수를 포함한 모든 객체가 가지고 있는 프로퍼티이다.
  > - 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체을 가리키며 함수 객체의 경우 Function.prototype 를 가리킨다.

- prototype 프로퍼티

  > - 함수 객체만 가지고 있는 프로퍼티이다.
  > - 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체(프로토타입 객체)를 가리킨다.

- 즉 둘다 최종적으로 프로토타입 객체를 가르키지만 `prototype 프로퍼티`는 `함수 객체가 생성자로 사용될 때` 이 함수를 통해 생성된 객체의 부모 역할을 하는 객체, 즉 프로토타입 객체를 가리킨다. Function.prototype => Object.prototype
- [[Prototype]] 프로퍼티는 객체의 입장에서 자신의 부모 역할을 하는 객체, 즉 프로토타입 객체를 가리킨다. [[Prototype]] === Object.prototype

### constructor 프로퍼티란?

- 프로토타입 객체는 constructor 프로퍼티를 갖는다. 이 constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다.

### Prototype chain 이란 무엇인가?

- 자바스크립트는 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 [[Prototype]] 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다. 이것을 프로토타입 체인이라 한다.

### Prototype Chain 의 동작 조건은?

- 객체를 참조할 경우, 해당 객체에 프로퍼티가 없을 경우 동작

### Prototype Chain 의 성능상 단점이 생긴다면 어떤 점이 있을까?

- 프로토타입 체인에 걸친 속성 검색으로 성능에 나쁜 영향을 줄 수 있으며, 때때로 치명적일 수 있다. 또한 존재하지도 않는 속성에 접근하려는 시도는 항상 모든 프로토타입 체인인 전체를 탐색해서 확인하게 만든다. 객체의 속성에 걸쳐 루프를 수행 하는 경우 프로토타입 체인 전체의 모든 열거자 속성에 대하여 적용된다. 객체 개인 속성인지 프로토타입 체인상 어딘가에 있는지 확인하기 위해서는 Object.prototype 에서 모든 오브젝트로 상속된 hasOwnProperty 메소드를 이용할 필요가 있다.

- 하지만 요즘에는 자바스크립트 엔진인 V8 을 통해 위에 탐색과정을 최적화 시켜 퍼포먼스를 향상시킨 것으로 앎

### 기본자료형(String, Number, Null, undefined, boolean)외에 모든 것은 객체이다 근데 기본자료형이 객체로 작동되는 경우가 있는데 왜 그런지 prototype 과 관련해서 설명해보기

- 기본자료형은 객체가 아니므로 프로퍼티나 메서드를 가질수 없다. 또한 자바스크립트에서는 기본자료형과 Null, undefined 를 제외한 모든건 객체(=함수)이다. 기본자료형(Primitive data type)의 확장기능이 있는데 기본 자료형으로 프로퍼티나 메소드를 호출할때 prototype 에서 기본자료형과 연관된 객체로 일시적으로 변환되어 prototype 객체를 공유하게 된다. 그이유는 prototype chain 기능을 통해 Array, String, Number.prototype 객체가 prototype 에 정의되어 있고 이들 prototype 또한 Object.prototype 에 프로토타입 체인으로 인해 연결되어 있어 일시적으로 객체로 공유할 수 있게 해준다.
- 기본자료형이 있을시 기본자료형의 프로토타입 메서드를 추가하면 수정, 추가가 가능하다.
- 그래서 일시적으로 변환시켜주는 것이기 때문에 ECMA5 에서 나온 `prototypal` 방식인 Obejct.create()로 이용해 객체 리터럴로 객체를 생성해줘야 올바른 참조와 재사용이 가능하다. classical 방식도 있지만 prototypal 방식이 좀더 javascript 에서 간결하고 선호한다. 만약 `prototypal`방식이 사용하지 못한 환경이 있다면 `classical` 방식으로 이용하는 방법이 있다.
- 참고로 ES6 에서는 class 가 추가되어 class 를 이용해 extends 로 prototype 객체를 확장해 나갈 수 있다.

### prototype 을 이용하여 instance 생성과 코드를 재사용하는 방식을 코드를 적어 설명해보기

- classical 방식과 prototypal 방식이 있다. classical 방식은 new 연산자를 통해 생성한 객체를 사용하여 코드를 재사용 하는 방법입니다. 마치 Java 에서 객체를 생성하는 방법과 유사하여 classical 방식이라고 합니다. prototypal 방식은 리터럴 또는 Object.create()를 이용하여 객체를 생성하고 확장해 가는 방식입니다. 두 가지 방법 중 JavaScript 에서는 prototypal 방식을 더 선호합니다. 그 이유는 classical 방식보다 간결하게 구현할 수 있기 때문.

- `classical` 방식

```
function Person(name) {  
    this.name = name || "혁준";
}

Person.prototype.getName = function(){  
    return this.name;
};

function Korean(name){  
    this.name = name;
}
Korean.prototype = Person.prototype;

var kor1 = new Korean("지수");  
console.log(kor1.getName());  // 지수  
```

- `prototypal` 방식

```
var person = {  
    type : "인간",
    getType : function(){
        return this.type;
    },
    getName : function(){
        return this.name;
    }
};

var joon = Object.create(person);  
joon.name = "혁준";

console.log(joon.getType());  // 인간  
console.log(joon.getName());  // 혁준  
```
