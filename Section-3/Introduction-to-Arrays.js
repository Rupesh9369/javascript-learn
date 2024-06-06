"use strict";

console.log(`hellllllllllllllllllllooooooooooooo`);

const friend1 = "Rupesh";
const friend2 = "steven";
const friend3 = "peter";
const friend4 = "mike";
// console.log(friend1, friend2, friend3, friend4);

const friends = ["Rupesh", "Kuldeep", "Do", "Much"];
console.log(friends);

const years = new Array(2021, 2020, 2022, 2024);
console.log(years);
console.log(years[0]);
console.log(years[1]);
console.log(years[2]);
console.log(years[3]);
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

console.log(friends.length);
console.log(friends[friends.length - 2]);

// mutate array

console.log(friends);
friends[2] = "Ray";
friends[1] = "mat";
console.log(friends);
console.log(years);
years[2] = "Ray";
years[1] = "mat";
console.log(years);

const firstName = "Rupesh";
const lastName = "sharma";
const age = 2024 - 2004;
const ma = [firstName, lastName, age];

console.log(ma);

const calcAge = function (birthYear) {
  return birthYear;
};
const years1 = [2000, 2002, 2004, 2005, 2008, 2010];
console.log(
  calcAge(2024) - years1[0],
  calcAge(2024) - years1[1],
  calcAge(2024) - years1[2],
  calcAge(2024) - years1[3],
  calcAge(2024) - years1[4],
  calcAge(2024) - years1[5]
);
// console.log(RealAge);
