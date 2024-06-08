"use strict";

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

// today we learn about objects methods

const user = {
  firstName: "Rupesh",
  lastName: "Sharma",
  birthYear: 2004,
  Role: "Programmer",
  otherSkills: ["ui/ux", "Editing", "youtuber"],
  hasPanCard: true,
    youtubeSubCount: 99,
    // calAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }
    // calAge: function () {
    //     // console.log(this);
    //     return 2024 - this.birthYear;
    // }
    calAge: function () {
        // console.log(this);
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    newSub: function () {
        this.newSub2 = this.youtubeSubCount + 100;
        return this.newSub2;
        
    },
    roleZ: function () {
        this.roleNew = this.Role + [' Hacker'];
        return this.roleNew;
    },
    role3: function () {
        this.roleNew1 = this.roleZ() + [' Coder'];
        return this.roleNew1
    },
    // penCheck: function () {
    //     const penChec = penchk99 => {
    //         if (this.hasPanCard === true) {
    //             console.log("have a PenCard");
    //         } else {
    //             console.log(`${this.firstName} need a Pen Card`);
    //         }
    //     }; 
    //     // return this.penCheck3;
    //     return this.penChec;
    // },
    userWholeData: function () {
        this.userProfile = `${this.firstName} is a ${this.calAge()} Year Old ${this.Role}, ${this.hasPanCard ? 'Have A PenCard' : 'just Need PenCard'}`;
        
        return this.userProfile;
    },
};

// console.log(user.age);
console.log(user.calAge());
console.log(user.age);
console.log(user.newSub());
console.log(user.roleZ());
console.log(user.role3());
console.log(user.userWholeData());

// console.log(user.youtubeSubCount);
// console.log(user.calAge(user.birthYear));
// console.log(user['calAge'](2002));

