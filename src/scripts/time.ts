import PredominantColour from "./setTimeColour";
const displayDateBeautifully = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hoursString = hours < 10 ? "0" + hours : hours.toString();
    const minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
    const secondsString = seconds < 10 ? "0" + seconds : seconds.toString();
    return `${hoursString}:${minutesString}:${secondsString}`;
};


const setTime = (blob: Blob) => {
    const timeElement = document.getElementById("time")!;
    const timeColour = new PredominantColour(blob);
    setInterval(async () => {

        timeElement.innerHTML = displayDateBeautifully();
        await timeColour.setColour();
    }, 100);
}

export default setTime;