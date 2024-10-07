// import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export default function HelloWorld({ name }: { name: string }) {
  // const [count, setCount] = useState(1);
  const { count, increment } = useCounter();
  return (
    <div>
      <h1>
        Hello {name} x{count}!
      </h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
