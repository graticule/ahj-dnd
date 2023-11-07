import Board from "./board/board";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  const board = new Board(container);

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = "Demo";
  container.appendChild(button);

  const boardInfo = localStorage.getItem("boardInfo");
});
