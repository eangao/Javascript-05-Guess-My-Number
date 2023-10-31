'use strict';

////////////////////////////////////////////////////////
// PROJECT #1: Guess My Number!
////////////////////////////////////////////////////////

// // And more about that later.
// // Now into this method,
// // we need to pass in a Selector.
// // And again, this Selector
// // is exactly the same Selector
// // that we would use in CSS.

// // select the element
// // document.querySelector('.message')

// // select the element and read
// // document.querySelector('.message').textContent)

// console.log(document.querySelector('.message').textContent);

//////////////////////////////////////////////
// What's the DOM and DOM Manipulation
//////////////////////////////////////////////
// See lecture

////////////////////////////////////////////////
// Selecting and Manipulating Elements
////////////////////////////////////////////////
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // use value to get the value and set the value
// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

//////////////////////////////////////////
// Handling Click Events
//////////////////////////////////////////

// random number from 1 to 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    // Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // When guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
