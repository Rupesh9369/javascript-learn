"use strict";

console.log(`debugging `);

const tempo = [];
// let min = tempo[0];

// const min = Math.min(...tempo);
// const max = Math.max(...tempo);
// console.log(`min  ${min} max - ${max}`);
// debugger;
let min = 0;
let max = 0;
const calcMM = function (tempo) {
  for (let i = 0; i < tempo.length; i++) {
    if (tempo[i] < min) {
      min = tempo[i];
    }
    if (tempo[i] > max) {
      max = tempo[i];
    }
    if (typeof tempo !== "Number") continue;
  }
  console.log(`min ${min}, max ${max} `);
  return max - min;
  // for (let j = 0; j < tempo.length; j++){

  // }
};
calcMM([2,4,5,7,99]);

// console.log(` `);
const amplitude = calcMM(tempo);
console.log(amplitude);
// const measureMent = function () {
//     const measure = {
//         type : 'temp',
//         unit: 'Celsius',
//         value: Number(prompt('Degrees celsius'))        
//     }
//     console.log(measure);
//     console.table(measure);
//     const kelvin = measure.value + 273;
//     return kelvin;
// }
// console.log(measureMent());