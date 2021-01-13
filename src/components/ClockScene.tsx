import { useState } from "react";
import Clock from "./Clock";
import MessageCompose from "./MessageCompose";
import MessageList from "./MessageList";

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
