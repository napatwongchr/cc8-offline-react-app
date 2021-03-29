import { useState, useReducer } from "react";
import Counter from "../components/Counter";

const INITIAL_STATE = {
  counter: 0,
};

function counterReducer(state, action) {
  switch (action.type) {
    case "add_counter":
      return { counter: state.counter + 1 };
    case "subtract_counter":
      return { counter: state.counter - 1 };
    case "reset_counter":
      return { counter: 0 };
    default:
      return state;
  }
}

function CounterPage() {
  const [toggle, setToggle] = useState(true);
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  return (
    <div>
      <h1>Counter page</h1>
      {toggle && (
        <Counter
          counter={state.counter}
          addCounter={() => dispatch({ type: "add_counter" })}
          subtractCounter={() => dispatch({ type: "subtract_counter" })}
          resetCounter={() => dispatch({ type: "reset_counter" })}
        />
      )}
      <h1>Show Counter: {state.counter}</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default CounterPage;
