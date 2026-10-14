let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let choice =
    randomNumber == 1 ? "rock" : randomNumber == 2 ? "paper" : "scissors";
  return choice;
}

function getUserChoice() {
  let choice = prompt("Rock, paper or scissors?");
  return choice;
}

function getWinner(choice1, choice2) {
  if (
    (choice1 == "scissors" && choice2 == "paper") ||
    (choice2 == "scissors" && choice1 == "paper")
  ) {
    return "scissors";
  } else if (
    (choice1 == "paper" && choice2 == "rock") ||
    (choice2 == "paper" && choice1 == "rock")
  ) {
    return "paper";
  } else if (
    (choice1 == "rock" && choice2 == "scissors") ||
    (choice2 == "rock" && choice1 == "scissors")
  ) {
    return "rock";
  } else if (choice1 == choice2) {
    return "tie";
  }
}

function playRound() {
  let userChoice = getUserChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  let winner = getWinner(userChoice, computerChoice);
  if (winner == "tie") {
    return "It`s a tie!";
  } else if (winner === userChoice) {
    userScore++;
    return `You win! ${userChoice} beats ${computerChoice}!`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${userChoice}!`;
  }
}

