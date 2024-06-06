console.log(`hello`);

// const clcAvg = (a, b, c) => (a + b + c) / 3;

// console.log(clcAvg(3, 4, 5));

// let socreIndia = clcAvg(44, 23, 71);
// let socreUsa = clcAvg(65, 54, 49);
// console.log(socreIndia , socreUsa);

// const checkWinner = function chkWinner(india, usa) {
//     if (india >= 2 + usa) {
//         console.log(`INDIA is winner 🎉 (${india} vs. ${usa})`);

//     } else if(usa >= 2 * india) {
//         console.log(`USA is winner 🎉`);
//     } else {
//         console.log(`No One Wines 😥`)
//     }

// }
// // checkWinner(socreIndia,socreUsa);
// checkWinner(9599,111);

// socreIndia = clcAvg(85, 54, 41);
// socreUsa = clcAvg(23, 34, 27);

// checkWinner(socreIndia,socreUsa);
// // checkWinner();


// not working on this time when i expert in js then i fix this code and paly with this code i am in practices just like when llb done people do practices on court ; 
const codeChk = (a, b, c) => a + b + c / 3;
let indiaAvg = 55 + 77 + 99 / 3;
let PakAvg = 44 + 55 + 77 / 3;

function checkAvg(india, pak) {
  if (indiaAvg >= PakAvg) {
    console.log(`India is winner 🏆 ${india} vs. ${pak}`);
  } else if (PakAvg >= indiaAvg) {
    console.log(`Pak is Winner 🏆 ${pak} vs. ${india}`);
  } else {
    console.log(`No one winner 🤡`);
  }
}

checkAvg(43,43);
