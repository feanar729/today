// 솔로몬의 코드 리뷰

const beverageData = [
  {
    "drinkName": "콜라",
    "drinkPrice": 1000,
    "drinkStock": 2
  },
  {
    "drinkName": "사이다",
    "drinkPrice": 1000,
    "drinkStock": 10
  },
  {
    "drinkName": "포도쥬스",
    "drinkPrice": 700,
    "drinkStock": 2
  },
  {
    "drinkName": "딸기우유",
    "drinkPrice": 500,
    "drinkStock": 4
  },
  {
    "drinkName": "미에로화이바",
    "drinkPrice": 900,
    "drinkStock": 9
  },
  {
    "drinkName": "물",
    "drinkPrice": 500,
    "drinkStock": 10
  },
  {
    "drinkName": "파워에이드",
    "drinkPrice": 1200,
    "drinkStock": 0
  }
]

//금액을 인자로 받고, 사용 가능한 음료의 목록(음료 명, 가격, 재고 수량)을 반환해주는 함수
function insertCoin(coin, vendingMacData) {
  balance = coin;
  let availableDrinks = [];

  const array = vendingMacData.map((currentVal, index) => {
    if (coin >= currentVal["drinkPrice"]) {
      return currentVal
    }
    return "";
  })

  array.forEach((currentVal) => {
    if (currentVal !== "") {
      availableDrinks.push(currentVal);
    }
  })
  
  return availableDrinks;
}

//음료를 인자로 받아, 나온 음료에대한 메시지를 노출한다.
function selectItem(availableDrinkList, drink) {
  let message = "";
  for (let i = 0; i < availableDrinkList.length; i++) {
    if (availableDrinkList[i]["drinkName"] === drink && availableDrinkList[i]["drinkStock"] === 0) {
      message = "재고 없음";
      return message;
    }

    else if (availableDrinkList[i]["drinkName"] === drink) {
      message = "\n선택하신 음료, " + drink + "가(이) 나왔습니다.";
      return message;
    }
  }
}

//현재 잔액과, 잔액에 대한 음료 목록을 반환한다.
function showAvailableDrinkOfBalance(availableDrinkList, drink) {
  availableDrinkList.forEach((currentVal) => {
    if (currentVal["drinkName"] === drink) {
      balance = balance - currentVal["drinkPrice"];
      const availableDrinkDataOfBalance = insertCoin(balance, beverageData);
      console.log("현재 잔액: " + balance + "원\n");
    }
  })

  const availableDrinkDataOfBalance = insertCoin(balance, beverageData);
  console.log("사용 가능한 음료 목록: ");
  return availableDrinkDataOfBalance;
}


let balance = 0;
const availableDrinkData = insertCoin(1000, beverageData);

console.log(availableDrinkData);
console.log(selectItem(availableDrinkData, "사이다"));
console.log(showAvailableDrinkOfBalance(availableDrinkData,"사이다"));

// const test = insertCoin(3000,beverageData);
// console.log(selectItem(test, "파워에이드"));