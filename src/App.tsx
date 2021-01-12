import { useState } from "react";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import MessageCompose from "./components/MessageCompose";
import { MessageView } from "./components/MessageView";
import { Message } from "./domain/Message";

const App = () => {
  const [showClock, setShowClock] = useState(true);
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
      {showClock && <Clock />}
      <button onClick={() => setShowClock((prevShowClock) => !prevShowClock)}>
        Uhr {showClock ? "ausschalten" : "anschalten"}
      </button>
    </div>
  );
};

export default App;
