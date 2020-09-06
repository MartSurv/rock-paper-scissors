import './App.css';
import './Animations.css';
import React, { useState } from 'react';
import Header from './Header';
import Game from './Game';

const App = () => {
  const [score, setScore] = useState(0);
  return (
    <div className="CONTENT">
      <Header score={score} setScore={setScore} />
      <Game score={score} setScore={setScore} />
    </div>
  );
};

export default App;
