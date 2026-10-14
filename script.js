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
  if (choice1 === choice2) {
    return "tie";
  }
  if (
    (choice1 === "rock" && choice2 === "scissors") ||
    (choice1 === "paper" && choice2 === "rock") ||
    (choice1 === "scissors" && choice2 === "paper")
  ) {
    return choice1;
  } else return choice2;
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  function playRound(userChoice, computerChoice) {
    let winner = getWinner(userChoice, computerChoice);
    if (winner == "tie") {
      alert("It's a tie!");

      return "tie";
    } else if (winner === userChoice) {
      alert(`You win! ${userChoice} beats ${computerChoice}!`);
      userScore++;
    } else {
      alert(`You lose! ${computerChoice} beats ${userChoice}!`);
      computerScore++;
    }
  }

  for (let i = 1; i <= 5; i++) {
    let userChoice = getUserChoice().toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
  }
  if (userScore > computerScore) {
    alert(
      `Congratulations! You win with score of ${userScore} to ${computerScore}!`,
    );
  } else if (userScore < computerScore) {
    alert(`Yikes! You lost with score of ${userScore} to ${computerScore}`);
  } else alert(`Wow!! ${userScore} : ${computerScore}!! It's a tie!!`);
}

playGame();
