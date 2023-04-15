import handleTodo from "./triggers/todo";
import { Bang } from "./utils/interfaces";
import handleSearch from "./triggers/search";
export const bangs: Array<Bang> = [
  {
    triggers: ["/todo"],
    description: `Do stuff with your todos`,
    arguments: [
      {
        name: "create",
        description: "Create a todo",
      },
      {
        name: "list",
        description: "List all your todos",
      },
    ],
    action: handleTodo,
    clearResultWindow: true,
  },
  {
    triggers: [
      "/reset-background",
      "/background",
      "/change-background",
      "/refresh-background",
    ],
    description: `Refresh the background`,
    action: () => {
      localStorage.removeItem("lastImage");
      window.location.reload();
    },
  },
  {
    triggers: ["/search"],
    description: `Search engine configurations.`,
    action: handleSearch,
    clearResultWindow: true,
    arguments: [
      {
        name: "set",
        description: "Set the default search engine"
      },
      {
        name: "add",
        description: "Add a custom search engine"
      }
    ]
  },
  {
    triggers: ['/reset-all'],
    description: `Reset all localStorageItems`,
    action: () => {
      localStorage.clear();
    },
    clearResultWindow: false
  }
];
