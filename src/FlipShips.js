import React, { useState } from 'react';

const FlipShips = () => {
  const [angle, setAngle] = useState(0);

  const flip = () => {
    const ships = document.querySelector('.ships');
    const optionShip = Array.from(ships.children);

    if (angle === 0) {
        setAngle(90);
      } else {
        setAngle(0);
      }

    optionShip.forEach(optionShip =>
      (optionShip.style.transform = `rotate(${angle}deg)`)
    );
  };

  return (
    <>
      <div className="button-container">
          <button className= "flipButton" onClick={flip}>
              Girar Barcos
          </button>
      </div>
      <div className="button-container">
          <button>
              <h2 className="startButton">
                Comenzar
              </h2>
          </button>
      </div>
    </>
  );
};

export default FlipShips;