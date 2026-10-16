
const choices = document.querySelectorAll(".choice");
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const resultElement = document.querySelector("#result");
const movesElement = document.querySelector("#moves");
const resetButton = document.querySelector("#reset");

let playerScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
  const computerChoice =
    options[Math.floor(Math.random() * options.length)];

  let result;

  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win! 🎉";
    playerScore++;
  } else {
    result = "Computer wins! 🤖";
    computerScore++;
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  resultElement.textContent = result;

  movesElement.textContent =
    `You chose ${playerChoice}. Computer chose ${computerChoice}.`;
}

choices.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    playGame(playerChoice);
  });
});

resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;

  playerScoreElement.textContent = 0;
  computerScoreElement.textContent = 0;
  resultElement.textContent = "Choose your move!";
  movesElement.textContent = "Make your first move below.";
});
