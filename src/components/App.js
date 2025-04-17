import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [flag, setFlag] = useState(true)
  function handleClick(){
    setFlag(() => !flag)
    console.log(flag)
  }

  return (
    <div className="App" id="main">
      <button id="click" onClick={handleClick}>{flag ? "show" : "hide"}</button>
      <p id="para" className={flag ? "hide" : "show"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App
