import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input submitted:', inputValue, selectedValue);
    setInputValue('');
  };

  return (

    <div className="App">
      <header className="App-header">
        <div className="main">

          <div className="note">
            <form onSubmit={handleSubmit}>
              <textarea
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Your note..."
              />
            </form>
          </div>

          <div className="color">
            <form onSubmit={handleSubmit}>
              <select
                value={selectedValue}
                onChange={handleDropdownChange}
              >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </form>
          </div>

          <div className='button-container'>
            <button className='button' onClick={handleSubmit}>Create Note</button>
          </div>

          <div className="notes-container">

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
