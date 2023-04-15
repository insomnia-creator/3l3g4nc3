import { InputTrigger, Response } from "../utils/interfaces";

const handleSearch = (args: InputTrigger): Response | void => {
  const action = args.arguments![0].name;
  const result = document.querySelector(".result")!;
  if (action === "set") {
    result.innerHTML = '<search-element show="set"></search-element>';
  } else if (action === "add") {
    result.innerHTML = '<search-element show="add"></search-element>';
  } else {
    return {
      output: `<h2>Search module</h2> <br> Set an engine: search set <br> Add an engine: search add`,
    };
  }
};

export default handleSearch;
