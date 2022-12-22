//Create variables to track total score of player and computer
let playerScore = 0;
let computerScore = 0;

//Create and link HTML elements with their respective variables
const messageDiv = document.getElementById("message-div");
const scoreDiv = document.getElementById("score-div");
const computerRockButton = document.getElementById("computer-rock-button");
const computerPaperButton = document.getElementById("computer-paper-button");
const computerScissorsButton = document.getElementById("computer-scissors-button");
const playerRockButton = document.getElementById("player-rock-button");
const playerPaperButton = document.getElementById("player-paper-button");
const playerScissorsButton = document.getElementById("player-scissors-button");

const computerButtonColor = "#ffcccc";
const computerButtonActivatedColor = "#ff8080";
const playerButtonColor = "#009973";
const playerButtonActivatedColor = "#00664d";

const popupBackground = document.getElementById("popup-background");
const popup = document.getElementById("popup");
const popupButtonYes = document.getElementById("popup-button-yes");
const popupButtonNo = document.getElementById("popup-button-no");
const popupMessage = document.getElementById("popup-message");

//Activates when the player makes a choice. Will select a random choice for computer and process results
function runRound(playerChoice) {
	
	resetButtonBackground();
	
	if(computerScore < 5 && playerScore < 5) {
		let computerChoice = getComputerChoice();
	
		setTextContents(playerChoice,computerChoice);
	
		if(playerScore == 5 || computerScore == 5) {
			endGame();
		}
	} else {
		endGame();
	}
	
}

//Randomy returns either Rock, Paper, or Scissors as a String
function getComputerChoice() {
	
	let temp = Math.floor(Math.random() * 3)
	
	let result = "";
	
	if(temp == 0) {result = "Rock";}
	
	if(temp == 1) {result = "Paper";}
		
	if(temp == 2) {result = "Scissors";}
		
	setComputerButtonBackground(result);
		
	return result;
}

function setComputerButtonBackground(computerChoice) {
	
	if(computerChoice == "Rock") {
		computerRockButton.style.backgroundColor = computerButtonActivatedColor;
	}
	if(computerChoice == "Paper") {
		computerPaperButton.style.backgroundColor = computerButtonActivatedColor;
	}
	if(computerChoice == "Scissors") {
		computerScissorsButton.style.backgroundColor = computerButtonActivatedColor;
	}
}

function resetButtonBackground() {
	computerRockButton.style.backgroundColor = computerButtonColor;
	computerPaperButton.style.backgroundColor = computerButtonColor;
	computerScissorsButton.style.backgroundColor = computerButtonColor;
	
	playerRockButton.style.backgroundColor = playerButtonColor;
	playerPaperButton.style.backgroundColor = playerButtonColor;
	playerScissorsButton.style.backgroundColor = playerButtonColor;
}

function setPlayerButtonBackground(playerChoice) {
	
	if(playerChoice == "Rock") {
		playerRockButton.style.backgroundColor = playerButtonActivatedColor;
	}
	if(playerChoice == "Paper") {
		playerPaperButton.style.backgroundColor = playerButtonActivatedColor;
	}
	if(playerChoice == "Scissors") {
		playerScissorsButton.style.backgroundColor = playerButtonActivatedColor;
	}
	
}

//Updates text comtents of HTML elements to reflect the outcome of the round
function setTextContents(playerChoice, computerChoice) {
	
	if(computerChoice == "Rock" && playerChoice == "Rock") {
		messageDiv.textContent = "It's a tie!";
	}
	if(computerChoice == "Rock" && playerChoice == "Paper") {
		messageDiv.textContent = playerChoice + " beats " + computerChoice + ", you win!";
		playerScore++;
	}
	if(computerChoice == "Rock" && playerChoice == "Scissors") {
		messageDiv.textContent = playerChoice + " is beat by " + computerChoice + ", you lose.";
		computerScore++;
		}
	if(computerChoice == "Paper" && playerChoice == "Rock") {
		messageDiv.textContent = playerChoice + " is beat by " + computerChoice + ", you lose.";
		computerScore++;
		}
	if(computerChoice == "Paper" && playerChoice == "Paper") {
		messageDiv.textContent = "It's a tie!";
		}
	if(computerChoice == "Paper" && playerChoice == "Scissors") {
		messageDiv.textContent = playerChoice + " beats " + computerChoice + ", you win!";
		playerScore++;
		}
	if(computerChoice == "Scissors" && playerChoice == "Rock") {
		messageDiv.textContent = playerChoice + " beats " + computerChoice + ", you win!";
		playerScore++;
		}
	if(computerChoice == "Scissors" && playerChoice == "Paper") {
		messageDiv.textContent = playerChoice + " is beat by " + computerChoice + ", you lose.";
		computerScore++;
		}
	if(computerChoice == "Scissors" && playerChoice == "Scissors") {
		messageDiv.textContent = "It's a tie!";
		}
		
	scoreDiv.textContent = playerScore + " - " + computerScore;
}

//TODO: Handles the HTML elements and text boxes to display the winner and allow for a new game to be started
function endGame() {
	openPopup();
}

function setPopupMessage() {
	if(playerScore == 5) {
		popupMessage.textContent = "🎉 You won " + playerScore + " to " + computerScore + "! 🎉";
	} else {
		popupMessage.textContent = "You lost " + playerScore + " to " + computerScore + " 😥";
	}
	
}

function openPopup() {
	setPopupMessage();
	popup.style.visibility = "visible";
	popupButtonYes.style.transition = ".5s";
	popupButtonNo.style.transition = ".5s";
	popupBackground.style.visibility = "visible";
}

function closePopup() {
	popup.style.visibility = "hidden";
	popupButtonYes.style.transition = "0s";
	popupButtonNo.style.transition = "0s";
	popupBackground.style.visibility = "hidden";
}

function newGame() {
	messageDiv.textContent = "Select your weapon!"
	playerScore = 0;
	computerScore = 0;
	scoreDiv.textContent = playerScore + " - " + computerScore;
	resetButtonBackground();
}