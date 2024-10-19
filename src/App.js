import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={9}
          value={step}
          onChange={(e) => setStep(e.target.value)}
        ></input>
        <p>{step}</p>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - +step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        ></input>
        <button onClick={() => setCount((c) => c + +step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>

        <span>{date.toDateString()}</span>

        <div>
          <button
            onClick={() => {
              setStep(0);
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
        {console.log(date)}
      </p>
    </div>
  );
}
