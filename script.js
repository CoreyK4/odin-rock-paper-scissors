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

//Create a function to play a 5 round game
