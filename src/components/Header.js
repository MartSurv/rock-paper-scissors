import React from 'react';
import Score from './Score';

const Header = ({ score, setScore }) => {
  return (
    <div className="HEADER">
      <div className="HEADER__title">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div>
        <Score score={score} setScore={setScore} />
      </div>
    </div>
  );
};

export default Header;
