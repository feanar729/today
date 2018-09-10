// 정규 수업
/*
  - Symbol
  - Iterator  
*/

// 1. Symbol = Primative type
let arr = [1, 3];
let arr2 = [1, 3];
console.log([1, 3] === [1, 3]);
console.log(arr === arr2);

var a = 'abcd';
a[2] = 'x';
console.log(a);

let name = Symbol('name symbol');
typeof name
console.log(name);
console.log(Symbol);

const myname = Symbol('my name');
const obj = {
  [myname]: 'crong',
  age: 11
}

console.log(obj[myname])
console.log(obj.myname)

var obj2 = {};

obj2[Symbol('a')] = 'a';

console.log(obj2)

const first = Symbol('A symbol');
const second = Symbol('A symbol');
console.log(first === second)

const mynameSym = Symbol('myname');
const obj3 = {
  [mynameSym]: 'crong',
  age: 11
}

for (value in obj3) {
  console.log(value)
}

let test1 = Object.keys(obj3);
let test2 = Object.getOwnPropertyDescriptor(obj3);
console.log(test1, test2)

const foo = {
  'name': 'xxxx',
  age: 11
}

foo.name = 'new Property';
console.log(foo)

const foo2 = {
  "name": 'xxxx',
  age: 11
}

const name2 = Symbol('newname');
foo[name2] = "crong";

console.log(foo2)

const privateMethod = Symbol('rpivateMethod');
class Service {
  constructor() {
    this.say = 'Hello'
  }

  [privateMethod]() {
    console.log(this.say);
  }

  publicMethod() {
    this[privateMethod]()
  }
}

// console.log(new Service().privateMethod());
// console.log(new Service()[Symbol('privateMethod')]());
console.log(new Service()[privateMethod]());

console.log(Object.getOwnPropertyNames(Service.prototype));
console.log(Object.getOwnPropertySymbols(Service.prototype));

// Iteration
const setData = new Set(['code', 'squad']);
console.log(setData);
// const mapData = new Map(['first', 'code'], ['second', 'squad']);

for (value of setData) {
  console.log(value)
}

/* 
forEach는 데이터를 전부 돈다는 가정하에 사용
for-of는 forEach와 다르게 break가 가능 
*/

function test(...str) {
  let test = [...str];
  console.log(test, ...str);
}

test('1', '2', '3', '4');


const objectTest = {
  first: 'code',
  second: 'squad'
};

// TypeError: objectTest is not iterable
// for (value of objectTest) {
//   console.log(value);
// }

// 즉 for-of를 돌릴 수 있는건 iterable한 타입 Array, String, Set, Map 등을 얘기한다 
// 그리고 이 방식을 iterable Protocal이라 한다

const str = 'codesquad';
console.log(typeof str[Symbol.iterator]);

const testobj = {};
console.log(typeof testobj[Symbol.iterator]);

const arrtest = ['code', 'squad'];
console.log(typeof arrtest[Symbol.iterator]);


// iterable protocal의 핵심 Symbol.iterator
// Symbol.iterator함수는 iterator 객체를 반환한다(중요)
// 그 객체에는 next() 메서드를 갖고 있고 이 메서드에서는 value, done 속성을 갖고 있다.
const testArr = ['code', 'squad'];
const arrIteratorObj = testArr[Symbol.iterator]();
console.log(arrIteratorObj.next());
console.log(arrIteratorObj.next());
console.log(arrIteratorObj.next());

// iterator 객체를 반환하는 함수 (여담) 
const mySet = new Set().add('code').add('squad');
console.log(mySet.values())
console.log(mySet.values().next().value)
console.log([...mySet.values()])

class DoubleMarker {
  constructor(data) {
    this.data = data;
  }

  * myGenerator() {
    let idx = 0;
    while (true) {
      yield Math.pow(this.data[idx++], 2);
      if (idx >= this.data.lengh) break;
    }
  }
}

const dbl = new DoubleMarker([1, 2, 3, 4, 5])
const dblGenerator = dbl.myGenerator();
console.log(dblGenerator.next().value);
console.log(dblGenerator.next().value);
console.log(dblGenerator.next().value);

// yield에 대해 좀더 알아보기[학습]