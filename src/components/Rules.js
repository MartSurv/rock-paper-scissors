import React from 'react';

const Rules = ({ setClicked }) => {
  return (
    <div className="RULES">
      <img
        src="/images/clear.svg"
        alt="Rules of the game"
        onClick={() => setClicked(false)}
      />
      <img src="/images/image-rules.svg" alt="Rules of the game" />
    </div>
  );
};

export default Rules;
