//dont duplicate them!!!!
const greetings = [
  "elegantly",
  "beautifully",
  "delightfully",
  "pleasantly",
  "gracefully",
  "merrily",
  "blissfully",
  "joyfully",
  "happily",
  "blissfully",
  "bravely",
  "boldly",
  "kindly",
  "mercifully",
  "politely",
  "respectfully",
  "warmly",
  "blushingly",
  "cheerfully",
  "comfortably",
  "eagerly",
  "enthusiastically",
  "fervently",
  "romantically",
  "sincerely",
  "graciously",
  "courteously",
  "engimatically",
  "maturely",
  "gloriously",
];
const timeOfDay = ["begin your day ", "continue your day ", "end your day "];
export let percievedPlaceholder = "";
let preventInput = false;
export const preventFurtherInput = () => {
  preventInput = true;
}
const setInputPlaceholder = () => {
  const search: HTMLSpanElement = document.querySelector(".suggestion")!;
  //get time of day
  const time = new Date().getHours();
  //if time is between 6am and 12pm

  if (time >= 6 && time < 12) {
    search.innerHTML = timeOfDay[0];
    percievedPlaceholder += timeOfDay[0];
  } else if (time >= 12 && time < 18) {
    search.innerHTML = timeOfDay[1];
    percievedPlaceholder += timeOfDay[1];
  } else {
    search.innerHTML = timeOfDay[2];
    percievedPlaceholder += timeOfDay[2];
  }
  const changeTo = greetings[Math.floor(Math.random() * greetings.length)];
  percievedPlaceholder += changeTo;
  let i = 0;
  let interval = setInterval(() => {
    if (preventInput) return;
    search.innerHTML += changeTo[i];
    i++;
    if (i === changeTo.length) {
      clearInterval(interval);
    }
  }, 75);
};

export default setInputPlaceholder;
