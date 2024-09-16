const choices = ["rock", "paper", "scissors"];
const PlayerDisplay = document.getElementById("Player");
const ComputerDisplay = document.getElementById("Computer");
const resultDisplay = document.getElementById("result");

let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerrScoreDisplay = document.getElementById("computerScoreDisplay");
let playerpoints = 0;
let computerpoints = 0;
function Play(Playerchoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (Playerchoice === computerChoice) {
    result = "Its A Tie";
  } else {
    switch (Playerchoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN" : "YOU LOSE";
        break;
      case "Scissors":
        result = computerChoice === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }
  PlayerDisplay.textContent = `Player : ${Playerchoice}`;
  ComputerDisplay.textContent = `Computer : ${computerChoice}`;
  resultDisplay.textContent = result;
  console.log(computerChoice);
  resultDisplay.classList.remove("greeentext", "redtext", "bluetext");
  switch (result) {
    case "YOU WIN":
      resultDisplay.classList.add("greentext");
      playerpoints++;
      playerScoreDisplay.textContent = playerpoints;
      break;
    case "YOU LOSE":
      resultDisplay.classList.add("redtext");
      computerpoints++;
      computerrScoreDisplay.textContent = computerpoints;
      break;
    case "Its A Tie":
      resultDisplay.classList.add("bluetext");

      break;
  }
}

let PlayerScore = document.get;
