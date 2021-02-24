import "./App.scss";
import Counter from "./components/Counter";

function App() {
  const counters = [
    { name: "First counter", description: "This is a great counter" },
    { name: "Second counter", description: "This is an awesome counter" },
    { name: "Third counter", description: "This is an OK-ish counter" },
    { name: "Fourth counter", description: "Let's make counters great again." },
  ];

  return (
    <div className="App">
      {counters.map(counter => (
        <Counter name={counter.name} description={counter.description} />
      ))}
    </div>
  );
}

export default App;
