"use strict";


const main_num = Math.trunc(Math.random() * 19 + 1);

// hey pro users when you un comment this code of line when you see the actual number
// and i send the answer in console.log(😅)
// document.querySelector(".num-change").textContent = main_num;

// add free meme api
//  async function fetchMeme() {
//    try {
//      const response = await fetch("https://meme-api.com/gimme");
//      const data = await response.json();

//      document.getElementById("memeImage").src = data.url;
//    } catch (error) {
//      console.error("Error fetching meme:", error);
//    }
//  }
//  window.onload = fetchMeme;

let score = 20 ;
let high_score = 0 ;
document.querySelector(".refresh-btn").addEventListener("click", function reload() {
  location.reload();
});
document.querySelector(".check-btn").addEventListener("click", function () {
  const check_num = Number(document.querySelector(".box-js-number").value);
    if (!check_num) {
        alert(`No Number Found`);
        if (score > 1) {
          document.querySelector(".msg").textContent = "🔴 No Number";
          score--;
          document.querySelector(".score-num").textContent = score;
        } else {
          document.querySelector(".msg").textContent = `You Lose The Game`;
          document.querySelector("popup").style.visibility = "visible";
        }
  } else if (check_num === main_num) {
        document.querySelector(".msg").textContent = "🔥 Correct Number";
        // break;
        
        document.body.style.backgroundColor = "#8ee827";
        high_score = high_score + 100;
        document.querySelector(".high-score-num").textContent = high_score;
    } else if (check_num > main_num) {
        if (score > 1) {
            document.querySelector(".msg").textContent = "🧨 Number Is To big ";
            score--;
            document.querySelector(".score-num").textContent = score;
        } else {
            document.querySelector(".msg").textContent = `You Lose The Game`;
            document.querySelector("popup").style.visibility = "visible";
            
        }
        
    } else if (check_num < main_num) {
        if (score > 1) {
          document.querySelector(".msg").textContent = "💋 Number Is To Small ";
          score--;
          document.querySelector(".score-num").textContent = score;
        } else {
          document.querySelector(".msg").textContent = `You Lose The Game`;
          document.querySelector(".popup").style.visibility = "visible";
          
        }
  }
});

