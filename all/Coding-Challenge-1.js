console.log("hello coders");

/*
1st store Marks and Jones mass and height in variables
2nd calculate both their BMI using the formula you can give an implement both versions
3rd create a  boolean variable Mark's higher BMI contain information about whether mark has been higher BMI than Jone

*/

// // user 1
// const firstUser = "John";
// let johnWeight = 78;
// const johnHeight = 1.69;

// // user 2
// const SecondUser = "Mark";
// let markWeight = 92;
// const markHeight = 1.95 ;


// user 1
const firstUser = "Rupesh";
let johnWeight = 83;
const johnHeight = 1.78;

// user 2
const SecondUser = "Kuldeep";
let markWeight = 50;
const markHeight = 1.70;

const BMIUser1 = (johnWeight / johnHeight **2);
const BMIUser2 = (markWeight / markHeight **2);
// console.log(BMIUser1,BMIUser2);
// const alertBMI1 = 'SecondUser BMI Is Lower Than Kuldeep BMI';
// const alertBMI2 = "firstUser BMI Is Higher Than SecondUser BMI";
const BMIData = BMIUser1 > BMIUser2;
// const dataAboutUsersBMI = (BMIUser1>BMIUser2 );

console.log(BMIUser1,BMIUser2, BMIData)
