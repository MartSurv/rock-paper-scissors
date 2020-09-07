import React from 'react';

const RulesBtn = ({ clicked, setClicked }) => {
  return (
    <div className="btn--rules" onClick={() => setClicked(!clicked)}>
      <h1>Rules</h1>
    </div>
  );
};

export default RulesBtn;
