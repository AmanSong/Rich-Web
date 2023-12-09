import React, { useState } from "react";
import './CreateNote.css'

function CreateNote({ onTextChange, onSave, onColorChange }) {
    const [selectedColor, setSelectedColor] = useState('#3498db');
    const [text, setText] = useState('');

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setSelectedColor(newColor);
        onColorChange(newColor);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
        onTextChange(e);
    };

    const handleSave = () => {
        onSave();
        resetTextArea();
    };

    const resetTextArea = () => {
        setText('');
    };

    return (
        <div className="create-note">
            <textarea
                cols="10"
                rows="5"
                placeholder="Type...."
                maxLength="100"
                value={text}
                onChange={handleTextChange}
            ></textarea>
            <select value={selectedColor} onChange={handleColorChange}>
                <option value="#3498db">Blue</option>
                <option value="#27ae60">Green</option>
                <option value="#e74c3c">Red</option>
            </select>
            <button
                className="note-save"
                style={{ backgroundColor: selectedColor }}
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    );
}

export default CreateNote;