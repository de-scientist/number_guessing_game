// Initialize DOM elements
const containerEL = document.querySelector(".container");
const btnPlayEL = document.querySelector(".btn_again");
const btnCheckEL = document.querySelector(".btn_check");
const hideNumEL = document.querySelector(".hide_num");
const msgEL = document.querySelector(".message");
const inputNumEL = document.querySelector(".input_number");
const highScoreEL = document.querySelector(".high_score");
const scoreEL = document.querySelector(".score");

// Generate a random number from 1 to 100
let randomNum = Math.floor(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

// Function to display messages
const displayMessage = function (message) {
  msgEL.textContent = message;
};

// Event to check the hidden number
btnCheckEL.addEventListener("click", () => {
  const guess = Number(inputNumEL.value);

  if (!guess) {
    displayMessage("❌ Please enter a number!");
    return;
  }

  // When player wins
  if (guess === randomNum) {
    hideNumEL.textContent = randomNum;
    hideNumEL.style.width = "50%";
    hideNumEL.style.transition = "all 0.5s ease-in";
    containerEL.style.backgroundColor = "#9be19b"; // soft green
    displayMessage("🎉 Congratulations! You've Won the Game :)");

    if (score > highScore) {
      highScore = score;
      highScoreEL.textContent = highScore;
    }

  } else {
    // When guess is wrong
    if (score > 1) {
      displayMessage(guess > randomNum ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreEL.textContent = score;
    } else {
      displayMessage("💀 You've lost the game!");
      containerEL.style.backgroundColor = "#ff6961";
      scoreEL.textContent = 0;
    }
  }
});

// Reset the game
btnPlayEL.addEventListener("click", () => {
  score = 20;
  randomNum = Math.floor(Math.random() * 100) + 1;
  scoreEL.textContent = score;
  hideNumEL.textContent = "?";
  hideNumEL.style.width = "25%";
  inputNumEL.value = "";
  containerEL.style.backgroundColor = "#ddd";
  displayMessage("Start guessing...");
});
