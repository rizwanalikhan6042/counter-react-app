import React,{useState} from "react";
import './App.css';

function App(){
  const [count,setCount]=useState(0);
  const min=0;
  const handleIncrement=()=>{
    setCount(count+1);
  }

  const handleDecrement=()=>{
  if(count>min) setCount(count-1);
  }

  const handleReset=()=>{
   setCount(0)
  }




return (
  <div>
    <h1>Perfect Counter</h1>
    <p className="label">Counter:</p>
    <h2>{count}</h2>
    <button onClick={handleIncrement}>➕ Increment</button>
    <button onClick={handleDecrement}>➖ Decrement</button>
    <button onClick={handleReset}>🔄 Reset</button>
    </div>
)
}

export default App;