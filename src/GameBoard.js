import React, { useEffect, useState } from 'react';
import './styles.css';
import Ship from './Ship';

const GameBoard = ({ user }) => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    createBoard();
  }, [user]); 

  const createBoard = () => {
    const newBoard = [];

    for (let i = 0; i < 100; i++) {
      newBoard.push(<div key={i} className="cell"></div>);
    }

    setBoard(newBoard);
  };

  return (
    <div className="gameBoardContainer">
      <div className="user">
        <h2>{user}</h2>
        <div className="gameBoard" id={user}>
          {board}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;