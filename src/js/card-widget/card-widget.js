import "./card-widget.css";

export default class CardWidget {
  constructor(container) {
    this.container = container;
  }

  static get markup() {
    return `
    <div class="card-widget">
      <div class="card-widget__types">
        <div class="card-widget__type type_mir"></div>
        <div class="card-widget__type type_visa"></div>
        <div class="card-widget__type type_mastercard"></div>
        <div class="card-widget__type type_dinners-club"></div>
        <div class="card-widget__type type_jcb"></div>
        <div class="card-widget__type type_discover"></div>
        <div class="card-widget__type type_american-express"></div>
      </div>
      <form>
        <div class="card-widget__form">
        <input type="text" pattern="[0-9]*" class="card-widget__input">
        <button class="card-widget__button">Click to validate</button>
        </div>
        </form>
      </div>
      `;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML("beforeend", CardWidget.markup);
  }
}
