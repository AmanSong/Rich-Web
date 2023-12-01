import { React, useState, useEffect } from "react";
import "./NotesContainer.css";
import Note from "./Note"
import CreateNote from "./CreateNote";

function NotesContainer() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#3498db"); // Default color

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveNoteHandler = () => {
    setNotes((prevNotes) => [...prevNotes, { text: inputText, color: selectedColor }]);
    setInputText("");
  };

  const colorChangeHandler = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="notes-container">
      <CreateNote
        onTextChange={textHandler}
        onSave={saveNoteHandler}
        onColorChange={colorChangeHandler}
      />

      {notes.map((note, index) => (
        <Note key={index} text={note.text} color={note.color} />
      ))}
    </div>
  );
}

export default NotesContainer;

