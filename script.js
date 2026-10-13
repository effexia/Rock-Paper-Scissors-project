function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let choice = randomNumber == 1 ? "rock" 
  : randomNumber == 2 ? "paper" 
  : "scissors";
  return choice;
}

