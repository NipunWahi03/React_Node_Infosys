import React, { useReducer } from "react";
const initialState = 0; //Define the Initial State

//Defining the reducer function which will receive the two arguments, one is state and other is action which is used to define how to perform the new state based on the action
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerCounter1() {
  //Using useReducer which will receive two arguments, one is the reducer function and other is the dispatch method
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count Value-{count}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment Counter
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement Counter
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset Counter
      </button>
    </div>
  );
}

export default UseReducerCounter1;
