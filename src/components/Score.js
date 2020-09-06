import React from 'react';

const Score = ({ score, setScore }) => {
  return (
    <div className="HEADER__score">
      <h1>Score</h1>
      <p>{score}</p>
      <h1 onClick={() => setScore(0)} style={{ cursor: 'pointer' }}>
        Reset
      </h1>
    </div>
  );
};

export default Score;
