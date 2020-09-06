import './Game.css';
import React, { useState } from 'react';
import Icon from './Icon';
import Result from './Result';

const items = [
  {
    alt: 'paper',
    src: 'images/icon-paper.svg',
  },
  {
    alt: 'scissors',
    src: 'images/icon-scissors.svg',
  },
  {
    alt: 'rock',
    src: 'images/icon-rock.svg',
  },
];

const Game = ({ score, setScore }) => {
  const [state, setState] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const [computerSelected, setComputerSelected] = useState(null);
  const random = Math.floor(Math.random() * items.length);

  const onClick = (e, value) => {
    setTimeout(() => {
      setState(value);
    }, 1000);
    setUserSelected({ src: e.target.src, alt: e.target.alt });
    setComputerSelected(items[random]);
  };

  return (
    <div className="GAME__result">
      {state ? (
        <Result
          state={state}
          setState={setState}
          userSelected={userSelected}
          computerSelected={computerSelected}
          score={score}
          setScore={setScore}
        />
      ) : (
        <div className="GAME">
          <div className="GAME__images">
            <img
              src="images/bg-triangle.svg"
              alt="Triangle"
              className="GAME__triangle"
            />
            {items.map((icon) => {
              return (
                <Icon
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  onClick={onClick}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
