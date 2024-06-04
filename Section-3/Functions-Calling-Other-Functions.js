'use strict'

console.log(`hey coders`);


// function age(dob) {
//     const user_age = `hey Rupesh your age is ${2024 - dob} `;
//     return user_age;
// }
// const agee = age(1992);
// console.log(agee)
// function 2
function add(add_num) {
    return add_num + 2;
    
}
// function 1

function cut_fruit(fruit) {
    return fruit * 4;
    
}
// function 3
function cut(cut) {
    return cut - 10;
    
}
function fruit_process(apple, mango, orange, banana) {
    const add_number = add()
    const apple_pieces = cut_fruit(apple) + add(apple) + cut(apple);
    const mango_pieces = cut_fruit(mango) + add(mango) + cut(mango);
    const orange_pieces = cut_fruit(orange) + add(orange) + cut(orange);
    const banana_pieces = cut_fruit(banana) + cut_fruit(banana) + cut(banana);
    
    const juice = `i need to make an a fruit juice i have ${apple_pieces} apple & ${mango_pieces} Mango & ${orange_pieces} Orange & ${banana_pieces} banana`;
    return juice;
}
const fake1 =  fruit_process(2,4,7,12);

console.log(fake1);

