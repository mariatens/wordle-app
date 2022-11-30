import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { markWordleGuess } from './markGuess';

function App() {
  const [] = useState()
// interactivity
// css

  return (
        <p>
          {markWordleGuess('HELLO','HELLO')}
        </p>
  );
}

export default App;
