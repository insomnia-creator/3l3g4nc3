const formatDate = () => {
  const date = new Date();

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date.getDay()];

  const dateNum = date.getDate();
  let dateEnding = "th";
  const year = date.getFullYear();
  //if else chain alert
  if (dateNum === 1 || dateNum === 21 || dateNum === 31) {
    dateEnding = "st";
  } else if (dateNum === 2 || dateNum === 22) {
    dateEnding = "nd";
  } else if (dateNum === 3 || dateNum === 23) {
    dateEnding = "rd";
  } else if (dateNum === 4 || dateNum === 24) {
    dateEnding = "th";
  } else if (dateNum === 5 || dateNum === 25) {
    dateEnding = "th";
  } else if (dateNum === 6 || dateNum === 26) {
    dateEnding = "th";
  } else if (dateNum === 7 || dateNum === 27) {
    dateEnding = "th";
  } else if (dateNum === 8 || dateNum === 28) {
    dateEnding = "th";
  } else if (dateNum === 9 || dateNum === 29) {
    dateEnding = "th";
  } else if (dateNum === 10 || dateNum === 30) {
    dateEnding = "th";
  } else if (dateNum === 11) {
    dateEnding = "th";
  } else if (dateNum === 12) {
    dateEnding = "fth";
  } else if (dateNum === 13) {
    dateEnding = "th";
  } else if (dateNum === 14) {
    dateEnding = "th";
  } else if (dateNum === 15) {
    dateEnding = "th";
  } else if (dateNum === 16) {
    dateEnding = "th";
  } else if (dateNum === 17) {
    dateEnding = "th";
  } else if (dateNum === 18) {
    dateEnding = "th";
  } else if (dateNum === 19) {
    dateEnding = "th";
  } else if (dateNum === 20) {
    dateEnding = "th";
  } else if (dateNum === 21) {
    dateEnding = "st";
  } else {
    dateEnding = "-what apocolyptic year are we living in?!?!?!?!?!??!?!?!?!?";
  }

  // sometimes in life you have to deal with low level code like this
  // and it's not that bad
  //can someone do it with a switch statement????
  let monthName: string = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];

  return `${day}, ${dateNum}${dateEnding} of ${monthName} ${year}`;
};

const setWindowOnLoad = () => {
  const result: HTMLDivElement = document.querySelector(".result")!;
  const dateEl = document.createElement("h2");
  dateEl.style.textAlign = "center";
  dateEl.innerHTML = formatDate();
  result.appendChild(dateEl);
};

export default setWindowOnLoad;

/*
  if (Array.isArray(recentSearchResults)) {
    const div = document.createElement("div");
    div.style.backgroundColor = "rgba(255, 255, 255, 0.198)";
    div.style.height = "1px";
    div.style.marginTop = "0.6em";
    div.style.marginBottom = "0.6em";
    div.style.paddingLeft = "1.2em";
    div.style.paddingRight = "1.2em";
    result.appendChild(div);
    const hell = document.createElement("h2");
    hell.style.textAlign = "center";
    hell.innerHTML = "Recent search results";
    result.appendChild(hell);
    const buttonList = document.createElement("div");
    buttonList.style.display = "flex";
    buttonList.style.flexDirection = "column";
    buttonList.style.alignItems = "center";
    for (const sr of recentSearchResults) {
      const buttons = document.createElement("button");
      buttons.innerHTML = sr.slice(0, 64);
      if (sr.length >= 64) {
        buttons.innerHTML += "...";
      }
      buttons.classList.add("button");
      buttons.style.transform = `scale(0.9)`;
      buttons.style.width = "40vw";
      buttons.style.whiteSpace = "nowrap"
      buttons.style.overflowX = "hidden";
      buttons.addEventListener("click", () => {
        result.innerHTML = "Looking up " + sr;
        let searchEngines = localStorage.getItem("searchEngines");
        let enginesParsed;
        if (!searchEngines) {
          localStorage.setItem("searchEngines", JSON.stringify(engines));
          enginesParsed = engines;
        } else {
          enginesParsed = JSON.parse(searchEngines);
        }
        const engineToUse = enginesParsed.find(
          (engine: any) => engine.default === true
        )!;
        window.location.href = engineToUse.query.replace(
          "$ENGINE",
          encodeURIComponent(sr)
        );
      });
      buttonList.appendChild(buttons);
    }
    result.appendChild(buttonList);
  }

 */
