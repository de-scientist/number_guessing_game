// 🎯 Guess My Number Game — main.js
'use strict';

// Random number generator between 1 and 100
let secretNumber = Math.trunc(Math.random() * 100) + 1;
console.log("🎯 Secret number (for testing):", secretNumber);

// Initial scores
let score = 100;
let highScore = localStorage.getItem('highScore')
  ? Number(localStorage.getItem('highScore'))
  : 0;

// DOM elements
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.high_score');
const numberEl = document.querySelector('.hide_num');
const inputEl = document.querySelector('.input_number');
const checkBtn = document.querySelector('.btn_check');
const againBtn = document.querySelector('.btn_again');
const container = document.querySelector('.container');

// Initialize displayed scores
scoreEl.textContent = score;
highScoreEl.textContent = highScore;

// 🧠 Helper to display messages
const displayMessage = msg => (messageEl.textContent = msg);

// 🧮 Check button click handler
checkBtn.addEventListener('click', () => {
  const guess = Number(inputEl.value);

  // 🧩 Input validation
  if (!guess || guess < 1 || guess > 100) {
    displayMessage('🚫 Enter a number between 1 and 100!');
    return;
  }

  // ✅ Correct guess
  if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberEl.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    numberEl.style.width = '6rem';

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
      localStorage.setItem('highScore', highScore);
    }
  } 
  // ❌ Wrong guess
  else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = 0;
      document.body.style.backgroundColor = '#b34747';
    }
  }
});

// When user wins
container.classList.add('win');
container.classList.remove('lose');

// When user loses
container.classList.add('lose');
container.classList.remove('win');

// When resetting
container.classList.remove('win', 'lose');


// 🔁 Play Again button handler
againBtn.addEventListener('click', () => {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  console.log("🎯 Secret number (for testing):", secretNumber);

  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  inputEl.value = '';
  document.body.style.backgroundColor = '#222';
  numberEl.style.width = '4rem';
});
