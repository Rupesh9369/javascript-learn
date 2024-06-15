"use strict";

let main_num = Math.trunc(Math.random() * 19 + 1);

let score = 20;
let high_score = 0;
document.querySelector(".refresh-btn").addEventListener("click", function () {
  document.querySelector(".msg").textContent = "Start Guessing...";
  document.body.style.backgroundColor = "black";
  document.querySelector(".box").style.width = "10%";

  document.querySelector(".score-num").textContent = "20";
  // main_num = Math.trunc(Math.random() * 19 + 1);
  document.querySelector(".box-js-number").textContent = " ";
  document.querySelector(".num-change").textContent = main_num;
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

    document.body.style.backgroundColor = "green";
    document.querySelector(".num-change").textContent = main_num;

    // high_score = high_score + 10;
    document.querySelector(".high-score-num").textContent = high_score;
    document.querySelector(".box").style.width = "20%";
    if (score > high_score) {
      high_score = score;
      document.querySelector(".high-score-num").textContent = high_score;
    }
  } else if (check_num > main_num) {
    if (score > 1) {
      document.querySelector(".msg").textContent = "🧨 Number Is To big ";
      score--;
      document.querySelector(".score-num").textContent = score;
      document.querySelector("body").style.backgroundColor = "red";
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
