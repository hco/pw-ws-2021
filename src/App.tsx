import Counter from "./components/Counter";
import MessageCompose from "./components/MessageCompose";
import { MessageView } from "./components/MessageView";
import { Message } from "./domain/Message";

const App = () => {
  const message: Message = {
    author: "Fabian",
    message: "hallo!",
    date: 4711,
    id: "gürzenich",
  };

  return (
    <div>
      Hello World
      <MessageView message={message} />
      <MessageCompose />
      <Counter />
    </div>
  );
};

export default App;
