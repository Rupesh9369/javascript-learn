'use strict'
console.log('Hello coders 🤡🤡🤡');

// boolean conversion
// 5 falsy 0,'',undfined,null, NaN

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(NaN))



console.log(Boolean(null))

// truthy value
console.log(Boolean({}))

const money = 0;

if (money) {
    console.log(`You Have Money But You Are JOB Less your Balance Is ${money}`);
    
} else {
    console.log(`You Need a JOB Your Balance Is ${money}`);
    
}

let code;
if (code) {
    console.log(`You dont have Any Code ${code}`)
    
} else {
    console.log(`You have code NaN`)
    
}