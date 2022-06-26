import React, { useState } from "react";

function Counter2() {
  const initCount = 0;
  const [count, setCount] = useState(initCount);
  return (
    <div>
      <h1>Count-{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(initCount)}>Reset</button>
      <button
        onClick={() => {
          setCount(count + 5);
        }}
      >
        Increment5
      </button>
    </div>
  );
}

export default Counter2;
