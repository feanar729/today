# OOP에 대하여 review

## 사전 이해 필요 내용
- scope 
- closure
- class
- OOP의 5가지 필요 조건 개념

## class와 object의 차이점
  > `class` 의 경우 `어떠한 객체를 표현`하기 위해, `일반화된 형태`로 `만든 것`을 의미 하고
  > `object(=instance)`의 경우 `어떠한 집합이나 분류`에 가깝다.(사람, 동물, 자동차 등) 유일한 사물, 실체에 가깝다(crong, 사자, 벤츠). `class를 통해서 얻을 수 있는 개별객체`를 얘기한다.

## OOP 5 개념 
  > 캡슐화(Encapsulation) 
  > 상속(Inheritance) 
    - 객체에서 공통된 기능을 재사용할때(조건)
    ex) 자동차 공장에서 바퀴를 만들때 동그라미라는 규칙을 정하고 바퀴의 휠과 바퀴의 파인모양등은 각 기능(공장) 에 따라 다름 
    - 즉 중복 요소를 모아서 불필요한 반복을 줄이게 만드는 방식 
  > 다형성(polymorphism) 
  > 추상화(abstraction)

## 좋은 OOP는 ?
  > 높은 응집도(high cohesion), 낮은 결합도(loose coupling)

## 객체 지향의 조건
  1) class턴
  2) 협력이 이뤄져야 한다(public method)
  3) 느슨한 결합도(이걸 사용하는 방식이 디자인 패턴)

## prototype은 효율성 때문에 생긴 기능이다. >
  > why ? : 메모리의 효율성(중복된 method를 생성해 메모리 과부하를 방지하기 위해)

## github을 보고(실습)[주제: class로 분류한다면 어떻게 나눌 것 인가 ? 생각해보기] 
  > model 과 view의 기능으로 분류 
  > 재사용성 이 높은 건 따로 class로 분류(하지만 재사용이 높은 class는 현장에서는 보통 잘 안 짜진다...) ex) 탭 기능, 버튼 click 시 open / close 기능 
  > 검색 기능 등도 class로 가능 
  > 보통 객체 리터럴로 짤 수도 있는 것을 굳이 class로 짜는 이유는 `일관성` 있게 전체 코드를 class로 제작하기 위함

## side effect(재사용된 코드 수정시 발생하는 오류 상황)
  > 해결법: test 코드