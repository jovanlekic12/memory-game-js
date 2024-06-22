import "./style.css";

const btnEasy = document.querySelector(".btn__easy");
const btnMedium = document.querySelector(".btn__medium");
const btnHard = document.querySelector(".btn__hard");
const gridContainer = document.querySelector(".square__container");
const score = document.querySelector(".score");
let clickedSquares = 0;
class SquareManager {
  squares;
  constructor() {
    this.squares = [];
  }
  addSquare(square) {
    this.squares.push(square);
  }
  renderSquares(rows, cols) {
    gridContainer.innerHTML = "";
    squareManager.squares = [];
    for (let c = 0; c < rows * cols; c++) {
      squareManager.addSquare(new Square());
      let cell = document.createElement("div");
      cell.classList.add("square");
      gridContainer.appendChild(cell);
      cell.setAttribute("id", this.squares[c].id);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${cols},1fr`;
    gridContainer.style.gridTemplateRows = `repeat(${rows},1fr)`;
  }
}

class Square {
  id;
  isClicked;
  constructor() {
    this.id = self.crypto.randomUUID();
    this.isClicked = false;
  }
  changeIsClicked() {
    this.isClicked = !this.isClicked;
  }
}

const squareManager = new SquareManager();
console.log(squareManager);
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

squareManager.renderSquares(3, 3);
score.textContent = `${clickedSquares}/${squareManager.squares.length}`;
const squares = gridContainer.querySelectorAll(".square");
squares.forEach((square) => (square.style.backgroundColor = getRandomColor()));

gridContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("square")) {
    const squareDiv = event.target;
    const id = squareDiv.id;
    const currentSquare = squareManager.squares.find(
      (square) => id === square.id
    );
    clickedSquares = clickedSquares + 1;
    score.textContent = `${clickedSquares}/${squareManager.squares.length}`;

    if (currentSquare.isClicked) {
      alert("KURAC");
    }
    currentSquare.changeIsClicked();
  }
});

btnEasy.addEventListener("click", function () {
  squareManager.renderSquares(3, 3);
  const squares = gridContainer.querySelectorAll(".square");
  squares.forEach(
    (square) => (square.style.backgroundColor = getRandomColor())
  );
  score.textContent = `${clickedSquares}/${squareManager.squares.length}`;
});

btnMedium.addEventListener("click", function () {
  squareManager.renderSquares(4, 4);
  const squares = gridContainer.querySelectorAll(".square");
  squares.forEach(
    (square) => (square.style.backgroundColor = getRandomColor())
  );
  score.textContent = `${clickedSquares}/${squareManager.squares.length}`;
});

btnHard.addEventListener("click", function () {
  squareManager.renderSquares(5, 5);
  const squares = gridContainer.querySelectorAll(".square");
  squares.forEach(
    (square) => (square.style.backgroundColor = getRandomColor())
  );
  score.textContent = `${clickedSquares}/${squareManager.squares.length}`;
});
