const increment = () => {
  return {
    type: "increment",
  };
};

const decrement = () => {
  return {
    type: "decrement",
  };
};

const reset = () => {
  return {
    type: "reset",
  };
};

const handleSteps = (value) => {
  return {
    type: "changeStep",
    value: value,
  };
};

const handleMax = (value) => {
  return {
    type: "changeMax",
    value: value,
  };
};
export { increment, decrement, reset, handleMax, handleSteps };
