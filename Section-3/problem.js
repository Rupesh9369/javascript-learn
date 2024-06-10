// console.log(`Output : `);
const tempo = [3, 2, 4, -3, -1, 0, 9, 'error',12, 34, 66, 5, 9];
// let min = tempo[0];

// const min = Math.min(...tempo);
// const max = Math.max(...tempo);
// console.log(`min  ${min} max - ${max}`);
let min = tempo[0];
let max = tempo[0];
const calcMM = function () {
    for (let i = 0; i < tempo.length; i++){
        
        if (tempo[i] < min) {
            min = tempo[i];
            
            
        }
        if (tempo[i] > max) {
            max = tempo[i];
            }
        if (typeof tempo !== 'Number') continue;
        }
    return max - min;
    // for (let j = 0; j < tempo.length; j++){
        
    // }
}
calcMM()
console.log(`min ${min} `);
console.log(`max ${max} `);
const amplitude = calcMM(tempo);
console.log(amplitude);
// understanding the problem


// breaking up into sub-problem



const tempo3= [3, 2, 4, -13, -1, 0, 9, "error", 12, 34, 66, 5, 9];
const tempo2 = [300, 2, 4, -3, -1, 0, 9, "error", 12, 34, 66, 5, 9];
const tempo1 = tempo3.concat(tempo2);
// let min = tempo1[0];

// const min = Math.min(...tempo1);
// const max = Math.max(...tempo1);
// console.log(`min  ${min} max - ${max}`);
let min1 = tempo1[0];
let max1 = tempo1[0];
const calcMM1 = function () {
  for (let i = 0; i < tempo1.length; i++) {
    if (tempo1[i] < min1) {
      min1 = tempo1[i];
    }
    if (tempo1[i] > max1) {
      max1 = tempo1[i];
    }
    if (typeof tempo1 !== "Number") continue;
  }
  return max1 - min1;
  // for (let j = 0; j < tempo1.length; j++){

  // }
};
calcMM1();
console.log(`min1 ${min1} `);
console.log(`max1 ${max1} `);
const amplitude1 = calcMM1(tempo1);
console.log(amplitude1);