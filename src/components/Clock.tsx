import { useEffect, useState } from "react";

const Clock: React.FunctionComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("Component was mounted");
    const intervalId = setInterval(() => {
      console.log("Clock tick");
      setDate(new Date());
    }, 700);

    return () => {
      console.log("component will unmount");

      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    document.title = date.toLocaleTimeString();
  }, [date]);

  return <div>{date.toLocaleTimeString()}</div>;
};

export default Clock;
