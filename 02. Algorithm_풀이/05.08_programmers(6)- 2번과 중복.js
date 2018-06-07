// 약수의 합  Level 1
// 어떤 수를 입력받아 그 수의 약수를 모두 더한 수 sumDivisor 함수를 완성해 보세요.
// 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 
// 총 합은 28이 되므로 28을 반환해 주면 됩니다.

function sumDivisor(num) {
	let answer = 0;

  for(let i = 0; i <= num; i++){
    if(num % i === 0) {
      answer+=i;
    }
  }
	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(12));


// 다른 사람의 풀이 (굳이 왜이렇게 했는지는 의문...)
// let sumDivisor = num => {

//   let answer = 0,
//       i = 1,
//       j = num%2 == 0 ? 1 : 2

//   for(i; i<num; i=i+j) if(num%i == 0) answer += i;

//   return answer+num;
// }
