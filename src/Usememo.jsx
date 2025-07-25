import React, { useState, useMemo } from 'react';

function Usememo() {
  const [number, setNumber] = useState(0);
  const [state, setState] = useState(0);

  const squared = useMemo(() => {
    console.log('Calculating square...');
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>Square calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Square: {squared}</p>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <p>{state}</p>
    </div>
  );
}

export default Usememo;
