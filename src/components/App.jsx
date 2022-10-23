import { useState } from "react";
import "../styles.css";

export default function App() {
  let time = new Date().toLocaleTimeString();

  const [title, currentHour] = useState("TIME");

  function localHour() {
    currentHour(time);
  }
  return (
    <div className="container">
      <h1>{title}</h1>
      <button onClick={localHour}>Get Time</button>
    </div>
  );
}
