// 나누어 떨어지는 숫자 배열 Level 1
// array의 각 element 중 divisor로 나누어 떨어지는 값을 
// 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]
// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

// first
// function solution(arr, divisor) {
//   var answer = [];
//   const filtering = arr.filter(value => {
//     return value % divisor === 0;
//   })
//   const sortList = filtering.reduce((previous, current) => { 
//     const result = filtering.sort((previous, current) => { return previous - current})
//     return result;
//   }, filtering[0]);

//   if(sortList === undefined) return [-1];
//   return sortList;
// }

// refactoring
function solution(arr, divisor) {
  const sortArr = arr.sort((previous, current) => { return previous - current})
  const result = sortArr.filter(value => {
    return value % divisor === 0;  
  });
  if(result.length === 0) return [-1];
  return result;
}

const test1 = solution([15, 6, 10, 20, 5], 5)
const test2 = solution([3, 2, 6], 10)
console.log(test1, test2)

// 느낀점
// 필요한 메서드는 잘 찾아보면 나온다.