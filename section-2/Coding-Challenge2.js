'use strict'
console.log('Hello Coders 🤡🤡🤡');

// user 1
const firstUser = "Rupesh";
let johnWeight = 83;
const johnHeight = 1.78;

// user 2
const SecondUser = "Kuldeep";
let markWeight = 90;
const markHeight = 1.70;

const BMIUser1 = (johnWeight / johnHeight **2);
const BMIUser2 = (markWeight / markHeight **2);
const BMIData = BMIUser1 > BMIUser2;


console.log(BMIUser1, BMIUser2);


if (BMIUser1 >= BMIUser2) {
    console.log(
      `Rupesh BMI ${(BMIUser1)} Greater Than Kuldeep BMI  ${(BMIUser2)} 🔥🔥`
    );
    
} else {
    console.log(
      `Kuldeep BMI ${(BMIUser2)} Greater Than Rupesh BMI ${(BMIUser1)}🔥🔥`
    );
    
}
const outputBMI = `Rupesh BMI is ${BMIUser1} is Higher than Kuldeep BMI ${BMIUser2}`;
console.log(outputBMI);
