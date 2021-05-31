import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import { handleDone, handleDelete } from "./store/action";

function CreateUi() {
  const getTodos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {getTodos.map((todo) => {
          return (
            <li className="flex justify-between mt-2 border p-1">
              <p className={`${todo.isDone && "line-through"}`}>{todo.text}</p>
              <div>
                <button
                  className=" mr-2 font-bold"
                  onClick={() => dispatch(handleDone(todo.id))}
                >
                  done
                </button>
                <button
                  className="font-bold"
                  onClick={() => dispatch(handleDelete(todo.id))}
                >
                  delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CreateUi;
