import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + +userInput);
  };
  return (
    <div style={{ display: 'grid', gap: '10px', placeItems: 'center' }}>
      <h2>Welcome to my count app</h2>
      <h1>{count}</h1>
      <div style={{ fontSize: '36px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onDoubleClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Enter a number</label>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default App;
