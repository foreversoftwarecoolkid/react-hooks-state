// Counter.js

import React, { useState } from "react";

function Counter() {
  // Initialize state using the useState hook
  const [count, setCount] = useState(0);

  // Function to increment the count when the button is clicked
  function increment() {
    // Update the value of count in React's internal state to be count + 1
    setCount(count + 1);
  }

  // Render a button with the current count value
  return (
    <button onClick={increment}>
      Click me! Count: {count}
    </button>
  );
}

export default Counter;
