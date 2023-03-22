//Create a function to return the computer's random choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  if (randomNumber === 1) {
    computerChoice = "rock";
    return computerChoice;
  } else if (randomNumber === 2) {
    computerChoice = "paper";
    return computerChoice;
  } else {
    computerChoice = "scissors";
    return computerChoice;
  }
}

//Create a function to play a single round and return the result
function playRound(playerSelection, computerSelection) {
  let isTie = playerSelection === computerSelection;
  playerSelection = playerSelection.toLowerCase();

  if (isTie) {
    return "tie";
  } else if (playerSelection === "rock") {
    return computerSelection === "paper" ? "computer" : "player";
  } else if (playerSelection === "paper") {
    return computerSelection === "rock" ? "player" : "computer";
  } else {
    return computerSelection === "rock" ? "computer" : "player";
  }
}

//Create a function to play a 5 round game
function game() {
  let gameCount = 0;
  let playerWins = 0;
  let computerWins = 0;

  while (gameCount < 5) {
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors):");
    let winner;

    while (
      (playerChoice !== "rock" &&
        playerChoice !== "paper" &&
        playerChoice !== "scissors") ||
      playerChoice === null
    ) {
      playerChoice = prompt(
        "You have entered an invalid choice. Please enter a valid choice (rock, paper, or scissors):"
      );
    }

    winner = playRound(playerChoice, getComputerChoice());

    if (winner === "player") {
      console.log("You win!");
      playerWins++;
      gameCount++;
    } else if (winner === "computer") {
      console.log("Computer wins!");
      computerWins++;
      gameCount++;
    } else {
      console.log("It's a tie!");
    }
  }
}

game();
