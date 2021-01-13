import Counter from "./components/Counter";
import MessageScene from "./components/MessageScene/MessageScene";
import ClockScene from "./components/ClockScene/ClockScene";
import configureStore from "./configureStore";
import { Provider } from "react-redux";

const store = configureStore();

// @ts-expect-error yolo2
window.store = store;

const App = () => {
  return (
    <Provider store={store}>
      <MessageScene />
      Hello World
      <hr />
      <ClockScene />
      <Counter />
    </Provider>
  );
};

export default App;
