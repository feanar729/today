# C/S 학습 3day - 자료구조 / 알고리즘(3 주 진행)

## 수업 내용

### 일반적인 CPU 의 구조

- 외장하드 => 1 년내 디스크 손실율 10~30%
- 메모리에 올라간 프로그램을 `프로세스`라고 함
- ALU(??)
- 왜 4bit 일까? => 버스의 크기가 4bit(?) => 버스란? => 공통선을 의미 즉 통신망을 의미 흔히 대중교통의 버스의 의미처럼 비슷하게 컴퓨터에도 적용된 것
- 버스에 내재된 선은 32 가닥 = 32bit 임(=4byte)
- 4byte 단위를 `word`라고 부름(이건 컴퓨터마다 다를 수 있음)

#### 배열, 링크드 리스트, 스트링

- 코딩할때 자료구조로 제일많이 쓰이는건 배열임 95%가까이...

#### 배열의 특징

- 연속적으로 값을 저장한다.
- 리스트 구현시 배열로 구현되어 있다
- 리스트 구현시 링크드 리스트로 구현(?)

```
var n = { v: 10, next: null }
var head = n;
var n2 = { v: 20, next: null }
head.next = n2;
head.v // 10
head.next.v // 20
```

- 리스트기능 / 복잡도

  > insert(i) / O(n)
  > append(l) / O(l)
  > search(i) / O(n)

- circular doublely Linked List (??? 뭐지) => 나중에 한번 구현해보기

#### 정렬의 종류

- visualgo.net (알고리즘 visual 참고 site)
- Bubble Sort
- Selection Sort
- Insertion Sort
- Quick Sort
- Merge Sort
- Heap Sort
- Counting Sort
- Radix Sort

#### 정렬해보기

1.  숫자 5 개 정렬
2.  단어 5 개 정렬
3.  People{ name, money}를 5 개 만들고 이름과 재산순으로 각각 정렬

#### 셔플

- 섞는 것
-
