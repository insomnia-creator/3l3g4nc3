import { bangs } from "../bangs";
import { InputTrigger } from "./interfaces";

export const engines = [
  {
    name: "Google",
    query: `https://google.com/search?q=$ENGINE`,
    default: true
  },
  {
    name: "DuckDuckGo",
    query: `https://duckduckgo.com/?q=$ENGINE`,
    default: false
  },
  {
    name: "Bing",
    query: `https://www.bing.com/search?q=$ENGINE`,
    default: false
  },
  {
    name: "Yahoo",
    query: `https://search.yahoo.com/search?p=$ENGINE`,
    default: false
  },
  {
    name: "Kagi",
    query: `https://kagi.com/search?q=$ENGINE`,
    default: false
  },
];

const parseInput = (input: string): InputTrigger => {
  const [command, ...args] = input.split(" ");
  return {
    trigger: command,
    argumentsAsString: args.join(" "),
    arguments: args.map((arg) => {
      return {
        name: arg,
        description: "",
      };
    }),
  };
};

const registerTriggerHandler = () => {
  const search: HTMLSpanElement = document.querySelector(".search")!;
  search.addEventListener("keydown", (event) => {
    //prevent default to prevent the tab key.
    if (event.key.toLowerCase() === "tab" || event.key.toLowerCase() === 'enter') event.preventDefault();
  });
  search.addEventListener("keyup", async (event) => {
    if (event.key.toLowerCase() === "enter") {
      const command = parseInput(search.innerHTML);
      const bang = bangs.find((bang) =>
        bang.triggers.includes(command.trigger)
      );
      if (bang) {
        search.innerHTML = "";
        const resultEl = document.querySelector(".result")!;
        if (bang.clearResultWindow) resultEl.innerHTML = "";
        const response: any = await bang.action(command);
        try {
          resultEl.innerHTML = response.output;
        } catch { }
      } else {
        const query = search.innerHTML;
        const result = document.querySelector(".result")!;
        result.innerHTML = "Search for " + query;
        let searchEngines = localStorage.getItem("searchEngines");
        let enginesParsed;
        const searchResults = JSON.parse(localStorage.getItem("searchHistory") ?? "[]");
        searchResults.push(query)
        localStorage.setItem("searchHistory", JSON.stringify(searchResults));
        if (!searchEngines) {
          localStorage.setItem('searchEngines', JSON.stringify(engines));
          enginesParsed = engines;
        } else {
          enginesParsed = JSON.parse(searchEngines);
        }
        const engineToUse = enginesParsed.find((engine: any) => engine.default === true)!;
        window.location.href = engineToUse.query.replace('$ENGINE', encodeURIComponent(query));
      }
    }
  });
};

export default registerTriggerHandler;
