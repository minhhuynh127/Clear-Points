import React, { memo, useCallback } from "react";
import Cell from "./Cell";

// function getRandomPosition(maxWidth, maxHeight) {
//   const x = Math.floor(Math.random() * maxWidth);
//   const y = Math.floor(Math.random() * maxHeight);
//   return { x, y };
// }
const Board = memo(({ points, setTime, setIsPlaying }) => {
  const numbers = Array.from({ length: points }, (_, i) => i + 1);
  const boardWidth = 1270; // Chiều rộng của board
  const boardHeight = 500; // Chiều cao của board
  // const [currentNumber, setCurrentNumber] = useState(1);
  // Hàm xử lý khi một ô được click
  let currentNumber = 1;
  const handleClick = (number, index, refs) => {
    if (number === currentNumber) {
      currentNumber += 1;
      if (currentNumber > points) {
        setIsPlaying(false);
        alert("You have complete the game ");
      }
    } else {
      setIsPlaying(false);
      alert("Failed! You clicked the wrong number ");
    }
  };
  return (
    <div
      style={{
        width: `${boardWidth}px`,
        height: `${boardHeight}px`,
        border: "1px solid black",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Cell
        numbers={numbers}
        boardWidth={boardWidth}
        boardHeight={boardHeight}
        onClick={handleClick}
      ></Cell>
      ;
    </div>
  );
});

export default Board;
