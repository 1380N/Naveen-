"use strict";

// console.log(document.querySelector(".start").textContent);
// document.querySelector(".start").textContent = "Correct Answer";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector(".start").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inputValue").value);

  if (!guess) {
    displayMessage("No Number");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highScore2").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "↗ Too High!" : "↙ Too Low!");
      score--;
      document.querySelector(".score2").textContent = score;
    } else {
      displayMessage("😥 lost the game");
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score2").textContent = 0;
    }
  }
});

// Again button ----------------------------->

document.querySelector(".btn").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start Guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "Black";
  document.querySelector(".score2").textContent = score;
  document.querySelector(".inputValue").value = "";
  document.querySelector(".number").style.width = "15rem";
});
