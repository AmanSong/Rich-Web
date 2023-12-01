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
    console.log('Input submitted:', inputValue);
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
                <option value="">Select an item</option>
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
              </select>
              {/* Button to submit the form */}
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="notes-container">

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
