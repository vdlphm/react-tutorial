import React, { useState } from 'react';

function Square({ player, onSquareClick }) {

  return <button className="square" onClick={onSquareClick}>{player}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setPlayer] = useState(true);
  const winner = calculateWinner(squares);

  let gameStatus;
  if (winner) {
    gameStatus = "Winner: " + winner;
  } else {
    gameStatus = "Next player: " + (isX ? "X" : "O");
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    setSquares(nextSquares);
    if (isX) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setPlayer(!isX);
  }

  return (
      <React.Fragment>
        <div className="status">{gameStatus}</div>
        <div className="board-row">
          <Square player={squares[0]} onSquareClick={() => handleClick(0)}></Square>
          <Square player={squares[1]} onSquareClick={() => handleClick(1)}></Square>
          <Square player={squares[2]} onSquareClick={() => handleClick(2)}></Square>
        </div>
        <div className="board-row">
          <Square player={squares[3]} onSquareClick={() => handleClick(3)}></Square>
          <Square player={squares[4]} onSquareClick={() => handleClick(4)}></Square>
          <Square player={squares[5]} onSquareClick={() => handleClick(5)}></Square>
        </div>
        <div className="board-row">
          <Square player={squares[6]} onSquareClick={() => handleClick(6)}></Square>
          <Square player={squares[7]} onSquareClick={() => handleClick(7)}></Square>
          <Square player={squares[8]} onSquareClick={() => handleClick(8)}></Square>
        </div>
      </React.Fragment>
  )
}
