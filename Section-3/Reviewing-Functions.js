'use strict'
console.log(`hello`);

const calc_age = function (birth_year) {
    return 2024 - birth_year;
    
}
const check_retirement = function (birth_year,fname) {
    const age = calc_age(birth_year);
    const retirement = 65 - age;
    // const first_name = 'Rupesh';

    if (retirement > 0) {
        console.log(`${fname} retires in ${retirement} years`);
        return retirement;
        
    } else {
        console.log(`${fname} has already retire 🎉`);
        return -1;
    }
    // return `${fname} retires in ${retirement} years`
};

// const ager = check_retirement(1991,"Rupesh");
console.log(check_retirement(1991, "Rupesh"));
console.log(check_retirement(2024, "mike"));
console.log(check_retirement(1950, "kiko"));



