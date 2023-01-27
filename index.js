let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.ceil(Math.random() * 6);
  if (player1Turn) {
    player1Dice.textContent = randomNumber;
    player1Score += randomNumber;
    if (randomNumber === 1) {
      player1Score = 1;
    } else if (randomNumber === 6) {
      player1Score = 0;
    }
    player1Scoreboard.textContent = player1Score;
    player1Turn = false;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    player2Dice.textContent = randomNumber;
    player2Score += randomNumber;
    if (randomNumber === 1) {
      player2Score = 1;
    } else if (randomNumber === 6) {
      player2Score = 0;
    }
    player2Scoreboard.textContent = player2Score;
    player1Turn = true;
    player1Dice.classList.add("active");
    player2Dice.classList.remove("active");
    message.textContent = "Player 1 Turn";
  }
  //   player1Turn = !player1Turn;

  function rollNresetbtnStyle() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥇";
    rollNresetbtnStyle();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🏆";
    rollNresetbtnStyle();
  }

  if ((player2Score += randomNumber === 1)) {
    player2Score - 1;
  } else if ((player2Score += randomNumber === 6)) {
    player2Score - 6;
  }
});

resetBtn.addEventListener("click", function () {
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  rollBtn.style.display = "inline-block";
  resetBtn.style.display = "none";
  message.textContent = "Player 1 Turn";
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
});
