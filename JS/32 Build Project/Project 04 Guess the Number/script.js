let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".message");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("⚠️ Please enter a valid number!", "error");
    userInput.value = ""; // Clear the input field
  } else if (guess < 1) {
    displayMessage("⚠️ Please enter a number greater than 0!", "error");
    userInput.value = ""; // Clear the input field
  } else if (guess > 100) {
    displayMessage("⚠️ Please enter a number less than 101!", "error");
    userInput.value = ""; // Clear the input field
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(
        `😢 Game Over! Random number was ${randomNumber}`,
        "error",
      );
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 Congratulations! You guessed it right! 🎉`, "success");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`📉 Too low! Try a higher number.`, "info");
  } else if (guess > randomNumber) {
    displayMessage(`📈 Too high! Try a lower number.`, "info");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message, type = "info") {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;

  // Remove any existing classes
  lowOrHigh.classList.remove("success", "error", "info");

  // Add the appropriate class based on message type
  lowOrHigh.classList.add(type);
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", ""); // Also disable submit button
  p.classList.add("button", "new-game-btn");
  p.innerHTML = `<h2 id="newGame">🔄 Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (event) {
    // Reset all game variables
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;

    // Clear and reset UI elements
    guessSlot.innerHTML = "";
    remaining.innerHTML = "10";
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled"); // Re-enable submit button
    userInput.value = "";

    // Clear message with a welcome message
    displayMessage(
      "🎮 New game started! Guess a number between 1 and 100.",
      "info",
    );

    // Remove the new game button
    startOver.removeChild(p);

    playGame = true;
  });
}

// Add a welcome message when page loads
window.addEventListener("load", function () {
  displayMessage("🎯 Enter your first guess to start playing!", "info");
});
