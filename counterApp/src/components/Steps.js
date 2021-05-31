import { useSelector, useDispatch } from "react-redux";
import { handleSteps } from "./store/action";
function ChooseStep() {
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="my-4">Steps</h1>
      <button
        class="step-5"
        data-value="5"
        className="border  mx-4"
        onClick={() => dispatch(handleSteps(5))}
      >
        5
      </button>
      <button
        class="step-10"
        data-value="10"
        className="border mx-4"
        onClick={() => dispatch(handleSteps(10))}
      >
        10
      </button>
      <button
        class="step-15"
        data-value="15"
        className="border mx-4"
        onClick={() => dispatch(handleSteps(15))}
      >
        15
      </button>
    </>
  );
}

export default ChooseStep;
