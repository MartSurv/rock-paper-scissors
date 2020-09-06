import './Result.css';
import React from 'react';
import Icon from './Icon';

const Result = ({
  state,
  setState,
  userSelected,
  computerSelected,
  score,
  setScore,
}) => {
  const gameResult = () => {
    if (userSelected.alt === computerSelected.alt) {
      return 'Draw';
    }
    if (userSelected.alt === 'paper' && computerSelected.alt === 'scissors') {
      return 'You lose';
    }
    if (userSelected.alt === 'paper' && computerSelected.alt === 'rock') {
      return 'You win';
    }
    if (userSelected.alt === 'scissors' && computerSelected.alt === 'paper') {
      return 'You win';
    }
    if (userSelected.alt === 'scissors' && computerSelected.alt === 'rock') {
      return 'You lose';
    }
    if (userSelected.alt === 'rock' && computerSelected.alt === 'paper') {
      return 'You lose';
    }
    if (userSelected.alt === 'rock' && computerSelected.alt === 'scissors') {
      return 'You win';
    }
  };

  const renderResult = gameResult();

  const handleState = (value) => {
    setState(value);
    if (gameResult() === 'You lose') {
      setScore(score - 1);
    }
    if (gameResult() === 'You win') {
      setScore(score + 1);
    }
  };

  return (
    <div className="RESULT">
      <div className="RESULT__content">
        <div className="RESULT__placeholder">
          <div className="RESULT__title">
            <p>You picked</p>
          </div>
          <Icon
            src={userSelected.src}
            alt={userSelected.alt}
            state={state}
            renderResult={renderResult === 'You win' ? renderResult : null}
          />
        </div>
        <div className="RESULT__status">
          <div className="tracking-in-expand-fwd">{renderResult}</div>
          <button className="btn" onClick={() => handleState(false)}>
            Play again
          </button>
        </div>
        <div className="RESULT__placeholder computer">
          <div className="RESULT__title">
            <p>house picked</p>
          </div>
          <Icon
            src={computerSelected.src}
            alt={computerSelected.alt}
            state={state}
            computerSelected={computerSelected}
            renderResult={renderResult === 'You lose' ? renderResult : null}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;
