import { Response } from "../utils/interfaces";

const handlePreferences = (): Response | void => {
  const result = document.querySelector(".result")!;
  result.innerHTML = `<preferences-element></preferences-element>`
};

export default handlePreferences;
