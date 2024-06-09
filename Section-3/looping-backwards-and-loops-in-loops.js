"Use Strict";

// looping-backwards-and-loops-in-loops

const user = ["Rupesh", "sharma", 19, "Coder", ["hacking", "study", "ui/ux"]];

const RUser = [];
for (let i = user.length - 1; i >= 0; i--){
    console.log(user[i]);
    RUser.push(user[i]);

}
console.log(RUser);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const RNUM = [];
for (let j = num.length - 1; j >= 0; j--){
    console.log(num[j]);
    RNUM.push(num[j]);
}
console.log(RNUM);

for (let ij = 1; ij < 4; ij++){
    console.log(`--------------Starting Exercise ${ij}`);
    for (let ijk = 1; ijk < 6; ijk++) {
      console.log(`Back Rep ${ijk}`);
    }
     for (let ijk1 = 1; ijk1 < 6; ijk1++) {
       console.log(`Chest ${ijk1}`);
    }
    for (let ijk1 = 1; ijk1 < 6; ijk1++) {
      console.log(`legs ${ijk1}`);
    }
    
    
}
