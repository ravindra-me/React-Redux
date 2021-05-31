import { createStore } from "redux";

function reducer(
  state = {
    count: 0,
    step: 5,
    max: Infinity,
  },
  action
) {
  switch (action.type) {
    case "increment":
      if (state.step + state.count <= state.max) {
        return { ...state, count: state.count + state.step };
      } else {
        return { ...state };
      }

    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return { ...state, count: 0 };
    case "changeStep":
      return { ...state, step: action.value };
    case "changeMax":
      return { ...state, max: action.value };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
