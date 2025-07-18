import React,{useState} from "react";
import './App.css';

function App(){
  const [count,setCount]=useState(0);
  const [step,setStep]=useState(1);
  const min=0;
  const handleIncrement=()=>{
    setCount(count+step);
  }

  const handleDecrement=()=>{
  if(count>=min+step) setCount(count-step);
  else
    setCount(0);
  }

  const handleReset=()=>{
   setCount(0)
  }

  const handleStepChange=(e)=>{
    console.log(e.target.value)
    setStep(Number(e.target.value));
  }




return (
  <div>
    <h1>Perfect Counter</h1>
    <p className="label">Counter:</p>
    <h2>{count}</h2>
    <div className="step-selector">
        <label htmlFor="step">Step: </label>
    <select id="step" onChange={handleStepChange} value={step}>
    <option value={1}>1</option>
    <option value={10}>10</option>
    <option value={30}>30</option>
    <option value={100}>100</option>
    </select></div>
    <button onClick={handleIncrement}>➕ Increment</button>
    <button onClick={handleDecrement}>➖ Decrement</button>
    <button onClick={handleReset}>🔄 Reset</button>
    </div>
)
}

export default App;