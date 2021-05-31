import { createStore } from "redux";

function reducer(
  state = {
    todos: [{ id: 1234, text: "ravindra", isDone: false }],
    addTodo: "",
  },
  action
) {
  switch (action.type) {
    case "add-todo":
      const newTodo = { id: Date.now(), text: action.value, isDone: false };
      return { ...state, todos: state.todos.concat(newTodo) };
    case "TOGGLE_DONE":
      const newTodos = state.todos.map((e) => {
        if (e.id === action.id) {
          e.isDone = !e.isDone;
          return e;
        }
        return e;
      });
      return { ...state, todos: newTodos };
    case "delete":
      const updateTodos = state.todos.filter((e) => e.id !== action.id);
      return { ...state, todos: updateTodos };
    case "add-value":
      return { ...state, addTodo: action.value };
    default:
      return state;
  }
}

let store = createStore(reducer);
export default store;
