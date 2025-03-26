import { useState } from "react";
import classes from "./Counter.module.scss";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={classes.container}>
      <h1>your value is {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
}
