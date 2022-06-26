import React, { useReducer } from "react";
const initialState = {
  firstcounter: 0,
}; //Define the Initial State

//Defining the reducer function which will receive the two arguments, one is state and other is action which is used to define how to perform the new state based on the action
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstcounter: state.firstcounter + 1 };
    case "decrement":
      return { ...state, firstcounter: state.firstcounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ComplexUseReducerCounter() {
  //Using useReducer which will receive two arguments, one is the reducer function and other is the dispatch method
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count Value-{count.firstcounter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment Counter
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement Counter
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset Counter
      </button>
    </div>
  );
}

export default ComplexUseReducerCounter;
