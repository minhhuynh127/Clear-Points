import React, { memo, useCallback, useRef, useState } from "react";

// function getRandomPosition(maxWidth, maxHeight) {
//   const x = Math.floor(Math.random() * maxWidth);
//   const y = Math.floor(Math.random() * maxHeight);
//   return { x, y };
// }
const Board = memo(({ points }) => {
  const numbers = Array.from({ length: points }, (_, i) => i + 1);
  const boardWidth = 1270; // Chiều rộng của board
  const boardHeight = 500; // Chiều cao của board
  const getRandomPosition = useCallback(() => {
    const x = Math.floor(Math.random() * boardWidth);
    const y = Math.floor(Math.random() * boardHeight);
    return { x, y };
  }, [points]);
  const [currentNumber, setCurrentNumber] = useState(1);
  // Hàm xử lý khi một ô được click
  const refs = useRef([]);
  const handleClick = (number, index) => {
    // Đổi nền ô click và ẩn đi
    refs.current[index].style.backgroundColor = "red";
    refs.current[index].style.transition = "all 0.4s";
    setTimeout(() => {
      refs.current[index].style.opacity = "0";
    }, 2000);

    // Check Thắng thua
    if (number === currentNumber) {
      setCurrentNumber(currentNumber + 1);
      if (currentNumber === points) {
        // Thắng
      }
    } else {
      // Thua
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
      {numbers.length > 0 ? (
        numbers?.map((number, index) => {
          const { x, y } = getRandomPosition(boardWidth, boardHeight);
          return (
            <button
              ref={(el) => (refs.current[index] = el)}
              className="number-box"
              key={number}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                backgroundColor: "#ccc",
              }}
              onClick={() => handleClick(number, index)}
            >
              {number}
            </button>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
});

export default Board;
