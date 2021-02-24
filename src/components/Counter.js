import { useState } from "react";
import "./Counter.scss";

export default function Counter({ name, description }) {
  const [currentCount, setCurrentCount] = useState(0);
  return (
    <div className="Counter">
      <h3>{name}</h3>
      <h4>{description}</h4>
      <p>Current count: {currentCount}</p>
      <button
        onClick={() => {
          setCurrentCount(currentCount + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
