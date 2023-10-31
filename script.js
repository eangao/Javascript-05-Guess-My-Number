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
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// use value to get the value and set the value
document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
