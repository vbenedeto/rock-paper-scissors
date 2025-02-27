
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

const container = document.querySelector("#container");
const result = document.createElement("div");
const round = document.createElement("p");
container.appendChild(result);
container.appendChild(round);

let computerScore = 0;
let humanScore = 0;

function checkForWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winnerMessage = humanScore === 5 ? " Congratulations 🎉 ! You won the game!" : " Sorry! Computer won the game! 💻";
    result.textContent = winnerMessage;
    humanScore = 0;
    computerScore = 0;
  }
}

function playGame(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    result.textContent = `It's a tie! Both choices were ${computerChoice}!`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") || 
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
      humanScore += 1;
      result.textContent = `You win! ${userChoice} beats ${computerChoice}!`;
  } else {
    computerScore += 1;
    result.textContent = `You lose! ${computerChoice} beats ${userChoice}!`;
  }
  
  round.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

  checkForWinner();

  console.log("Round fineshed.");
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.id, getComputerChoice());
  })
});

