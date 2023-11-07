import Board from "./board/board";

document.addEventListener("DOMContentLoaded", () => {
  const json = localStorage.getItem("boardData");

  let data;

  try {
    data = JSON.parse(json);
  } catch (error) {
    console.log(error);
  }

  const container = document.querySelector(".container");

  if (data) {
    new Board(container, data);
  } else {
    new Board(container);
  }

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = "Demo";
  container.appendChild(button);

  window.addEventListener("beforeunload", () => {
    const board = document.querySelector(".board");
    if (!board) return;
    const columns = [];

    const columnElements = board.querySelectorAll(".column");
    [...columnElements].forEach((column) => {
      const name = column.querySelector("h4");
      const noteElements = column.querySelectorAll(".note");
      const notes = [];
      [...noteElements].forEach((note) => {
        const noteText = note.querySelector(".note__text");
        notes.push({ text: noteText.innerText });
      });
      columns.push({ title: name.innerText, notes });
    });

    localStorage.setItem("boardData", JSON.stringify({ columns }));
  });
});
