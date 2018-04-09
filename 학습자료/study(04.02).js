// function programming
var s = 'todo$공부하기, todo$알고리즘공부, doing$스터디하기';
// 객체형태 ==> { todo: ["공부하기", "알고리즘공부"], doing: ["스터디하기"] }

function split(data){
  return data.split(",");
}

function trimArr(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++){
    result.push(arr[i].trim());
  }
  return result;
}

function makeTodoList(arr){
  var resultObj = {
    "todo": [],
    "doing": []
  };
  
  arr.forEach(function(value){
    let split = value.split("$");
    let keySplit = split[0];
    let valueSplit = split[1];
    resultObj[keySplit].push(valueSplit);
  });
  
  return resultObj;
} 

var split = split(s);
var trim = trimArr(split);
var makeTodo = makeTodoList(trim);
console.log(makeTodo);

var pipe = (...args) => (value) =>fns.reduce((acc, fn) =>fn(acc), value);
function pipe(split, trim, makeTodo){
  (arguments) => {
    let splitArg = split(split);
    console.log(splitArg);
  }
}

var getTodoInfos = pipe(split, trim, makeTodo);
console.log(pipe);

//console.log('# pipe :', JSON.stringify(getTodoInfos(s)));



// reduce, forEach, map, filter의 method특성과 방법을 파악하기
// 객체, 배열의 탐색, 사용을 많이 실습해보기
