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

      if (score > 1) {
        score--;
        scoreEL.textContent = score;

        msgEL.textContent = guess > randomNum > "Too high" : "Too Low";
        scoreEL.textContent = score;

      } else {
        displayMessage("You've Lost the Game");
        containerEL.style.backgroundColor = "#fff"
        scoreEL.textContent = 0;
      }

    } else {
      //success
      hideNumEL.textContent = randomNum;
      hideNumEL.style.width = "50%";
      hideNumEL.style.transition = "all 0.5s ease-in";
      containerEL.style.backgroundColor = "#eed8d";
      displayMessage("Congratulations You've Won the Game :)"); 

    }

  } else {
    displayMessage("Please Enter the Number :("); 
  }
});

// display the message
const displayMessage = function (message) {
  msgEL.textContent = message;
}

//reset the guess
btnPlayEL.addEventListener("click",() => (
  score = 100;
  randomNum = Math.floor(Math.random()*100)+1;
  scoreEL.textContent = score;
  hideNumEL.textContent = "?";
  hideNumEL.style.width = "25%";
  hideNumEL.style.transition = "all 0.5s ease-in";
  inputNumEL.value = ""
  containerEL.style.backgroundColor = "#ddd";
  displayMessage("Start Guessing..........");
) )