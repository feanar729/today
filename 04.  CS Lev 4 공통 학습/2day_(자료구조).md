# C/S 학습 2day - 자료구조 / 알고리즘(3 주 진행)

## 학습에 앞서 OT

- 프로그래밍 대회에서 배우는 알고리즘 문제 해결 전략 세트(1 권을 강추 2 권은 별로..)
- 자료구조를 먼저 보고 알고리즘을 진행하길 추천
- MIT OCW(초보를 벗어나게 되면 강추 완독을 목표로... 잠이오게 될 수 있음)
- 초보를 벗어나면 다이나믹 프로그래밍으로 진행하는게 좋음(창의적이보단 암기식으로 진행되는 정도임)
- 반복숙달을 진행하길 추천

## 수업 내용

### Big O 표기법??

- 알고리즘의 복잡도를 파악하기 위해

  > 복잡도??: 주로 알고리즘의 실행시간 분석을 위해 사용된다
  > 왜 생김?: 하드웨어 성능에 따라 분석이 달라지기 때문에 공통된 복잡도 파악이 필요했는데 그래서 표기법이 생기게 되었다.
  > 공간복잡도: 프로그램이 얼마나 많은 메모리(공간)를 차지하느냐?
  > 시간복잡도: 프로그램이 얼마나 많은 시간을 소요하는가?(인간[사용자]가 허용가능한 인내심의 시간 3~4 초(?) 정도)

- Big O 표기법??

  > f(x)`알고리즘 실행시간` = O(g(x))`어떤 간단함수`
  > 실행시간이 보장되는걸 (최악) 확인하기 위한 표기법 => 입력이 클때 g(x) 보다는 빠르다는게 보장 즉 `최악의 실행시간을 보장하는 것`
  > 왜 이렇게 했을까? : 항상 최고 보단 최악을 보장해야 안정적으로 프로그램이 유지가 가능하기 때문에
  > O(1) = 일정 시간을 유지(최고의 상태)
  > polynomial(다항식) 시간코드: `Very Good`
  > 지수 시간코드: `Very Bad`

- 오메가??

  > 절대 안된다는 걸 보여주는 걸 증명해 내는 표기법
  > 하한선 기준(lower bound)
  > 여담 세타: 정확하게 범위 사이에 유지되는 평균선을 나타내는 표기법

- 예시

  > - insert(i, x) => O(n) 넣은 값 에 따라 넣은 값 뒤의 값이 뒤로 밀려나기 때문에
  > - search(x) = i => O(n) 전체를 찾아야 하기에
  > - a[i] => O(1) 한번에 찾을 수 있음[(start Address + size * index)]

- 정리 vs 공리(?)
  > - 추후 정리

### 재귀

- 재귀(?) 무엇인가?
  > 함수가 함수 안에서 자신을 다시 호출하는 것
- 재귀를 사용을 어떤 프로그래밍의 사용을 위해 배우는가? => 다이나믹 프로그래밍을 위해서
- 재귀로 해결할 수 있는 것 (분할 정복[Divide and Conquer], 다이나믹 프로그래밍)
- 분할 정복 => 그대로 해결할 수 없는 문제를 작은 문제로 분할하여 문제를 해결하는 방법이나 알고리즘이다. 빠른 정렬이나 합병 정렬로 대표되는 정렬 알고리즘 문제와 고속 푸리에 변환(FFT) 문제가 대표적이다.

#### 재귀 실습

- 재귀로 구현하기 연습 1
  > a 부터 b 까지 정수의 합을 구해보자

```
// 파이썬 버전
def count(n):
  #  base case : 기본단계
  if n == 0:
    print('땡')
    return
  # recursive case : 재귀단계
  print(n)
  count(n - 1)
count(10)
```

```
// JS 버전
function recursion(n) {
  if (n === 0) {
    console.log('땡');
    return;
  }
  console.log(n);
  recursion(--n);
}

recursion(10);
```

```
// JS 버전
function test(n){
  console.log(n);
  if(n > 0) test(--n);
  else console.log('땡!');
}
```

```
// JS 버전
function atob(a, b, sum = 0) {
  if (a === b) return sum;
  sum += a;
  return atob(++a, b, sum);
}
console.log(atob(1, 4));
```

- 재귀로 구현하기 연습 2
  > 배열의 합을 재귀로 구해보자

```
// python ver
a = [1, 2, 3]

def arraySum(arr):
  if len(arr) == 0:
  return 0
  return arr[0] + arraySum(arr[1:]) // arr[1:] => slice 기능

arraySum(a)
```

```
// JS 버전
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 5]));
```

- 재귀로 팩토리얼 구현하기

```
// python ver
def mysum(a, b):
  if a == b:
  return a
  return b + mysum(a, b - 1)

mysum(2, 10)
```

```
function fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
let ans = [0, 1, -1, -1, -1];

function fibo2(n) {
  if (ans[n] !== -1) return ans[n];
  ans[n] = fibo2(n - 1) + fibo(n - 2);
  return ans[n]
}
```

- 유클리드 호제법으로 구하기

```
// python
def gcd(a, b):
  if a % b == 0:
  return b
  return gcd(b, a % b)

gcd(5, 10)
```

```
function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}
console.log(gcd(1000, 700));
```

- 하노이의 탑

```
// python
def move(source, target, depth):
  if depth == 1:
  print('원반 {}를 {}에서 {}로 옮겼습니다.'.format(depth, source, target))
  return

  # 다른 기둥 찾기(값: other)

  other = 6 - source - target
  move(source, other, depth - 1)
  print('원반 {}를 {}에서 {}로 옮겼습니다.'.format(depth, source, target))
  move(other, target, depth - 1)

move(1, 3, 3)
```

```
// JS ver
function move(source, target, depth) {
  if (depth === 1) {
    console.log(`${depth}를 ${source}에서 ${target}로 옮겼습니다`);
  return;
  }
  let other = 6 - source - target;
  move(source, other, depth - 1);
  console.log(`${depth}를 ${source}에서 ${target}로 옮겼습니다`);
  move(other, target, depth - 1);
}
move(1, 3, 3)
```
