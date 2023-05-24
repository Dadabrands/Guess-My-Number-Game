'use strict';
// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = '🎈Correct Number!';
// console.log(
//   (document.querySelector('.message').textContent = '🎈Correct Number!')
// );
// console.log(
//   (document.querySelector('.message').textContent = '🎈Correct Number!')
// );

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

// Implementing the Game Logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // When there is no input

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }
  // when Player Wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎈Correct Number!';
    displayMessage('🎈Correct Number!');
    // the Secret Number Appears When the guess is correct
    document.querySelector('.number').textContent = secretNumber;
    // Changes Background color when wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    // increases the width of the Number (When Manipulating a css  always specify it in a string "")
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '⚡Too High!' : ' 👇Too Low';
      displayMessage(guess > secretNumber ? '⚡Too High!' : ' 👇Too Low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ' 😥 You Lost the Game';
      displayMessage(' 😥 You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⚡Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' 😥 You Lost the Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // When guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '👇Too Low !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' 😥 You Lost the Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //    document.querySelector('.message').textContent = '👇Too Low !';
  //   // score--;
  //   // document.querySelector('.score').textContent = score;
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
