import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./Input";
import "../App.css";
import CreateUi from "./CreateUI";
function App() {
  return (
    <>
      <div className="container ">
        <AddTodo />
        <CreateUi />
      </div>
    </>
  );
}

export default App;
