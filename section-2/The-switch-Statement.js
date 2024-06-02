console.log(`hello coder ⭐⭐⭐`);

// const day = prompt("Enter the day name in english");

// switch (day) {
//   case "monday":
//     console.log(`coding for 3 hrs.`);
//     console.log(`plain course`);
//     break;
//   case "tuesday":
//     console.log(`plain course content`);
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log(`make videos`);
//     break;
//   case "friday":
//     console.log(`make videos notes`);
//     break;
//   case "Saturday":
//     console.log(`publish videos`);
//     break;
//     case "sunday":
//         console.log(`enjoy the week :D`);
//         break;
//     default:
//         console.log(`Not a valid day`);
//         // break;
// }


const userIN = prompt('Enter The Week Day Names');

if (userIN === "monday") {
  console.log(`coding for 3 hrs.`);
  console.log(`plain course`);
} else if (userIN === "tuesday") {
  console.log(`go to gym full day`);
} else if (userIN === "wednesday") {
  console.log(`go to Watch movie`);
} else if (userIN === "thursday") {
  console.log(`play online games`);
} else if (userIN === "friday") {
  console.log(`make video for channel`);
} else if (userIN === "Saturday") {
  console.log(`make an video about games`);
} else if (userIN === "sunday") {
    console.log(`this is an rest day for me :D`);
    
} else {
    console.log('You put wrong number make sure put Right name');
}
