// Initialize DOM elements
const containerEL = document.querySelector(".container");
const btnPlayEL = document.querySelector(".btn_again");
const btnCheckEL = document.querySelector(".btn_check");
const hideNumEL = document.querySelector(".hide_num");
const msgEL = document.querySelector(".message");
const inputNumEL = document.querySelector(".input_number");
const highScoreEL = document.querySelector(".high_score");
const scoreEL = document.querySelector(".score");

//Generate a random number from 1 to 100
let randomNum = Math.floor(Math.random() * 100 + 1);
let score = 20;
let highScore = 0;

// event to check the hide num
btnCheckEL.addEventListener("click", () => {
  const guess = Number(inputNumEL.value);

  // check empty input
  if(guess) {

    //not match hide number
    if(guess != randomNum) {

      if (score > 1)

    } else {
      //success
    }

  } else {
    msgEL.textContent = "Please enter then number!"
  }
});
