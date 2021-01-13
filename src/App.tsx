import Counter from "./components/Counter";
import MessageScene from "./components/MessageScene";
import ClockScene from "./components/ClockScene";

const App = () => {
  return (
    <div>
      <MessageScene />
      Hello World
      <hr />
      <ClockScene />
      <Counter />
    </div>
  );
};

export default App;
