import { useEffect, useState } from "react";
import "./App.css";
import Board from "./Board";

function App() {
  const [valueInput, setValueInput] = useState(0);
  const [points, setPoints] = useState(valueInput);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    } else if (!isPlaying && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);
  const handlePlayGame = () => {
    setPoints(valueInput);
    setIsPlaying(true);
  };
  // format time
  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };
  return (
    <div className="wrapper">
      <h1 className="title">Let's Play</h1>
      <div className="point">
        <label htmlFor="">Points: </label>
        <input
          type="text"
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput ?? 0}
        />
      </div>
      <h3 className="timer">Time: {formatTime(time)}</h3>
      {valueInput === 0 ? (
        <button className="play" disabled>
          Play
        </button>
      ) : (
        <button className="play" onClick={handlePlayGame}>
          Play
        </button>
      )}

      <Board points={points} />
    </div>
  );
}

export default App;
