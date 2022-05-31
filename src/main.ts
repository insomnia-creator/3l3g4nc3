import "./style.sass";
import getImage from "./scripts/load";

document.body.onload = async () => {
  if (!window.indexedDB) {
    alert("3l3g4nc3 requires a browser that supports IndexedDB. Please update");
    window.location.href = `https://google.com/chrome`;
    return;
  } else {
    getImage();
  }
};
