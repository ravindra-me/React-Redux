import { useSelector, useDispatch } from "react-redux";
import { handleMax } from "./store/action";
function ChooseMax() {
  const dispatch = useDispatch();
  const getMax = useSelector((state) => state.max);
  return (
    <>
      <h1 className="my-4">Max</h1>
      <button
        className={`border  mx-4 ${getMax === 15 ? "active" : ""}`}
        onClick={() => dispatch(handleMax(15))}
      >
        15
      </button>
      <button
        className={`border  mx-4 ${getMax === 100 ? "active" : ""}`}
        onClick={() => dispatch(handleMax(100))}
      >
        100
      </button>
      <button
        className={`border  mx-4 ${getMax === 200 ? "active" : ""}`}
        onClick={() => dispatch(handleMax(200))}
      >
        200
      </button>
    </>
  );
}

export default ChooseMax;
