console.log(`Tip Calculator`);

// let amount = prompt("Enter the number : ");

// switch (amount) {
//   case "300":
//     amountRate = 15 / 100;
//     amountRate2 = amountRate * amount;
//     console.log(
//       `your Bill is ${amount} in this bill we add tip of 15% is ${amountRate2} your bill is ${
//         Number(amount) + Number(amountRate2)
//       }`
//     );
//     break;
//   case "420":
//     amountRate = 20 / 100;
//     amountRate2 = amountRate * amount;
//     console.log(
//       `your Bill is ${amount} in this bill we add tip of 15% is ${amountRate2} your bill is ${
//         Number(amount) + Number(amountRate2)
//       }`
//     );
//     break;
//   case "620":
//     amountRate = 20 / 100;
//     amountRate2 = amountRate * amount;
//     console.log(
//       `your Bill is ${amount} in this bill we add tip of 15% is ${amountRate2} your bill is ${
//         Number(amount) + Number(amountRate2)
//       }`
//     );
//     break;
//   case "820":
//     amountRate = 20 / 100;
//     amountRate2 = amountRate * amount;
//     console.log(
//       `your Bill is ${amount} in this bill we add tip of 15% is ${amountRate2} your bill is ${
//         Number(amount) + Number(amountRate2)
//       }`
//     );
//     break;
//   default:
//     console.log(`Wrong amount`);
//     break;
// }


let price = prompt("Enter Price of your Bill : ");

if (price <= 300) {
    price1 = 15 / 100;
    price2 = price1 * price;
    console.log(`Your Bill Price is ${price} in this bill we add 15% tip price is ${price2} total bill is ${Number(price) +Number(price2)}`);    
} else if (price >= 301) {
    price1 = 15 / 100;
    price2 = price1 * price;
    console.log(
      `Your Bill Price is ${price} in this bill we add 20% tip price is ${price2} total bill is ${
        Number(price) + Number(price2)
      }`
    );
    
} else {
    console.log(`WTF`)
}
