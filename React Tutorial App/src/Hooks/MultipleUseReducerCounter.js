import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "incrementSecond":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementSecond":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
  }
};

function MultipleUseReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Counter1-{count.firstCounter}</h1>
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 1 });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <h1>Counter2-{count2.secondCounter}</h1>
        <button
          onClick={() => {
            dispatch2({ type: "incrementSecond", value: 10 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch2({ type: "decrementSecond", value: 10 });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch2({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default MultipleUseReducerCounter;
