import html from "./preferences.html?raw";
import "./preferences.sass"

class PreferencesView extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html;
  }
  connectedCallback() {

  }

  onMount() {

  }
}

window.customElements.define("preferences-element", PreferencesView)
