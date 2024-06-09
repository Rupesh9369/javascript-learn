"use strict";

// for loop

const user = ["Rupesh", "sharma", 19, "Coder", ["hacking", "study", "ui/ux"]];

// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);
// console.log(user[3]);
// console.log(user[4]);
for (let i = 0; i <= 4; i++) {
  console.log(user[i]);
}
const em = [];
const types = [];
const us = ["third", "fourth", 5, true, "seven", 8, 9];

for (let ii = 0; ii <= us.length; ii++) {
  console.log(us[ii]);
  // filling typeof in array
  // types[ii] = typeof us[ii];
  types.push(typeof us[ii]);
  em.push(typeof [ii]);
}
console.log(types);
console.log(em);

const birthYear = [1991, 2002, 2004, 2005, 2007, 2009, 2020, 2024];
const birthName = [
  "ram",
  "ram1",
  "ram2",
  "ram3",
  "ram4",
  "ram5",
  "ram6",
  "ram7",
];

for (let iii = 0; iii <= birthYear.length - 1; iii++) {
  console.log(` ${birthName[iii]} Your birth Year is ${birthYear[iii]}`);
}
const birthYear1 = [1991, 2002, 2004, 2005, 2007, 2009, 2020, 2024];
const ageDiff = [];
for (let r = 0; r < birthYear1.length; r++) {
  ageDiff.push(2050 - birthYear1[r]);
}
console.log(ageDiff);


// continue and break 

for (let ii = 0; ii <= us.length; ii++) {
    if (typeof us[ii] !== 'number') continue;

  console.log(us[ii]);
}

for (let ii = 0; ii <= us.length; ii++) {
  if (typeof us[ii] === 'number') break;

  console.log(us[ii]);
}
