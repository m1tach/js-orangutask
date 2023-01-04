import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
    this.emojis = this.emojis.map(el => el + this.banana);

    document.getElementById('emojis').textContent = this.emojis.reduce((prev, curr) => prev + curr);
  }
}
