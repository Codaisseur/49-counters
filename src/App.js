import { useState } from "react";
import "./App.scss";
import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = useState([
    {
      id: 1,
      currentCount: 0,
      name: "First counter",
      description: "This is a great counter",
    },
    {
      id: 2,
      currentCount: 0,
      name: "Second counter",
      description: "This is an awesome counter",
    },
    {
      id: 3,
      currentCount: 0,
      name: "Third counter",
      description: "This is an OK-ish counter",
    },
    {
      id: 4,
      currentCount: 0,
      name: "Fourth counter",
      description: "Let's make counters great again.",
    },
  ]);

  const sortedCounters = [...counters].sort((a, b) => {
    return b.currentCount - a.currentCount;
  });

  return (
    <div className="App">
      {sortedCounters.map(counter => (
        <Counter
          key={counter.id}
          name={counter.name}
          currentCount={counter.currentCount}
          incrementCount={() => {
            const newCounters = counters.map(counterWithinOriginalArray => {
              if (counterWithinOriginalArray.id === counter.id) {
                return {
                  ...counterWithinOriginalArray,
                  currentCount: counterWithinOriginalArray.currentCount + 1,
                };
              }
              return counterWithinOriginalArray;
            });

            setCounters(newCounters);
          }}
          description={counter.description}
        />
      ))}
    </div>
  );
}

export default App;
