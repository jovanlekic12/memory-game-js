import "./style.css";

const btnEasy = document.querySelector(".btn__easy");
const btnMedium = document.querySelector(".btn__medium");
const btnHard = document.querySelector(".btn__hard");
const gridContainer = document.querySelector(".square__container");

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}
function makeRows(rows, cols) {
  gridContainer.innerHTML = "";

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.classList.add("square");
    gridContainer.appendChild(cell);
  }
  gridContainer.style.gridTemplateColumns = `repeat(${cols},1fr`;
  gridContainer.style.gridTemplateRows = `repeat(${rows},1fr)`;
}
makeRows(3, 3);

const squares = gridContainer.querySelectorAll(".square");
squares.forEach((square) => (square.style.backgroundColor = getRandomColor()));

btnEasy.addEventListener("click", function () {
  makeRows(3, 3);
  const squares = gridContainer.querySelectorAll(".square");
  squares.forEach(
    (square) => (square.style.backgroundColor = getRandomColor())
  );
});

btnMedium.addEventListener("click", function () {
  makeRows(4, 4);
  const squares = gridContainer.querySelectorAll(".square");
  squares.forEach(
    (square) => (square.style.backgroundColor = getRandomColor())
  );
});

btnHard.addEventListener("click", function () {
  makeRows(5, 5);
  const squares = gridContainer.querySelectorAll(".square");
  squares.forEach(
    (square) => (square.style.backgroundColor = getRandomColor())
  );
});

class SquareManager {
  squares;
  constructor() {
    this.squares = [];
  }
}

class Square {
  id;
  isClicked;
  constructor() {
    this.id = self.crypto.randomUUID();
    this.isClicked = false;
  }
}
