import { useCallback, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <button onClick={handleClick}>Increment</button>
      <button
        onClick={() => setCount2(/** wrong! use callback instead */ count2 + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
