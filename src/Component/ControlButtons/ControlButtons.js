import React from "react";
import "./ControlButtons.css";

const ControlButtons = (props) => {
  const StartButton = (
    <>
      <div>
        <button onClick={props.handleStart}>Start</button>
      </div>
    </>
  );
  const ActiveButtons = (
    <>
      <div className="btn-grp ">
        <button onClick={props.handleReset}>Reset</button>
        <button onClick={props.handlePauseResume}>
          {props.isPaused ? "Resume" : "Pause"}
        </button>
      </div>
    </>
  );
  return (
    <>
      <div className="controls">
        {props.isActive ? ActiveButtons : StartButton}
      </div>
    </>
  );
};
export default ControlButtons;
