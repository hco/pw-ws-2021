import { useState } from "react";
import Clock from "./components/Clock";
import MessageCompose from "../MessageScene/components/MessageCompose";
import MessageList from "../MessageScene/components/MessageList";

const ClockScene = () => {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      {showClock && <Clock />}
      <button onClick={() => setShowClock((prevShowClock) => !prevShowClock)}>
        Uhr {showClock ? "ausschalten" : "anschalten"}
      </button>
    </div>
  );
};

export default ClockScene;
