import { useState } from 'react';

export default function App2() {
  const [counter, setValue] = useState(0);
  const countUp = () => setValue(val => val + 1);

  return (
    <div>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={countUp}>click me</button>
    </div>
  );
}