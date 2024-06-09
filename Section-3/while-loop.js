"use strict";

console.log(`while loop`);

// for (let i = 0; i <= 5; i++){
//     console.log(`i Send this Msg ${i} Times`);
// }
let rep = 1;
// while (rep <= 10) {
//     console.log(`i Send this Msg ${rep} Times`);
//     rep++;

// }

// let gymNUM = 199433;
// while (gymNUM <= 199450) {
//     console.log(`hey your gym Number is ${gymNUM}`);
//     gymNUM++;

// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You got ${dice} Number`);
    dice = Math.trunc(Math.random() * 6) + 1;
    
    if (dice === 6) console.log('Loop is about to end...');
}
// console.log(dice);
