import { InputTrigger } from "../utils/interfaces";

import { Response } from "../utils/interfaces";
export interface Todo {
  task: string;
  name: string;
}

const handleTodo = (args: InputTrigger): Response | void => {

  const result = document.querySelector('.result')!;
  const action = args.arguments![0].name;
  console.log(action);

  if(action === 'create'){
    result.innerHTML = '<todo-element show="create-todo"></todo-element>';
  } else if(action === 'list'){
    result.innerHTML = '<todo-element show="todo-list"></todo-element>';
  } else {
    result.innerHTML = 'You can either list or create a todo, run todo list or todo create';
  }
  // const todos: Array<Todo> = JSON.parse(localStorage.getItem("todos") ?? "[]");
  // const action = args.args[0];
  // switch (action) {
  //   case "add":
  //     const todo = args.args.slice(2).join(" ");
  //     const todoName = args.args[1];
  //     const newTodo: Todo = {
  //       task: todo,
  //       name: todoName,
  //     };
  //     todos.push(newTodo);
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //     return {
  //       output: `Added ${newTodo.name} to the todo list`,
  //     };
  //   case "update":
  //     const todoNameToUpdate = args.args[1];
  //     const todoToUpdate = todos.find((todo) => todo.name === todoNameToUpdate);
  //     if (!todoToUpdate)
  //       return {
  //         output: `Could not find ${todoNameToUpdate} in the todo list`,
  //       };
  //     const updatedTodo = args.args.slice(2).join(" ");
  //     todoToUpdate.task = updatedTodo;
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //     return {
  //       output: `Updated ${todoNameToUpdate} in the todo list`,
  //     };
  //   case "remove":
  //     const todoNameToRemove = args.args[1];
  //     const todoToRemove = todos.find((todo) => todo.name === todoNameToRemove);
  //     if (!todoToRemove)
  //       return {
  //         output: `Could not find ${todoNameToRemove} in the todo list`,
  //       };
  //     todos.splice(todos.indexOf(todoToRemove), 1);
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //     return {
  //       output: `Removed ${todoNameToRemove} from the todo list`,
  //     };
  //   case "list":
  //     console.log(todos);
  //     todos.forEach((todo) => {
  //       const resultEl = document.querySelector(".result")!;
  //       const todoElement = document.createElement("div");
  //       todoElement.classList.add("result-element");
  //       todoElement.innerHTML = `
  //               <h3>${todo.name}</h3>
  //               <p>${todo.task}</p>
  //               `;
  //       resultEl.appendChild(todoElement);
  //     });
  //     return undefined;
  //   default:
  //     return {
  //       output: `Try searching for todo list, or add a todo using todo add <name> <task>`,
  //     };
  // }
};

export default handleTodo;
