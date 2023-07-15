import { bangs } from "../bangs";
import { Bang } from "./interfaces";
import { percievedPlaceholder, preventFurtherInput } from "./placeholder";

const placeCaretAtEnd = (el: HTMLInputElement) => {
  el.focus();
  if (
    typeof window.getSelection != "undefined" &&
    typeof document.createRange != "undefined"
  ) {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    if (!sel) return;
    sel.removeAllRanges();
    sel.addRange(range);
    //@ts-ignore
  } else if (typeof document.body.createTextRange !== "undefined") {
    //@ts-ignore
    var textRange = document.body.createTextRange();
    textRange.moveToElementText(el);
    textRange.collapse(false);
    textRange.select();
  }
};
const getPrediction = (inputs: string[]) => {
  if (!inputs[0].startsWith("/")) return { tab: "", string: "" }
  const predictedOutputs: Array<{ name: string; description: string }> = [];
  const predictedBangs: Array<Bang> = [];
  for (const bang of bangs) {
    for (const trigger of bang.triggers) {
      if (
        trigger.toLowerCase().startsWith(inputs[0])
      ) {
        predictedOutputs.push({
          name: trigger,
          description: bang.description,
        });
        predictedBangs.push(bang);
      }
    }
  }
  if (predictedOutputs.length === 0 && predictedBangs.length === 0) {
    return {
      string: "",
      tab: ""
    }
  }
  let returnValue = predictedOutputs[0];
  if (predictedOutputs[0].name === inputs[0]) {
    if (predictedBangs[0].arguments)
      for (const argument of predictedBangs[0].arguments) {
        if (argument.name.toLowerCase().includes(inputs[1])) {
          returnValue = {
            name: `${returnValue.name} ${argument.name}`,
            description: argument.description,
          };
        }
      }
  }
  return {
    string: returnValue ? `${returnValue.name} - ${returnValue.description}` : "",
    tab: returnValue.name
  };
};

const registerPredictiveTextHelper = () => {
  const searchEl: HTMLSpanElement = document.querySelector(".search")!;
  const suggestionsEl = document.querySelector(".suggestion")!;
  const containerEl: HTMLDivElement =
    document.querySelector(".input-container")!;
  //register the container element
  containerEl.addEventListener("click", (event) => {
    event.preventDefault();
    searchEl.focus();
  });
  let wasPlaceHolderChanged = false;

  searchEl.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Tab") {
      const prediction = getPrediction(searchEl.innerHTML.split(" "));
      if (prediction.string !== "") {
        searchEl.innerHTML = prediction.tab;
        placeCaretAtEnd(searchEl as HTMLInputElement);
        return;
      }
    }
    if (searchEl.innerHTML === "" && wasPlaceHolderChanged)
      suggestionsEl.innerHTML = percievedPlaceholder;
    if (searchEl.innerHTML !== "") {
      preventFurtherInput();
      suggestionsEl.innerHTML = getPrediction(searchEl.innerHTML.split(' ')).string
      wasPlaceHolderChanged = true;
    }
  });
};

export default registerPredictiveTextHelper;
