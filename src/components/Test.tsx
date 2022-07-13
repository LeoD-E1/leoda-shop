import { useState, useTransition } from "react";

const TestCount = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount((c) => c + 1);
    });
  }

  return (
    <div>
      {isPending && <p>Loading...</p>}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

export default TestCount;
