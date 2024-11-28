import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(10);

  const increaseBy = (value: number) => {
    //setCount(count + value);
    setCount(Math.max(value + count, 0));
  };

  return {
    //properties
    count,

    //Actions
    increaseBy,
  };
};
