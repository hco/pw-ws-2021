import {useState} from "react";

const MessageCompose: React.FunctionComponent = () => {
  const [messageText, setMessageText] = useState("")
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("message", messageText);
    setMessageText("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={messageText} onChange={(event) => setMessageText(event.target.value)} />
      <button type="submit">Absenden</button>
    </form>
  );
};

export default MessageCompose;
