/* Do While Loop Exercise */

var randomNumber = getRandomNumber(10); // Will be different every time the page loads
var guess;
var guessCount = 0;
var correctGuess = false; // Starts of false since they have no guessed yet
//usually referred to as a flag

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}


do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?'); // collecting player's guess
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    //parseInt to convert player's input from string to number
    correctGuess = true;
  }  
} while ( ! correctGuess )
//while correctGuess is not false (so if it true), loop will stop
  
document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);