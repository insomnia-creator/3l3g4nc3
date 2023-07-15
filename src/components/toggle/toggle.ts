import html from "./toggle.html?raw";
import "./toggle.sass";

class ToggleComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html;
  }

  connectedCallback() {
  }

  //on changed is called every time a value changes
  public onChange: (changedValue: boolean) => void = () => { };
}

window.customElements.define('toggle-component', ToggleComponent)
