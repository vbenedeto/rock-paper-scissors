/*
1 - Get input from computer on what its choice is [X]
2 - Get input from user on what its choice is [X]
3 - Compare the 2 players choices and display the winner of the play [X]
4 - Track how many times each player wins [X]
5 - Create a round of 5 plays and display in the console the winner of the round [X]
*/

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";  
  } else if (choice === 1) {
    return "scissors";
  } else {
    return "paper";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Rock, Paper or Scissors?");
  userChoice = userChoice.toLocaleLowerCase();
  return userChoice;
}

function compareScores(computer, human) {
  return computer > human ? `Computer won this round! Computer: ${computer}. You: ${human}` : `You won this round! You: ${human}. Computer: ${computer}.`
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return console.log(`It's a tie! Both choices were ${computerChoice}!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") || 
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
      computerScore += 1;
      return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
  }

  for (let round = 1; round < 6; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Round: ${round}`);
  }

  console.log(compareScores(computerScore, humanScore));
}

playGame();