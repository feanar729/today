// lumi code

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var dataLong = (function (length) {
  var a = [];
  var i = 0;
  while (i < length) {
    a[i] = i;
    i++;
  }
  return a;
})(1000);

function calculate(arr, sumNum) {
  var i = 0;
  var tempSum = 0;
  var result = [];

  // 첫번째 그룹까지만...
  for (; i < sumNum; i++) {
    tempSum += arr[i];
  }
  result.push(tempSum);


  // 다음 그룹부터는 이쪽으로...
  for (; i < arr.length; i++) {
    tempSum += arr[i];
    tempSum -= arr[i - sumNum];
    result.push(tempSum);
  }

  return result;
}

console.log(calculate(data, 3));
console.log(calculate(dataLong, 4));