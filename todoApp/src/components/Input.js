import { useDispatch, useSelector } from "react-redux";
import { handleAddTodo, handleValue } from "./store/action";
function AddTodo() {
  const dispatch = useDispatch();
  let value = useSelector((state) => state.addTodo);
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(handleAddTodo(value));
      }}
      className="mt-16 flex"
    >
      <input
        type="text"
        class="input"
        onKeyPress={(event) => {
          dispatch(handleValue(event.target.value));
        }}
        className="border p-2 block w-4/5 rounded"
        placeholder="add todo"
      />
      <button type="submit" className="ml-2 border p-2 block w-1/5 ">
        add todo
      </button>
    </form>
  );
}

export default AddTodo;
