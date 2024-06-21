import "./style.css";

const btnEasy = document.querySelector(".btn__easy");
const btnMedium = document.querySelector(".btn__medium");
const btnHard = document.querySelector(".btn__hard");

// game

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
