export const resizeWindowToFitImage = () => {
  const scale = Math.abs((window.outerWidth - window.innerWidth) / 10);
  const mainElement: HTMLElement = document.querySelector("main")!;
  if (scale >= 130) {
    mainElement.style.backgroundSize = `${scale * 2.5}%`;
  } else if (scale >= 120) {
    mainElement.style.backgroundSize = `${scale + 150}%`;
  } else if (scale >= 110) {
    mainElement.style.backgroundSize = `${scale + 125}%`;
  } else {
    mainElement.style.backgroundSize = `${scale + 100}%`;
  }
};

const registerBackgroundResizeHandler = () => {
  window.addEventListener("resize", resizeWindowToFitImage);
};

export default registerBackgroundResizeHandler;
