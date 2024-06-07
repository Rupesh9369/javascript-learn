'use strict'
console.log(`hey Coding-Challenge-6 `);

// let price = prompt("Enter Price of your Bill : ");

// let price1, price2;
// if (price <= 300) {
//   price1 = 15 / 100;
//   price2 = price1 * price;
//   console.log(
//     `Your Bill Price is ${price} in this bill we add 15% tip price is ${price2} total bill is ${
//       Number(price) + Number(price2)
//     }`
//   );
// } else if (price >= 301) {
//   price1 = 15 / 100;
//   price2 = price1 * price;
//   console.log(
//     `Your Bill Price is ${price} in this bill we add 20% tip price is ${price2} total bill is ${
//       Number(price) + Number(price2)
//     }`
//   );
// } else {
//   console.log(`WTF`);
// }


function tip() {
    let arr1 = prompt("ENter the bill price : ");
    const tip_p = [arr1,444,666];
    let price1, price2;
    if (tip_p[0] <= 300) {
      price1 = 15 / 100;
      price2 = price1 * tip_p[0];
      console.log(
        `Your Bill Price is ${
          tip_p[0]
        } in this bill we add 15% tip price is ${price2} total bill is ${
          Number(tip_p[0]) + Number(price2)
        }`
      );
    } else if (tip_p[0] >= 301) {
      price1 = 15 / 100;
      price2 = price1 * tip_p[0];
      console.log(
        `Your Bill Price is ${
          tip_p[0]
        } in this bill we add 20% tip price is ${price2} total bill is ${
          Number(tip_p[0]) + Number(price2)
        }`
      );
    } else {
      console.log(`WTF`);
    }
    
}

tip();