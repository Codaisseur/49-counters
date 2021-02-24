import axios from "axios";
import { useEffect, useState } from "react";
import "./Counter.scss";

export default function Counter({
  name,
  description,
  currentCount,
  incrementCount,
}) {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);
    }
    fetchData();
  }, []);

  return (
    <div className="Counter">
      <h3>{name}</h3>
      <h4>{description}</h4>
      <p>Current count: {currentCount}</p>
      <button onClick={incrementCount}>Increment</button>
      <p>{advice}</p>
    </div>
  );
}
