import React, { useState } from 'react';

const Icon = ({ src, alt, onClick, state, computerSelected, renderResult }) => {
  const [clicked, setClicked] = useState(false);
  const blink = clicked ? 'blink-1' : '';
  const computerChoice = computerSelected ? 'rotate-in-diag-1' : '';
  const winner = renderResult ? 'white-shadow' : '';

  const handleClick = (e) => {
    if (!state) {
      onClick(e, true);
      setClicked(true);
    }
  };

  return (
    <div
      className={
        state
          ? `icon icon-${alt} selected ${computerChoice}`
          : `icon icon-${alt} ${blink}`
      }
    >
      <img
        className={`${winner}`}
        src={src}
        alt={alt}
        onClick={(e) => handleClick(e)}
        style={state ? { cursor: 'default' } : { cursor: 'pointer' }}
      />
    </div>
  );
};

export default Icon;
