// 숫자 5개 
let num = [1, 12, 31, 14, 5];
const testNum = num.sort((a, b) => (a - b));
console.log(testNum)

// 단어 5개
let word = ['banana', 'blue', 'pinapple', 'purple', 'apple'];
const testWord = word.sort();
console.log(testWord)

// 이름 재산 각각 순서 sort
let People = [{
  name: 'lee',
  money: 1000
}, {
  name: 'kim',
  money: 5000
}, {
  name: 'young',
  money: 2000
}, {
  name: 'jung',
  money: 3000
}, {
  name: 'park',
  money: 1400
}];

function sortData(people) {
  console.log(people)
}
sortData(People);


// 두 배열 입력 새로운 정렬 배열로 반환하는 함수 만들기

const testarr1 = [2, 11, 9]
const testarr2 = [-1, 10, 20, 6]

function test(testarr1, testarr2) {
  const testArr1 = testarr1.sort((a, b) => (a - b));
  const testArr2 = testarr2.sort((a, b) => (a - b));

}
test(testarr1, testarr2);

// answer
function merge(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let left = arr1[0];
  let right = arr2[0];
  if (left <= right) {
    return arr1.slice(0, 1) + merge(arr1.slice(1, 0), arr2);
  } else {
    return arr2.slice(0, 1) + merge(arr1, arr2.slice(1, 0));
  }
}

const mergePrint = merge([1, 3, 5, 7], [2, 4, 6, 100]);
console.log(mergePrint);
console.log(merge([], [2]));

function mergeSort(array) {
  let n = array.length;
  let left = array.slice(0, n);
  let right = array.slice(n, 0);
  if (left.length >= 2) {
    left = mergeSort(left);
  }
  if (right.length >= 2) {
    right = mergeSort(right);
  }
  return merge(left, right);
}

const testArr3 = [3, 4, 5, 6, 1, 7, 8, 2];
console.log(mergeSort(testArr3))