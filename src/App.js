import "./styles.css";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
export default function App() {
  return (
    <div className="App">
      <h1>React HOC</h1>
      <Counter />
      <HoverCounter />
    </div>
  );
}
