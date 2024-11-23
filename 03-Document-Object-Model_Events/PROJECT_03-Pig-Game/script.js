"use strict";

// Selecting DOM elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceElImg = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// Starting conditions for the game
score0El.textContent = 0;
score1El.textContent = 0;
diceElImg.classList.add("hidden");

// Creating an array to store the final score. score[0] for player 1 and score[1] for player 2
let score;

// Creating a variable to store the current score
let currentScore;

// Active player
let activePlayer;

// State of the game
let playing;


const initGame = function () {
    score = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true

    // Starting conditions for the game
    score0El.textContent = 0;
    score1El.textContent = 0;

    // Resetting the current score for both the players
    current0El.textContent = 0;
    current1El.textContent = 0

    diceElImg.classList.add("hidden");

    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");

    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");

}

initGame();

const switchPlayer = function () {
    // When the dice number is 1, the player loses, the current score and before switching to the next player, we need to update the current score
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // Switch to next player, if the player rolled 1
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Current score is reset to 0;
    currentScore = 0;

    // Toggling the active player background color i.e. firstly we have player--active class as added to player--0 and then we remove it
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

// Rolling the dice
btnRoll.addEventListener("click", function () {
    if (playing) {
        // Step 1: Random number between 1 and 6
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNumber);

        // Step 2: Display the dice image
        diceElImg.classList.remove("hidden");
        diceElImg.src = `./images/dice-${diceNumber}.png`;

        // Step 3: Display the score and check for rolled 1
        if (diceNumber !== 1) {
            // If the dice number is not 1
            // Step 3.1: Display the score and update the current score
            currentScore += diceNumber;

            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        // Always here the active player is the player who is holding the dice

        // Step 1: Display the final score

        // score[0] = score[0] + currentScore;
        score[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent =
            score[activePlayer];

        // Step 2: To check if the final score is >= 100, if yes, we need to display the winner
        if (score[activePlayer] >= 20) {
            // Making the game over, So that button can't be clicked
            playing = false;

            // Hide the dice image
            diceElImg.classList.add("hidden");

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
        } else {
            // Step 3: If score is less than 100, Switch o next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener("click", initGame);
