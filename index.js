let input = document.querySelector(".input");
let form = document.querySelector("form");
let todosContainer = document.querySelector(".root-container");

let intialValue = { todos: [{ id: 1234, text: "ravindra", isDone: false }] };

let store = Redux.createStore(reducer);

function reducer(preState = intialValue, action) {
  switch (action.type) {
    case "add-todo":
      const newTodo = { id: Date.now(), text: action.value, isDone: false };
      return { ...preState, todos: preState.todos.concat(newTodo) };
    case "TOGGLE_DONE":
      const newTodos = preState.todos.map((e) => {
        if (e.id === action.id) {
          e.isDone = !e.isDone;
          return e;
        }
        return e;
      });
      return { ...preState, todos: newTodos };
    case "delete":
      const updateTodos = preState.todos.filter((e) => e.id !== action.id);
      return { ...preState, todos: updateTodos };
    default:
      return preState;
  }
}

const addAction = (value) => {
  return { type: "add-todo", value: value };
};

function handleSubmit(event) {
  event.preventDefault();
  if (input.value) {
    store.dispatch(addAction(input.value));
    input.innerText = "";
  }
}

function createUi() {
  todosContainer.innerHTML = "";
  const { todos } = store.getState();
  todos.forEach((todo) => {
    const el = document.createElement("li");
    el.textContent = todo.text;
    if (todo.isDone) el.style.textDecoration = "line-through";
    const btn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";

    deleteBtn.addEventListener("click", () =>
      store.dispatch({ type: "delete", id: todo.id })
    );

    btn.innerText = "Done";
    btn.addEventListener("click", () =>
      store.dispatch({ type: "TOGGLE_DONE", id: todo.id })
    );
    el.append(btn, deleteBtn);
    todosContainer.appendChild(el);
  });
}
form.addEventListener("submit", handleSubmit);

store.subscribe(() => {
  createUi();
});
