const handleDelete = (id) => {
  return { type: "delete", id: id };
};

const handleDone = (id) => {
  return { type: "TOGGLE_DONE", id: id };
};

const handleAddTodo = (value) => {
  return {
    type: "add-todo",
    value: value,
  };
};

const handleValue = (value) => {
  return { type: "add-value", value: value };
};

export { handleDelete, handleDone, handleAddTodo, handleValue };
