import { useState } from "react";
import Counter from "../components/Counter";
import ExtraCounter from "../components/ExtraCounter";

function CounterPage() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <h1>Counter page</h1>
      {toggle && <Counter counter={counter} setCounter={setCounter} />}
      <h1>Show Counter: {counter}</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default CounterPage;
