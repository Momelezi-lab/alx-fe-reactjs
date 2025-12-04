import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ padding: '10px 15px', cursor: 'pointer' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          style={{ padding: '10px 15px', cursor: 'pointer' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)} 
          style={{ padding: '10px 15px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
