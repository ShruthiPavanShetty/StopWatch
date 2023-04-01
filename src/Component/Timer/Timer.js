import React from "react";
import "./Timer.css";

const Timer = (props) => {
  //one second is equal to 1000 millisecond.
  //one minute is equal to 60000 millisecond.
  // 1 day = 24 hours, 1 hour = 60 minutes, 1 minute = 60 seconds.

  return (
    <>
      <div className="timer">
        {/* Hour */}
        <span>{("0" + Math.floor((props.time / 600000) % 24)).slice(-2)}:</span>
        {/* Minute */}
        <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
        {/* Second */}
        <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
        {/* Millisecond */}
        <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
      </div>
    </>
  );
};

export default Timer;
