# 자료 구조 탐색 for_in문, for_of문
이중 for문을 쓰는 것을 줄이고 싶은 마음과 동시에 
for문을 쓰게 되면 대부분 아래처럼
```
for ([initialization]; [test]; [increment])
    statement 
```
쓰게 되는데 개인적으로 한눈에 들어오지 않은 점과 동시에 
자료구조 탐색에 대해 애를 먹었던 기억이 있어 공부+정리 해보고자 적어본다.

# for in 문
> 

```
var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
```

```
for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1, 2, 3
```

var data = [{ "major": "데이터", "grade": "A+", "credit": 3 }];