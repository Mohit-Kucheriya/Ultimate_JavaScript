"use strict";
// Step 1: To define the secret number. If we have defined it inside the handler function, on each click the value will be different.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// Defining the scoreToDisplay, so we can keep track of the score.
let scoreToDisplay = 20;

// Set the highScore
let highScore = 0;

// Selecting the elements
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let body = document.querySelector("body");

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
    // Step 2: Get the value of the input field, and store it in a variable called guess. As the input value we receive is a string, we need to convert it to a number.
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    // To check if the value is empty,and empty values are falsy
    if (!guess) {
        displayMessage("⛔ No Number Entered!");

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage("🎉 You won!");
        body.style.backgroundColor = "#60b347";
        number.style.width = "30rem";
        number.textContent = secretNumber;

        if (scoreToDisplay > highScore) {
            highScore = scoreToDisplay;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (scoreToDisplay > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            scoreToDisplay = scoreToDisplay - 1;
            score.textContent = scoreToDisplay;
        } else {
            displayMessage("😭 You lost!");
            score.textContent = 0;
        }
    }

});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the score and secretNumber variables

3. Restore the initial conditions of the message, number, score and guess input field

4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".guess").value = "";

    displayMessage("Start guessing...");

    scoreToDisplay = 20;

    score.textContent = scoreToDisplay;

    number.textContent = "?";

    body.style.backgroundColor = "#222";

    number.style.width = "15rem";
});
