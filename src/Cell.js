import React, { useRef } from "react";
const Cell = ({ numbers, boardWidth, boardHeight, onClick }) => {
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * boardWidth);
    const y = Math.floor(Math.random() * boardHeight);
    return { x, y };
  };
  const refs = useRef([]);
  const handleClick = (number, index, refs) => {
    // Đổi nền ô click và ẩn đi
    refs.current[index].style.backgroundColor = "red";
    refs.current[index].style.transition = "all 0.4s";
    setTimeout(() => {
      refs.current[index].style.opacity = "0";
    }, 1000);
    onClick(number, index, refs);
  };
  return (
    <>
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
              onClick={() => handleClick(number, index, refs)}
            >
              {number ? number : ""}
            </button>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default Cell;
