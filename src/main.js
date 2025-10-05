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

  
})

//Add click event listener to the check button
checkButton.addEventListener("click", () => {
  if (input.disabled) {
    // If the input is disabled, reset the game
    resetGame();
    return;
  }

  chance--; //Decrease chance by 1 on each click
  let inputValue = input.value; //Get the value from the input field

  if (inputValue == randomNum) { 
    //Correct guess
    [guess.textContent, input.disabled] = ["Congrats! You found the number.", true];
    [checkButton.textContent, guess.color] = ["Replay", #27ae60];
  } else if (inputValue > randomNum && inputValue < 100) {
    // Guess is to high
    [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
    guess.color = #333;
  } else if (inputValue < randomNum && inputValue > 0) {
    // Guess is too low
    [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
    guess.color = "#333";
  } else {
    // Invalid input (not in the range 1-99)
    [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    guess.color = "#e74c3c";
  }

  if (chance == 0) {
    // No chances left, game over
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.color] = ["You lost the game", "#e74c3c"];
  }
});