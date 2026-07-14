import { useState, useEffect } from "react";
const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;
  const weekday = time.toLocaleDateString("en-US", { weekday: "long" });
  const date = time.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className="login-clock">
      <div className="login-clock-time">
        {h12}:{minutes} <span className="login-clock-ampm">{ampm}</span>
      </div>
      <div className="login-clock-date">
        {weekday}, {date}
      </div>
    </div>
  );
};
export default Clock;
