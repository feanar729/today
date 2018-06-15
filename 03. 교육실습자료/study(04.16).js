/* 
ES6 class에 대해 학습
*/

// class Foo {
//   constructor(name) {
//     this.name = name; // 멤버변수의 선언과 초기화
//   }
// }

// console.log(new Foo('Lee')); // Foo { name: 'Lee' }

// test Coding
// class foo {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const fooSecond = new foo("Lee");
// console.log(fooSecond.name);

// MDN Class Prototype Method 
// class Polygon {
//   constructor(height, width) {
//     this.name = 'Polygon';
//     this.height = height;
//     this.width = width;
//   }
// }

// class Square extends Polygon {
//   constructor(length) {
//     super(length, length);
//     this.name = 'Square';
//   }
// }


console.log(Polygon);
console.log(Square);

// 음료수 목록 객체
let beverageData = {
  '콜라': {
    price: 1000,
    stock: 10
  },
  '사이다': {
    price: 1000,
    stock: 8
  },
  '포도쥬스': {
    price: 700,
    stock: 7
  },
  '딸기우유': {
    price: 500,
    stock: 4
  },
  '미에로화이바': {
    price: 900,
    stock: 10
  },
  '물': {
    price: 500,
    stock: 21
  },
  '파워에이드': {
    price: 1200,
    stock: 0
  },
}
// 투입된 돈을 누적하는 변수
let accumCoin = 0;

// 메세지 객체
let message = {
  returnSoldout() {
    return '사용가능한 음료수 없음'
  },
  returnShortOfMoney() {
    return '금액이 모자랍니다'
  },
  returnNoStock(item) {
    return `${item}는 재고가 없습니다`
  },
  returnChange(change) {
    return `잔돈 ${change}이 반환됐습니다`
  },
  returnSelectedItem(item, accumCoin) {
    return `${item}가 나왔습니다  현재잔돈 : ${accumCoin},  ${acting.machine.getBuyableItem(accumCoin)}`;
  },
  returnGetBuyableItem(itemArray) {
    return `사용가능한 음료수 목록 => ${itemArray.join(', ')}`;
  }
};


class Acting {
  constructor() {
    this.machine = new Machine();
  }
  insertCoin(coin) {
    accumCoin += coin;
    return this.machine.getBuyableItem(accumCoin);
  };

  selectedItem(item) {
    if (beverageData[item].stock <= 0) return message.returnNoStock(item);
    if (beverageData[item].price > accumCoin) return message.returnShortOfMoney();
    accumCoin -= beverageData[item].price;
    return message.returnSelectedItem(item, accumCoin);
  }
}


class Machine {
  constructor() {
    this.itemArray = [];
    this.item = '';
    this.accumCoin = 0;
    this.change = accumCoin;
  }
  getBuyableItem(coin) {
    if (coin < 500) return message.returnSoldout();

    for (let key in beverageData) {
      beverageData[key].stock > 0 ? this.item = `${key}(${beverageData[key].price})` :
        this.item = `${key}(재고없음)`;
      if (coin >= beverageData[key].price) {
        this.itemArray.push(this.item);
      }
    }
    return message.returnGetBuyableItem(this.itemArray);
  }

  returnMoney() {
    return message.returnChange(this.change);
  }
}


const acting = new Acting();
console.log(acting.insertCoin(3000));
console.log(acting.selectedItem("딸기우유"));