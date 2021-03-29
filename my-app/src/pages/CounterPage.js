import { useState } from "react";
import { useHistory } from "react-router-dom";

import Counter from "../components/Counter";
import { useCounter } from "../contexts/Counter";

function CounterPage() {
  const [toggle, setToggle] = useState(true);
  const { state, dispatch } = useCounter();
  const history = useHistory();

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
      <button onClick={() => history.push("/")}>Back To Home</button>
    </div>
  );
}

export default CounterPage;
