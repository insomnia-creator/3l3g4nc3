import "./style.sass";
import getImage from "./scripts/utils/load";
import setInputPlaceholder from "./scripts/utils/placeholder";
import setWindowOnLoad from "./scripts/utils/window";
import registerTriggerHandler from "./scripts/utils/trigger";
import checkIfFirstLaunch from "./scripts/utils/first-time";
import registerPredictiveTextHelper from "./scripts/utils/predictive-text";
//import registerBackgroundResizeHandler from "./scripts/utils/background-resize";

document.body.onload = async () => {
  if (!window.indexedDB) {
    alert("3l3g4nc3 requires a browser that supports IndexedDB. Please update");
    window.location.href = `https://google.com/chrome`;
    return;
  } else if (!window.customElements) {
    alert("3l3g4nc3 requires webcomponents API.");
    window.location.href = `https://google.com/chrome`;
    return;
  } else {
    //registerBackgroundResizeHandler();
    getImage();
    setInputPlaceholder();
    setWindowOnLoad();
    registerTriggerHandler();
    checkIfFirstLaunch();
    registerPredictiveTextHelper();
  }
};
