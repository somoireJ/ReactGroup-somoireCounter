import './App.css';
import data from "./data.json"
import DisplayData from './components/DisplayData';
import Counter from './components/Counter';
import { useEffect, useState } from 'react';
function App() {
  const Counter = () => {
    const [counter, setCounter] = useState(0);
  
    const incrementCounter = () => {
      setCounter(counter + 1);
    };
  
    const decrementCounter = () => {
      setCounter(counter - 1);
    };
  
    const colorStyle = counter >= 5 ? 'red' : '#FFF';
  
    return (
      <div>
        <div
          style={{
            width: '10rem',
            height: '10rem',
            backgroundColor: colorStyle,
          }}
        ></div>
        <div>
          <button onClick={incrementCounter}>+</button>
          <span>{counter}</span>
          <button onClick={decrementCounter}>-</button>
        </div>
      </div>
    );
  };
}

export default App;
