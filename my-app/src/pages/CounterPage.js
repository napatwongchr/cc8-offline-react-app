import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  addByAmount,
} from "../feature/counter/counterSlice";
import Counter from "../components/Counter";

function CounterPage() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const history = useHistory();

  return (
    <div>
      <h1>Counter page</h1>
      {toggle && (
        <Counter
          counter={counter}
          addCounter={() => dispatch(increment())}
          subtractCounter={() => dispatch(decrement())}
          resetCounter={() => dispatch(reset())}
          addByAmount={() => dispatch(addByAmount(10))}
        />
      )}
      <h1>Show Counter: {counter}</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => history.push("/")}>Back To Home</button>
    </div>
  );
}

export default CounterPage;
