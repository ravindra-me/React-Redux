import { useSelector, useDispatch, connect } from "react-redux";
import "../App.css";
import { increment, decrement, reset } from "./store/action";
import ChooseStep from "./Steps";
import ChooseMax from "./Max";
function App() {
  const getCount = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{getCount}</h1>
      <div>
        <button class="increment" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button class="decrement" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button class="reset" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
      <div>
        <ChooseStep />
      </div>
      <div>
        <ChooseMax />
      </div>
    </>
  );
}

export default App;
