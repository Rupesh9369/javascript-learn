'use Strict'
console.log(`hello fucking coders`);

// function practices 
function rup(me1, me2) {
    const me = `hey ${me1} how are you tell me code ${me2}`;
    return me;
}

const me2 = rup("Rupesh", 94);

// console.log(me2);


function Cal_age(age_define1, Real_age_is2) {
  let age_define = prompt("Enter Your Birth Year : ");
  console.log(`Your Birth year is ${age_define} `);
  let Real_age_is = 2024 - age_define;
    console.log(`Your Age is ${Real_age_is} `);
    // return age_define,Real_age_is;
}
// Cal_age();
// console.log(Real_ag);

// function expression 
const age2 = function (birth_year) {
    return 2023 - birth_year;
}
const agge2 = age2(2002);

console.log(agge2);



const code_ac = function (code_ac_1, code_ac_2) {
    console.log(`here the code 1 is ${code_ac_1} and the code 2 is ${code_ac_2}`)
};

code_ac(999, 888);