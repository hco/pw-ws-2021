import Counter from "./components/Counter";
import MessageScene from "./components/MessageScene/MessageScene";
import ClockScene from "./components/ClockScene/ClockScene";
import configureStore from "./configureStore";

const store = configureStore();

// @ts-expect-error yolo2
window.store = store;

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
