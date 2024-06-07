'use strict'
console.log(`hey fucking coder`);

const k_array = ['peter', 'mike', 'tel'];
console.log(k_array);
const newL = k_array.push("jay");;
// k_array.push('jay');
// k_array.push('jay2');
// k_array.push('jay3');
console.log(k_array);
console.log(newL);

k_array.unshift('jone');
console.log(k_array);
const del_return = k_array.pop();

console.log(del_return);
console.log(k_array);
const shift_del = k_array.shift();
console.log(shift_del);
console.log(k_array);

console.log(k_array.indexOf('mike'));
console.log(k_array.indexOf('mik'));

k_array.push(90);
console.log(k_array.includes('tel'));
console.log(k_array.includes('te'));
console.log(k_array.includes(90));

if (k_array.includes('mike')) {
    console.log(`This name Present in our db `);
    
} else {
    console.log(`this name not present in our db `)
}
