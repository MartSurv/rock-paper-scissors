import React, { useState } from 'react';
import Header from './Header';
import Game from './Game';
import Loader from 'react-loaders';
import Rules from './Rules';
import RulesBtn from './RulesBtn';

const App = () => {
  const [score, setScore] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const resetHeight = () => {
    document.body.style.height = `${window.innerHeight}px`;
  };
  resetHeight();
  window.addEventListener('resize', resetHeight);

  return (
    <div className="CONTENT">
      <Header score={score} setScore={setScore} />
      <Loader type="ball-pulse" active={!loaded} />
      <Game
        score={score}
        setScore={setScore}
        loaded={loaded}
        setLoaded={setLoaded}
      />
      {clicked ? <Rules setClicked={setClicked} /> : null}
      <RulesBtn clicked={clicked} setClicked={setClicked} />
    </div>
  );
};

export default App;
