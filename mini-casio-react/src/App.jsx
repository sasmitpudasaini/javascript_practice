import { useState } from 'react';
import './App.css';

function App() {
  
  const [display, setDisplay] = useState('0');       
  const [prevValue, setPrevValue] = useState(null);  
  const [operator, setOperator] = useState(null);    
  const [isReadyForNext, setIsReadyForNext] = useState(false);

  const pressNum = (num) => {
    if (display === '0' || isReadyForNext) {
      setDisplay(num.toString());
      setIsReadyForNext(false); 
    } else {
      setDisplay(display + num);
    }
  };


  const pressOperator = (op) => {
    setPrevValue(display);
    setOperator(op);
    setIsReadyForNext(true); 
  };


  const clearScreen = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setIsReadyForNext(false);
  };


  const calculate = () => {
    if (!operator || prevValue === null) return;

    const num1 = Number(prevValue);
    const num2 = Number(display);
    let result = 0;

    switch (operator) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': result = num1 / num2; break;
      default: return;
    }

    setDisplay(result.toString());
    setPrevValue(null);
    setOperator(null);
    setIsReadyForNext(true);
  };

  return (
    <div className="calcbox">
      <h1>CASIO</h1>
      

      <div id="screen">{display}</div>
      

      <div className="buttons-grid">
        <button onClick={clearScreen} className="btn-clear">C</button>
        <button onClick={() => pressOperator('/')}>/</button>
        <button onClick={() => pressOperator('*')}>*</button>
        <button onClick={() => pressOperator('-')}>-</button>
        
        <button onClick={() => pressNum(7)}>7</button>
        <button onClick={() => pressNum(8)}>8</button>
        <button onClick={() => pressNum(9)}>9</button>
        <button onClick={() => pressOperator('+')}>+</button>
        
        <button onClick={() => pressNum(4)}>4</button>
        <button onClick={() => pressNum(5)}>5</button>
        <button onClick={() => pressNum(6)}>6</button>
        <button onClick={calculate} className="btn-equal">=</button>
        
        <button onClick={() => pressNum(1)}>1</button>
        <button onClick={() => pressNum(2)}>2</button>
        <button onClick={() => pressNum(3)}>3</button>
        <button onClick={() => pressNum(0)}>0</button>
      </div>
    </div>
  );
}

export default App;