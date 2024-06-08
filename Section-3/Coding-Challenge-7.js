// "use strict";

console.log(
  `

         lﾆヽ
　    　 |= |
　    　 |_ |
　　/⌒|~ |⌒i-、
　 /|　|　|　| ｜
　｜(　(　(　(　｜
　｜　　　　　 ｜
　 ＼　　　　　/
　　 ＼　　　 |

                     `
);

// today we do coding challenge

const user1 = {
  firstName: "Rupesh",
  age: 19,
  mass: 72,
    height: 1.69,
    calBmi: function () {
        this.bmi1 = (this.mass / this.height) * this.height;
        return this.bmi1;
      
  }
  //   bmi1: mass / height ** 2,
};
const user2 = {
  firstName: "kuldeep",
  age: 19,
  mass: 92,
  height: 1.95,
  calBmi: function () {
      this.bmi2 = (this.mass / this.height) * this.height;
      return this.bmi2;
  },
  //   bmi2: mass / height ** 2,
};

user1.calBmi();
user2.calBmi();
console.log(user1.bmi1);
console.log(user2.bmi2);

const BMI = () => {
  if (user1.bmi1 > user2.bmi2) {
    console.log(
      `Hey ${user1.firstName} your BMI ${user1.bmi1} is Higher than ${user2.firstName} bmi ${user2.bmi2}`
    );
  } else if (user1.bmi1 < user2.bmi2) {
    console.log(
      `Hey ${user2.firstName} your BMI ${user2.bmi2} is Higher than ${user1.firstName} bmi ${user1.bmi1}`
    );
  } else {
    console.log(`wtf`);
  }
};

// console.log(bmi1, bmi2);
const bmii = BMI();
// console.log(bmii);
