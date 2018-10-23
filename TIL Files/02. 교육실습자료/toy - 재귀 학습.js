let list = [{
  "id": 1,
  "name": "Yong",
  "phone": "010-2786-9902",
  "type": "sk",
  "childnode": [{
    "id": 11,
    "name": "echo",
    "phone": "010-3923-1333",
    "type": "kt",
    "childnode": [{
        "id": 115,
        "name": "hary",
        "phone": "010-2786-9302",
        "type": "sk",
        "childnode": [{
          "id": 1159,
          "name": "pobi",
          "phone": "010-9302-0009",
          "type": "kt",
          "childnode": [{
              "id": 11592,
              "name": "cherry",
              "phone": "010-1223-9932",
              "type": "lg",
              "childnode": []
            },
            {
              "id": 11595,
              "name": "solvin",
              "phone": "010-534-7843",
              "type": "sk",
              "childnode": []
            }
          ]
        }]
      },
      {
        "id": 116,
        "name": "kim",
        "phone": "010-3796-1102",
        "type": "kt",
        "childnode": [{
          "id": 1168,
          "name": "hani",
          "phone": "010-1223-6713",
          "type": "sk",
          "childnode": [{
            "id": 11689,
            "name": "ho",
            "phone": "010-4434-4534",
            "type": "kt",
            "childnode": [{
                "id": 116890,
                "name": "wonsuk",
                "phone": "010-3434-1302",
                "type": "kt",
                "childnode": []
              },
              {
                "id": 1168901,
                "name": "chulsu",
                "phone": "010-3100-9841",
                "type": "sk",
                "childnode": []
              }
            ]
          }]
        }]
      },
      {
        "id": 117,
        "name": "hong",
        "phone": "010-2786-9902",
        "type": "lg",
        "childnode": []
      }
    ]
  }]
}];

// 재귀 사용 코드
function test(list) {
  for (let key in list) {
    console.log(list[key]["name"]);
    const type = Object.prototype.toString.call(list[key].childnode);
    if (type === "[object Array]") test(list[key]["childnode"]);
  }
}

test(list);

// const obj = {
//   first: 1,
//   second: "2"
// }

// // const string = "12345";
// const array = [1, 2, 3, 4, 5];

// for (let index in array) {
//   // console.log(index)
// }