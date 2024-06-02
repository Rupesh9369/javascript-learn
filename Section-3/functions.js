"use strict";
console.log(`hello`);

// function

function login() {
  console.log(`hello+code`);
}
login();
login();
login();

function coder() {
  const y = 99;
  let i = 98 + y;

  // let jmk = prompt(`put any number`);
}
coder();

function wtf_process(apple, code, names, mango) {
  // console.log(apple, code, names, mango);
  const juice = `juice with ${apple} apple and ${code} code.`;
  return juice;
}

const apples1 = wtf_process(5, 4, 5, 5);
console.log(apples1);

function coe(code1, code2, code3, code4) {
  const coder3 = `i have the code 1 ${code1} and also code 2 ${code2} and i have the 3rd code ${code3} and final Code 4 ${code4}`;
  return coder3;
}
const magic = coe("coe1", "coe2", "coe3", "coe4");
console.log(magic);

function male(male1, male2) {
  const female2 = `i have male 1 name ${male1} and also male 2 name ${male2}`;
  return female2;
}

// const male_main = male("Rupesh", "kal");
// console.log(male_main);
console.log(`coderrrrrrrr`);
console.log(male("Rupesh", "kal"));



const app2 = male("kal", "kal2");
console.log(app2)

function yes(name, phone_no, email, code) {
    
    const profile = `hey my name is ${name} and my phone number is ${phone_no} and my email id is ${email} and my phone code is ${code} thats all`;
    return profile;
}

const profile_clone = yes("Rupesh", 1000508000, "Rupesh@gmail.com", 9369);
console.log(profile_clone);


const new_user = yes("kuldeep", 1000508000, "kuldeep@gmail.com", 9369);

console.log(new_user);