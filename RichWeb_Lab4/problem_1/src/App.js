import './App.css';
import React, { useState } from 'react';

import NotesContainer from './components/NotesContainer'
import Weather from './components/Weather';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <div className="main">
          <h1>React Notes App</h1>

          <div>
            <Weather></Weather>
          </div>

          <div className='note-section'>
            <NotesContainer></NotesContainer>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
