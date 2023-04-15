import { engines } from "../../scripts/utils/trigger";
import html from "./search.html?raw";
import "./search.sass";
class SearchComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html;
  }
  connectedCallback() {
    const attribute = this.getAttribute("show")!;
    switch (attribute) {
      case "set":
        const setElement: HTMLElement = this.querySelector("#set")!;
        setElement.style.display = "block";
        this.onMountSet();
        break;
      case "add":
        const addElement: HTMLElement = this.querySelector("#add")!;
        addElement.style.display = "block";
        this.onAddMount();
        break;
    }
  }

  onMountSet() {
    let searchengines =
      JSON.parse(localStorage.getItem("searchEngines") ?? "") ?? engines;
    searchengines.forEach(
      (engine: { name: string; query: string; default: boolean }) => {
        const engineAbbr = document.createElement("abbr");
        engineAbbr.title = engine.name;
        const buttonEl = document.createElement("button");
        buttonEl.innerHTML = engine.name.slice(0, 2);
        buttonEl.classList.add("preset-button");
        engineAbbr.addEventListener("click", () => {
          const h3 = document.getElementsByTagName("h3")[0];

          if (searchengines.length === 0) searchengines = engines;
          let engineToSet = searchengines.findIndex(
            (eng: any) => eng.name === engine.name
          );
          let engToFind = searchengines.find(
            (eng: any) => eng.name === engine.name
          );
          let currentdefault = searchengines.find(
            (eng: any) => eng.default === true
          );
          if (currentdefault.name === engine.name) {
            h3.innerHTML = `${engine.name} is already a default search engine`;
            return;
          }
          const currentDefaultIndex = searchengines.findIndex(
            (eng: any) => eng.default === true
          );
          searchengines.splice(engineToSet, 1);
          searchengines.splice(currentDefaultIndex, 1);
          currentdefault.default = false;
          engToFind.default = true;
          searchengines.push(engToFind);
          searchengines.push(currentdefault);
          localStorage.setItem("searchEngines", JSON.stringify(searchengines));
          h3.innerHTML = `Set ${engToFind.name} as your default search engine`;
        });
        const engineGrid = this.querySelector(".engine-grid")!;
        engineAbbr.appendChild(buttonEl);
        engineGrid.appendChild(engineAbbr);
      }
    );
  }
  onAddMount() {
    const submitButton = document.getElementById("search-add")!;
    submitButton.addEventListener("click", () => {
      console.log('click');
      const [name, url] = [
        (document.getElementById("search-name")! as HTMLInputElement).value,
        (document.getElementById("search-url")! as HTMLInputElement).value,
      ];
      const h3 = document.getElementsByTagName("h3")[1]!;
      if (!url.includes("$ENGINE")) {
        h3.innerHTML = "URL doesn't contain $ENGINE";
      } else {
        const searchEngines = JSON.parse(
          localStorage.getItem("searchEngines") ?? "[]"
        );
        searchEngines.push({
          name: name,
          query: url,
          default: false,
        });
        localStorage.setItem("searchEngines", JSON.stringify(searchEngines));
        h3.innerHTML = `Added a new search engine!`;
      }
    });
  }
}
window.customElements.define("search-element", SearchComponent);
