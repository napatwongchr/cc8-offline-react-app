import React, { useReducer, useContext } from "react";

const CounterContext = React.createContext();

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

function CounterProvider(props) {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const counterContextValue = {
    state,
    dispatch,
  };

  return (
    <CounterContext.Provider value={counterContextValue}>
      {props.children}
    </CounterContext.Provider>
  );
}

function useCounter() {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error("useCounter must use under CounterProvider");
  }

  return context;
}

export { CounterProvider, useCounter };
