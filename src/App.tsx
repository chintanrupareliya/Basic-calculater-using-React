import Button from "./components/Button";
import "./App.css";
import { useState } from "react";
import { evaluate, MathExpression } from "mathjs";
function App() {
  const [result, setResult] = useState("0");
  const hendleclick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget.innerHTML);
    if (result === "0") {
      setResult(e.currentTarget.innerHTML);
    } else {
      setResult(result.concat(e.currentTarget.innerHTML));
    }
  };
  const calculate = () => {
    try {
      const resultValue: MathExpression = evaluate(result) as MathExpression;
      setResult(String(resultValue));
    } catch (error) {
      setResult("Error");
    }
  };
  const clear = () => {
    setResult("0");
  };
  const clearone = () => {
    if (result.length === 1) {
      setResult("0");
    } else {
      setResult(result.substring(0, result.length - 1));
    }
  };
  return (
    <div className="containor">
      <div className="screen">{result}</div>
      <div className="row">
        <Button onclick={clear}>C</Button>
        <Button onclick={clearone}>x</Button>
        <Button onclick={hendleclick}>%</Button>
        <Button onclick={hendleclick}>/</Button>
      </div>
      <div className="row">
        <Button onclick={hendleclick}>7</Button>
        <Button onclick={hendleclick}>8</Button>
        <Button onclick={hendleclick}>9</Button>
        <Button onclick={hendleclick}>*</Button>
      </div>
      <div className="row">
        <Button onclick={hendleclick}>4</Button>
        <Button onclick={hendleclick}>5</Button>
        <Button onclick={hendleclick}>6</Button>
        <Button onclick={hendleclick}>-</Button>
      </div>
      <div className="row">
        <Button onclick={hendleclick}>1</Button>
        <Button onclick={hendleclick}>2</Button>
        <Button onclick={hendleclick}>3</Button>
        <Button onclick={hendleclick}>+</Button>
      </div>

      <div className="row">
        <Button onclick={hendleclick}>0</Button>
        <Button onclick={hendleclick}>0</Button>
        <Button onclick={hendleclick}>.</Button>
        <Button onclick={calculate}>=</Button>
      </div>
    </div>
  );
}

export default App;
