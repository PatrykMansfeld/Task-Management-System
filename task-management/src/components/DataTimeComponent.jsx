import React from "react";

function DataTimeComponent() {
  const currentDate = new Date();
  const currentTime = new Date().getTime();

  let greetingMessage = "";
  if (currentTime < 10) {
    greetingMessage = "Good Morning!";
  } else if (currentTime < 18) {
    greetingMessage = "Good Afternoon!";
  } else {
    greetingMessage = "Good Evening!";
  }

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <div className="data-time-box">
      <h1>{greetingMessage}</h1>
      <h1>{formattedDate}/{formattedTime}</h1>
    </div>
  );
}

export default DataTimeComponent;
