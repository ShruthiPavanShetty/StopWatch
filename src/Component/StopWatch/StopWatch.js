import React, { useEffect, useState } from "react";
import ControlButtons from "../ControlButtons/ControlButtons";
import Timer from "../Timer/Timer";
import "./StopWatch.css";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalValue = null;
    if (isActive && isPaused === false) {
      intervalValue = setInterval(() => {
        setTime((time) => {
          return time + 10;
        });
      }, 10);
    } else {
      clearInterval(intervalValue);
    }
    return () => {
      clearInterval(intervalValue);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <>
      <div className="watch">
        <Timer time={time} />
        <ControlButtons
          isActive={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handleReset={handleReset}
          handlePauseResume={handlePauseResume}
        />
      </div>
    </>
  );
};

export default StopWatch;
