import "./column.css";
import Note from "../note/note";

export default class Column {
  constructor(container, column) {
    this.container = container;
    this.element = Column.createForContent(column);
    this.bindToDOM();
  }

  static createForContent({ title, notes }) {
    const result = document.createElement("div");
    result.classList.add("column");
    result.innerHTML = `<div class="column__header">
      <h4>${title}</h4>
      <div class="column__menu"></div>
    </div>
    <div class="notes"></div>
    <div class="column__footer">
      <div class="column__add-button">
      Add another card
      </div>
      <div class="column__add-form hidden">
      <form>
        
      </form>
      </div>
    </div>`;
    const notesContainer = result.querySelector(".notes");
    notes.forEach((note) => {
      new Note(notesContainer, note);
    });
    return result;
  }

  bindToDOM() {
    this.container.appendChild(this.element);
  }
}
