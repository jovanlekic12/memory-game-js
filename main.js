import "./style.css";

const btnEasy = document.querySelector(".btn__easy");
const btnMedium = document.querySelector(".btn__medium");
const btnHard = document.querySelector(".btn__hard");
const gridContainer = document.querySelector(".square__container");
const score = document.querySelector(".score");
class SquareManager {
  numberOfSquares;
  squares;
  clickedSquares;
  constructor() {
    this.squares = [];
    this.numberOfSquares = 9;
    this.clickedSquares = 0;
  }
  addSquare(square) {
    this.squares.push(square);
  }

  setDifficulty(numberOfSquares) {
    this.numberOfSquares = numberOfSquares * numberOfSquares;
  }

  fillArray() {
    this.deleteSquares();
    for (let i = 0; i < this.numberOfSquares; i++) {
      const sqaure = new Square(getRandomColor());
      this.addSquare(sqaure);
    }
  }

  renderSquares(rows, cols) {
    gridContainer.innerHTML = "";
    //   for (let c = 0; c < rows * cols; c++) {
    //     squareManager.addSquare(new Square());
    //     let cell = document.createElement("div");
    //     cell.classList.add("square");
    //     gridContainer.appendChild(cell);
    //     cell.setAttribute("id", this.squares[c].id);
    //   }
    //   gridContainer.style.gridTemplateColumns = `repeat(${cols},1fr`;
    //   gridContainer.style.gridTemplateRows = `repeat(${rows},1fr)`;
    this.squares.forEach((square) => {
      let cell = document.createElement("div");
      cell.classList.add("square");
      cell.style.backgroundColor = square.color;
      gridContainer.appendChild(cell);
      cell.setAttribute("id", square.id);
    });
    gridContainer.style.gridTemplateColumns = `repeat(${cols},1fr`;
    gridContainer.style.gridTemplateRows = `repeat(${rows},1fr)`;
  }
  deleteSquares() {
    squareManager.squares = [];
  }
  shuffleArray() {
    let shuffledArray = this.squares;
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  setSquares(squares) {
    this.squares = squares;
  }
}

class Square {
  id;
  isClicked;
  color;
  constructor(color) {
    this.color = color;
    this.id = self.crypto.randomUUID();
    this.isClicked = false;
  }
  changeIsClicked() {
    this.isClicked = !this.isClicked;
  }
}

const squareManager = new SquareManager();
squareManager.fillArray();
squareManager.renderSquares(3, 3);

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

squareManager.renderSquares(3, 3);
score.textContent = `${squareManager.clickedSquares}/${squareManager.squares.length}`;
const squares = gridContainer.querySelectorAll(".square");
squares.forEach((square) => (square.style.backgroundColor = getRandomColor()));

gridContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("square")) {
    const squareDiv = event.target;
    const id = squareDiv.id;
    const currentSquare = squareManager.squares.find(
      (square) => id === square.id
    );
    squareManager.clickedSquares = squareManager.clickedSquares + 1;
    score.textContent = `${squareManager.clickedSquares}/${squareManager.squares.length}`;
    if (squareManager.clickedSquares === squareManager.squares.length) {
      squareManager.clickedSquares = 0;
      score.textContent = `${squareManager.clickedSquares}/${squareManager.squares.length}`;
      squareManager.squares.forEach((square) => (square.isClicked = false));
      console.log(squareManager.squares);
      alert("you won");
      return;
    }
    squareManager.setSquares(squareManager.shuffleArray());
    squareManager.renderSquares(
      Math.sqrt(squareManager.numberOfSquares),
      Math.sqrt(squareManager.numberOfSquares)
    );
    if (currentSquare.isClicked) {
      squareManager.clickedSquares = 0;
      score.textContent = `${squareManager.clickedSquares}/${squareManager.squares.length}`;
      currentSquare.isClicked = false;
      squareManager.squares.forEach((square) => (square.isClicked = false));
      console.log(squareManager.squares);
      alert("end");
      return;
    }
    currentSquare.changeIsClicked();
  }
});

btnEasy.addEventListener("click", function () {
  squareManager.setDifficulty(3);
  squareManager.fillArray();
  squareManager.renderSquares(3, 3);
  squareManager.clickedSquares = 0;
  score.textContent = `${squareManager.clickedSquares}/${squareManager.squares.length}`;
});

btnMedium.addEventListener("click", function () {
  squareManager.setDifficulty(4);
  squareManager.fillArray();
  squareManager.renderSquares(4, 4);
  squareManager.clickedSquares = 0;
  score.textContent = `${squareManager.clickedSquares}/${squareManager.squares.length}`;
});

btnHard.addEventListener("click", function () {
  squareManager.setDifficulty(5);
  squareManager.fillArray();
  squareManager.renderSquares(5, 5);
  squareManager.clickedSquares = 0;
  score.textContent = `${squareManager.clickedSquares}/${squareManager.squares.length}`;
});
