import React, { useState } from 'react';

import './counter.scss';

export default () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <div>current count:{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};
