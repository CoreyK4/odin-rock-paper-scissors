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
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    return computerSelection === "paper"
      ? "You Lose! Paper beats rock!"
      : "You Win! Rock beats scissors!";
  } else if (playerSelection === "paper") {
    return computerSelection === "rock"
      ? "You Win! Paper beats rock!"
      : "You Lose! Scissors beat paper!";
  } else if (playerSelection === "scissors") {
    return computerSelection === "rock"
      ? "You Lose! Rock beats scissors!"
      : "You Win! Scissors beat paper!";
  } else {
    return "You have entered an invalid choice!";
  }
}
//Create a function to play a 5 round game
