import { Todo } from "../../scripts/triggers/todo";
import html from "./todo.html?raw";
import "./todo.sass";
class TodoView extends HTMLElement {
  myTodos: Array<Todo> = [];

  addTodo(todo: Todo) {
    this.myTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.myTodos));
  }
  getTodo(name: string) {
    return this.myTodos.find((todo) => todo.name.toLowerCase().includes(name));
  }

  removeTodo(name: string) {
    const todoIndex = this.myTodos.findIndex((todo) =>
      todo.name.toLowerCase().includes(name)
    );
    if (todoIndex === -1) return;
    this.myTodos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(this.myTodos));
  }
  updateTodo(todoName: string, todoTask: string) {
    const todo = this.getTodo(todoName);
    if (!todo) return;
    todo.task = todoTask;
    localStorage.setItem("todos", JSON.stringify(this.myTodos));
  }
  fetchTodos() {
    this.myTodos = JSON.parse(localStorage.getItem("todos") ?? "[]");
  }
  //we want styles to penterate so no shadow dom!
  constructor() {
    super();
    this.innerHTML = html;
    this.fetchTodos();
  }

  get todoListIsVisible() {
    const todoListElement = this.querySelector("#todo-list")!;
    return !todoListElement.classList.contains("invisible");
  }
  get createTodoIsVisible() {
    const createTodoElement = this.querySelector("#create-todo")!;
    return !createTodoElement.classList.contains("invisible");
  }
  set todoListIsVisible(isVisible: boolean) {
    const todoListElement = this.querySelector("#todo-list")!;
    if (isVisible) {
      todoListElement.classList.remove("invisible");
    } else {
      todoListElement.classList.add("invisible");
    }
  }
  set createTodoIsVisible(isVisible: boolean) {
    const createTodoElement = this.querySelector("#create-todo")!;
    if (isVisible) {
      createTodoElement.classList.remove("invisible");
    } else {
      createTodoElement.classList.add("invisible");
    }
  }

  get inputValue() {
    const input: HTMLInputElement = this.querySelector(".input")!;
    return input.value;
  }
  get taskValue() {
    const task: HTMLInputElement = this.querySelector(".taskarea")!;
    return task.value;
  }
  connectedCallback() {
    const todoListElement = this.querySelector("#todo-list")!;
    const createTodoElement = this.querySelector("#create-todo")!;
    const whichTodo = this.getAttribute("show") ?? "todo-list";
    if (whichTodo === "todo-list") {
      this.createTodoIsVisible = false;
      this.todoListIsVisible = true;

      this.myTodos.forEach((todo) => {
        const todoElement = document.createElement("div");
        todoElement.classList.add("result-element");
        todoElement.innerHTML = `
                <h3>${todo.name}</h3>
                <p>${todo.task}</p>
        `;
        todoListElement.appendChild(todoElement);
      });
    } else if (whichTodo === "create-todo") {
      this.todoListIsVisible = false;
      this.createTodoIsVisible = true;

      const button = createTodoElement.querySelector(".button")!;
      button.addEventListener("click", () => {
        const name = this.inputValue;
        const task = this.taskValue;

        if (name === "" || task === "") return;
        this.addTodo({ name, task });
        this.createTodoIsVisible = false;
        this.todoListIsVisible = false;
        const emptyEl = this.querySelector("#empty")!;
        emptyEl.innerHTML = `<h3>Todo created!</h3>`;
      });
    }
  }
}
window.customElements.define("todo-element", TodoView);
