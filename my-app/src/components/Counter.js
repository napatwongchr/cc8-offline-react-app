import { useEffect } from "react";

function Counter(props) {
  useEffect(() => {
    console.log("Test effect");
  });

  useEffect(() => {
    console.log("Effect is running");

    return () => {
      // cleanup function
      console.log("clean up !");
    };
  }, [props.counter]);

  return (
    <div>
      <h1>{props.counter}</h1>
      <button
        onClick={() => {
          props.setCounter(props.counter + 1);
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          props.setCounter(props.counter - 1);
        }}
      >
        subtract
      </button>
      <button
        onClick={() => {
          props.setCounter(0);
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;
