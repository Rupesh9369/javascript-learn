'use strict'
console.log(`hello coders 🤡🤡🤡`);


const CodersId = true;
const nonCodersId = true;
const ImId = false;

// console.log(CodersId && nonCodersId);
// console.log(CodersId || nonCodersId);
// console.log(!nonCodersId);

// const accessID = CodersId && nonCodersId;
const accessID = CodersId || nonCodersId || ImId;
const accessID2 = CodersId && nonCodersId && !ImId;

// console.log(accessID);

if (accessID2) {
    console.log(`You Have Access to company`)
    
} else {
    console.log(`You Don't Have access to company`)
}


const age = 18;
const addharCard = false; 
const panCard = false;
const bankAccount = true;

if (age >= 18 || addharCard || panCard || bankAccount) {
    console.log(`You can go outside from India`)
    
} else {
    console.log(`You not go outside from India`)
    
}