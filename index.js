const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const counter = document.querySelector("h1");
const reset = document.querySelector(".reset");
const steps = document.querySelector(".steps");
const max = document.querySelector(".max");

const initialValue = { count: 0, steps: 1, max: Infinity };

function reducer(preState = initialValue, action) {
  switch (action.type) {
    case "increment":
      if (preState.count + preState.steps <= preState.max) {
        return { ...preState, count: preState.count + preState.steps };
      } else {
        return { ...preState };
      }
    case "decrement":
      return { ...preState, count: preState.count - preState.steps };
    case "reset":
      return { ...preState, count: 0 };
    case "changeStep":
      return { ...preState, steps: action.value };
    case "changeMax":
      return { ...preState, max: action.value };
    default:
      return preState;
  }
}

function activeClass(activeElem, parentElm) {
  const parentElmArr = Array.from(parentElm.children);
  parentElmArr.forEach((e) => e.classList.remove("active"));
  if (activeElem.localName === "button") {
    activeElem.classList.add("active");
  }
}

const store = Redux.createStore(reducer);

const incAction = {
  type: "increment",
};

const decAction = {
  type: "decrement",
};

const resAction = {
  type: "reset",
};

const chnageStep = (value) => {
  return { type: "changeStep", value: value };
};

const chnageMax = (value) => {
  return { type: "changeMax", value: value };
};

increment.addEventListener("click", () => {
  store.dispatch(incAction);
});

decrement.addEventListener("click", () => {
  store.dispatch(decAction);
});

reset.addEventListener("click", () => {
  store.dispatch(resAction);
});

steps.addEventListener("click", (event) => {
  store.dispatch(chnageStep(Number(event.target.dataset.value)));
  activeClass(event.target, event.target.parentElement);
});

max.addEventListener("click", (event) => {
  store.dispatch(chnageMax(Number(event.target.dataset.max)));
  activeClass(event.target, event.target.parentElement);
});

store.subscribe(() => {
  const val = store.getState();
  counter.innerText = val.count;
});
