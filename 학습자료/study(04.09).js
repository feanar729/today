var data = [
  {
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3,
    'major': true
  },
  {
    'name': '교양영어',
    'grade': 'B+',
    'credit': 2,
    'major': false
  },
  {
    'name': '철학',
    'grade': 'B+',
    'credit': 1,
    'major': false
  }
];

var gradesObj = {
  "A+": 4.5,
  "A": 4.0,
  "B+": 3.5,
  "B": 3.0,
  "C+": 2.5,
  "C": 2.0,
  "D+": 1.5,
  "D": 1.0,
  "F": 0
};

var showGrade = {
  setCalculateData: {
    majorGrade: [],
    majorCredit: [],
    totalGrade: [],
    totalCredit: [],
    chagedTotalGrade: []
  },

  getCalculateScore(data) {
    let allData = showGrade.setCalculateData;

    let sumCredit = 0;
    let sumMajorCredit = 0;

    for (let i = 0; i < data.length; i++) {
      sumCredit += data[i]["credit"];
      var calculateGrade = gradesObj[data[i]["grade"]] * sumCredit;

      if (data[i]["major"]){
        sumMajorCredit += data[i]["credit"];
        var calMajorGrade = gradesObj[data[i]["grade"]] * sumMajorCredit;
      }
    }

    allData.majorGrade.push(calMajorGrade);
    allData.majorCredit.push(sumMajorCredit);

    allData.totalCredit.push(sumCredit);
    showGrade.setCalculateData.totalGrade.push(calculateGrade);

    return allData;
  },

  printGrade(data) {
    let calculateData = showGrade.setCalculateData;
    let totalAVG = (calculateData.totalGrade / calculateData.totalCredit).toFixed(2);
    let totalAVGMajor = (calculateData.majorGrade / calculateData.majorCredit).toFixed(2);
    let chagedTotalGrade = (totalAVG * 8 / 9).toFixed(2);  

    console.log("총평점 " + totalAVG + ", 전공평점 " + totalAVGMajor + ", 총이수학점 " + calculateData.totalCredit + ", 전공이수학점 " + calculateData.majorCredit);
    console.log(4.0 + "학점으로 변환하는 경우 총평점은 " + chagedTotalGrade + "입니다.");
  },

  addLecture(addData) {
    if(Object.is(addData, addData)){
      data.push(addData);
    }
    return data;
  },

  delayPrintGrade(data) {
    setTimeout(showGrade.printGrade, 2000, data);
  }
};

var plusData = {
    'name': '알고리즘',
    'grade': 'A+',
    'credit': 3,
    'major': true
};


showGrade.addLecture(plusData);
showGrade.getCalculateScore(data); 
// showGrade.printGrade(data);
showGrade.delayPrintGrade(data);
