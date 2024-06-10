"use strict";

const calTip = function (bill) {
  return bill >= 58 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const callTip = function (bill) {
  return bill >= 58 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const BillValue = [300, 435, 200, 99, 976, 643, 645, 876, 234, 610];
// const tipAmount = [];
const afterTipAmount = [];
const totalTip = [];

for (let mm = 0; mm < BillValue.length; mm++) {
  const tip = calTip(BillValue[mm]);
  afterTipAmount.push(tip);
  totalTip.push(tip + BillValue[mm]);
}
console.log(BillValue);
console.log(afterTipAmount);
console.log(totalTip);
const BillValue2 = [2,3,6];
const avgNumber = [];
const calcAvg = function (arr) {
  let sum = 0;
  for (let mmm = 0; mmm < arr.length; mmm++) {
    sum += arr[mmm];
  }
  // console.log(sum);

  return sum / arr.length;
}
// ERROR 
// @RUPESH9369 
console.log(calcAvg([2, 4, 6]));
console.log(calcAvg(totalTip));




// for (let mm = 0; mm < BillValue.length; mm++) {

//     console.log(`Hey ${BillValue[mm]}`)
//     if (BillValue[mm] > 300) {
//         price1 = 15 / 100;
//         price2 = price1 * BillValue[mm];
//         console.log(`bill amount is ${BillValue[mm]}, `);

//     }

// }

// function tip() {
//   let arr1 = 455;
//   const tip_p = BillValue;
//   let price1, price2;
//   if (tip_p[0] <= 300) {
//     price1 = 15 / 100;
//     price2 = price1 * tip_p[0];
//   } else if (tip_p[0] >= 301) {
//     price1 = 15 / 100;
//     price2 = price1 * tip_p[0];
//   } else {
//     console.log(`WTF`);
//   }
// }

// tip();
