import './App.css';
import React, { useState } from 'react';

import NotesContainer from './components/NotesContainer'

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <div className="main">

          <NotesContainer></NotesContainer>
        </div>
      </header>
    </div>
  );
}

export default App;
