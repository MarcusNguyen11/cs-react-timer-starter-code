import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, startButton } = useTimer(0);

  return (
    <div className="App container">
      <h1 className="title">Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            <img
              className="button-img"
              src="assets/stop-button.svg"
              alt=""
              width={40}
            />
          </button>
          <button className="button" ref={startButton} onClick={startTimer}>
            <img
              className="button-img"
              src="assets/play-button.svg"
              alt=""
              width={40}
            />
          </button>
          <button className="button" onClick={resetTimer}>
            <img
              className="button-img"
              src="assets/reset-button.svg"
              alt=""
              width={40}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
