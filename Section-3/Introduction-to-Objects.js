"use strict";

console.log(
  `;)

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

// today we learn about objects

const rupesh = {
  firstName: "Rupesh",
  lastName: "Sharma",
  age2: 2024 - 2004,
  Role: "Programmer",
  otherInfo: ["ui/ux", "Editing", "youtuber"],
};

// dot and bracket notation

console.log(rupesh.age2);

console.log(rupesh["age2"]);

console.log(rupesh["firstName"]);
const nameKey = "Name";
console.log(rupesh["first" + nameKey]);
console.log(rupesh["last" + nameKey]);

const ageKey = "2";
console.log(rupesh["age" + ageKey]);

// const popup = prompt(
//   "What do you want to know about Rupesh ? choose firstName, lastName, age2, Role, otherInfo"
// );
// if (rupesh[popup]) {
//   console.log(`${rupesh[popup]}`);
// } else {
//   console.log(
//     `Enter Right value that we provide choose firstName, lastName, age2, Role, otherInfo`
//   );
// }

// console.log(`${rupesh['popup']}`);
rupesh.localHost = "https://localhost:5500/js.js";
rupesh["X_acc"] = "https://localhost:5500/js.js";

console.log(rupesh);
console.log(rupesh["X_acc"]);
console.log(rupesh["localHost"]);

console.log(`${rupesh['firstName']}, have ${rupesh.otherInfo.length} (${rupesh.otherInfo}) Skills but Favorite skills is ${rupesh.otherInfo[1]}`);
