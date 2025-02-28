let computerScore = 0;
let humanScore = 0;

const resultContainer = document.querySelector("#result-container");
const result = document.createElement("p");
result.classList.add("result-text");
resultContainer.appendChild(result);

const round = document.createElement("p");
round.classList.add("round-text");
resultContainer.appendChild(round);

const buttons = document.querySelectorAll("#btns-container button");
const resetBtn = document.getElementById("resetBtn");

function showGameButtons() {
  buttons.forEach((button) => {
    button.style.display = "block";
  });
  resetBtn.style.display = "none";
}

function showResetButton() {
  buttons.forEach((button) => {
   button.style.display = "none";
  });
  resetBtn.style.display = "block";
}

function checkForWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winnerMessage = humanScore === 5 ? " Congratulations 🎉 ! You won the game!" : " Sorry! Computer won the game! 💻";
    result.textContent = winnerMessage;
    showResetButton();
    humanScore = 0;
    computerScore = 0;
  }
}

function playGame(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    result.textContent = `It's a tie! Both choices were ${computerChoice}!`;
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") || 
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
      humanScore += 1;
      result.textContent = `You win! ${userChoice} beats ${computerChoice}!`;
  } else {
    computerScore += 1;
    result.textContent = `You lose! ${computerChoice} beats ${userChoice}!`;
  }
  
  const roundText = `You: ${humanScore}\nComputer: ${computerScore}`;
  round.innerHTML = roundText.replace(/\n/g, "<br>");

  checkForWinner();

  console.log("Round fineshed.");
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "Rock";  
  } else if (choice === 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.id, getComputerChoice());
  })
});

resetBtn.addEventListener("click", () => {
  result.textContent = "";
  round.textContent = "";
  showGameButtons();
});


