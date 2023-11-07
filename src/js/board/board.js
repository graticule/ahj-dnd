import "./board.css";
import Column from "../column/column";

export default class Board {
  constructor(container, content) {
    this.container = container;
    this.element = Board.createForContent(content);
    this.bindToDOM();
    this.init();
  }

  init() {
    this.element.addEventListener("click", (e) => {
      if (e.target.closest(".note__close")) {
        e.target.closest(".note").remove();
        return false;
      }
      if (e.target.closest(".column__add-button")) {
        e.target.closest(".column__add-button").classList.add("hidden");
        e.target.closest(".column__footer").querySelector(".column__add-form").classList.remove("hidden");
      }
    });
  }

  static createForContent(content) {
    if (content === undefined) {
      content = {
        columns: [
          {
            title: "TODO",
            notes: [
              {
                text: "Запись 1",
              },
              {
                text: "Запись 2",
              }
            ],
          },
          {
            title: "IN PROGRESS",
            notes: [
              {
                text: "Запись 3",
              },
              {
                text: "Запись 4",
              }
            ],
          },
          {
            title: "DONE",
            notes: [
              {
                text: "Запись 5",
              },
            ],
          },
        ],
      };
    }
    const result = document.createElement("div");
    result.classList.add("board");
    content.columns.forEach((column) => {
      new Column(result, column);
    });
    return result;
  }

  // static get markupDemo() {
  //   return `
  //   <div class="panel">
  //     <div class="column">
  //       <div class="column__header">
  //         <h4>TODO</h4>
  //         <div class="column__menu"></div>
  //       </div>
  //       <div class="cards">
  //         <div class="cards">Запись 1 столбец 1</div>
  //         <div class="cards">Запись 2 столбец 1</div>
  //         <div class="cards">Запись 3 столбец 1</div>
  //         <div class="cards">Запись 4 столбец 1</div>
  //         <div class="cards">Запись 5 столбец 1</div>
  //       </div>
  //       <div class="column__footer">
  //         Add another card
  //       </div>
  //     </div>
  //     <div class="column">
  //       <div class="column__header">
  //         <h4>IN PROGRESS</h4>
  //         <div class="column__menu"></div>
  //       </div>
  //       <div class="cards">
  //         <div class="cards">Запись 1 столбец 2</div>
  //       <div class="cards">Запись 2 столбец 2</div>
  //       <div class="cards">Запись 3 столбец 2</div>
  //       </div>
  //       <div class="column__footer">Add another card</div>
  //     </div>
  //     <div class="column">
  //       <div class="column__header">
  //         <h4>DONE</h4>
  //         <div class="column__menu"></div>
  //       </div>
  //       <div class="cards"></div>
  //       <div class="column__footer">Add another card</div>
  //     </div>
  //   </div>
  //     `;
  // }

  // bindToDOMDemo() {
  //   this.container.insertAdjacentHTML("beforeend", Board.markup);
  // }

  bindToDOM() {
    this.container.appendChild(this.element);
  }
}
