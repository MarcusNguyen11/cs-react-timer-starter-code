import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const startButton = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    startButton.current.disabled = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    startButton.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    startButton.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, startButton };
};
export default useTimer;
