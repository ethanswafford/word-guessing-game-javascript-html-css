// Game Variable declarations 
let attempts = 10;
let wordList = ['javascript', 'html', 'css'];
// chosenWord is randomly selected from the wordList array
let chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
let guessedLetters = [];
let hiddenWord = [];

// 🎮 Function students will build next
function startGame(letter) {
  console.log(`You pressed: ${letter}`);
  // TODO:
  // 1️⃣ Build a masked string using underscores for letters not yet guessed.
  // 2️⃣ Track guessed letters and remaining attempts.
  // 3️⃣ Detect win or loss and display a message.
  // 4️⃣ (Bonus) Show guessed letters and progress dynamically in the console or DOM.
}

// ⌨️ Listen for keyboard input when the page loads
window.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();

  // Only process alphabetic letters (ignore Shift, Enter, etc.)
  if (key.match(/^[a-z]$/)) {
    startGame(key);
  } else {
    console.log("Please press a valid letter (A–Z).");
  }
});

// check to see if the script is loading
console.log('JavaScript is hooked into the html');