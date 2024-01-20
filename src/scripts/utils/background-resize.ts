export const resizeWindowToFitImage = () => {
  console.log('res');
  const scale = (window.outerWidth - window.innerWidth) / 10;
  const mainElement: HTMLElement = document.querySelector("main")!;
  if (scale >= 130) {
    mainElement.style.backgroundSize = `${scale * 2.5}%`;
  } else if (scale >= 120) {
    mainElement.style.backgroundSize = `${scale + 175}%`;
  } else if (scale >= 110) {
    mainElement.style.backgroundSize = `${scale + 150}%`;
  } else {
    mainElement.style.backgroundSize = `${scale + 125}%`;
  }
};

const registerBackgroundResizeHandler = () => {
  resizeWindowToFitImage();
  window.addEventListener("resize", resizeWindowToFitImage);
};

export default registerBackgroundResizeHandler;
