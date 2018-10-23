// let obj = {
//   getName() {
//     return this.name;
//   },
//   setName(name) {
//     this.name = name;
//   }
// }
// obj.setName('crong');
// let result = obj.getName();
console.log('test');


let healthObj = {
  name : "달리기",
  lastTime : "PM10:12",
  showHealth : function() {
    console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
  }
}

healthObj.showHealth();