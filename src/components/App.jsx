import { useState } from "react";
import "../styles.css";

export default function App() {
  const [time, setTime] = useState("TIME");

  function updateTime() {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}
