let dice = () => Math.floor(Math.random() * 6 + 1);
let currentElement1 = document.querySelector(".player-current-add1");
let currentElement2 = document.querySelector(".player-current-add2");
let storeElement1 = document.querySelector(".player-score-add1");
let storeElement2 = document.querySelector(".player-score-add2");
let player1Dice = document.querySelector("#player1-dice");
let player2Dice = document.querySelector("#player2-dice");
let activePlayer1 = document.querySelector(".game-page-active-player1");
let activePlayer2 = document.querySelector(".game-page-active-player2");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let roll = document.querySelector(".roll");
let store = document.querySelector(".store");
let startButton = document.querySelector(".start-button");
let playAgainButton = document.querySelector(".start-again");

let currentPlayer = 1;
let current1 = 0;
let current2 = 0;
let currentStore1 = 0;
let currentStore2 = 0;

function clearInput() {
  if (name1.value != "") {
    name1.value = "";
  }
  if (name2.value != "") {
    name2.value = "";
  }
}

function addNumber() {
  let diceNumber = dice();
  if (currentPlayer === 1) {
    player1Dice.setAttribute(
      "src",
      `/images/game-page/dices/dice${diceNumber}.png`
    );
    if (diceNumber === 1) {
      activePlayer1.style.display = "none";
      activePlayer2.style.display = "unset";
      current1 = 0;
      currentElement1.innerHTML = "CURRENT: ";
      currentPlayer = 2;
    } else {
      current1 = current1 + diceNumber;
      currentElement1.innerHTML = `CURRENT: ${current1}`;
    }
  } else {
    player2Dice.setAttribute(
      "src",
      `/images/game-page/dices/dice${diceNumber}.png`
    );
    if (diceNumber === 1) {
      activePlayer1.style.display = "unset";
      activePlayer2.style.display = "none";

      current2 = 0;
      currentElement2.innerHTML = " :CURRENT";
      currentPlayer = 1;
    } else {
      current2 = current2 + diceNumber;
      currentElement2.innerHTML = ` ${current2} :CURRENT`;
    }
  }
}

startButton.addEventListener("click", () => {
  document.querySelector(".countdown").style.display = "flex";
  document.querySelector(".game-winner").style.display = "none";
  document.querySelector(".home-page").style.display = "none";
  let timeleft = 3;
  var startTimer = setInterval(function () {
    timeleft--;
    document.getElementById("counter").textContent = timeleft;
    if (timeleft < 1) {
      document.querySelector(".game-page").style.display = "flex";
      document.querySelector(".countdown").style.display = "none";
      clearInterval(startTimer);
    }
  }, 1000);
  document.querySelector(".player1-name").innerHTML =
    "Player 1:  " + name1.value;
  document.querySelector(".player2-name").innerHTML =
    "Player 2:  " + name2.value;
});

roll.addEventListener("click", addNumber);

store.addEventListener("click", () => {
  player1Dice.setAttribute("src", ``);
  player2Dice.setAttribute("src", ``);
  if (currentPlayer === 1) {
    activePlayer1.style.display = "none";
    activePlayer2.style.display = "unset";
    currentStore1 += current1;
    storeElement1.innerHTML = `SCORE: ${currentStore1}`;
    currentElement1.innerHTML = "CURRENT: ";
    current1 = 0;
    currentPlayer = 2;
  } else {
    activePlayer1.style.display = "unset";
    activePlayer2.style.display = "none";
    currentStore2 += current2;
    storeElement2.innerHTML = `${currentStore2} :SCORE`;
    currentElement2.innerHTML = " :CURRENT";
    current2 = 0;
    currentPlayer = 1;
  }

  if (currentStore1 >= 50) {
    document.querySelector(".game-page").style.display = "none";
    document.querySelector(".game-winner").style.display = "flex";
  }
  if (currentStore2 >= 50) {
    document.querySelector(".game-page").style.display = "none";
    document.querySelector(".game-winner").style.display = "flex";
  }
});

playAgainButton.addEventListener("click", () => {
  document.querySelector(".game-page").style.display = "none";
  document.querySelector(".game-winner").style.display = "none";
  document.querySelector(".home-page").style.display = "flex";
  storeElement1.innerHTML = "SCORE: ";
  currentElement1.innerHTML = "CURRENT: ";
  player1Dice.setAttribute("src", ``);
  player2Dice.setAttribute("src", ``);
  clearInput();
  current1 = 0;
  currentStore1 = 0;
  current2 = 0;
  currentStore2 = 0;
});
