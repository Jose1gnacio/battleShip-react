import './styles.css';
import GameBoard from './GameBoard';
import Ship from './Ship';
import FlipShips from './FlipShips';

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>
          <strong>¡BATTLESHIP!</strong>
        </h1>
      </div>
      <div className="table">
        <div className="options">
          <h2 className="optionTitle">Barcos</h2>
          <div className="">
            <div className="ships">
              <Ship type="battleShip" size="4"/>
              <Ship type="submarine" size="3" />
              <Ship type="destroyer" size= "2" />
            </div>
            <div className="optionShip">
              <h4>BattleShip</h4>
              <h4>Submarine</h4>
              <h4>Destroyer</h4>              
            </div>
            <div className="optionShip">
              <h4>Tamaño: 4</h4>
              <h4>Tamaño: 3</h4>
              <h4>Tamaño: 2</h4>              
            </div>

            
          </div>
          
          <div className="buttons">
            <FlipShips/>              
          </div>          
        </div>
        <div className="gameBoardContainer">
          <GameBoard user="Player" />
          <GameBoard user="Computer" />                    
        </div> 
      </div>
    </div>
  );
}

export default App;
