"use strict";

const BillValue = [300, 435, 200, 99, 976, 643, 645, 876, 234, 610];
const tipAmount = [];
const afterTipAmount = [];
const avgNumber = [];

for (let mm = 0; mm < BillValue.length; mm++) {
    
    avgNumber.push(BillValue[mm]+BillValue[mm] /100);
    
}
console.log(avgNumber)

// for (let mm = 0; mm < BillValue.length; mm++) {

//     console.log(`Hey ${BillValue[mm]}`)
//     if (BillValue[mm] > 300) {
//         price1 = 15 / 100;
//         price2 = price1 * BillValue[mm];
//         console.log(`bill amount is ${BillValue[mm]}, `);

//     }
    
// }



function tip() {
  let arr1 = 455;
  const tip_p = BillValue;
  let price1, price2;
  if (tip_p[0] <= 300) {
    price1 = 15 / 100;
    price2 = price1 * tip_p[0];
  } else if (tip_p[0] >= 301) {
    price1 = 15 / 100;
    price2 = price1 * tip_p[0];
  } else {
    console.log(`WTF`);
  }
}

// tip();
