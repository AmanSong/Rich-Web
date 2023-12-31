import { React, useState, useEffect } from "react";
import "./NotesContainer.css";
import Note from "./Note"
import CreateNote from "./CreateNote";

function NotesContainer() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#3498db");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveNoteHandler = () => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text: inputText, color: selectedColor }]);
    setInputText("");
  };

  const colorChangeHandler = (color) => {
    setSelectedColor(color);
  };

  const deleteNoteHandler = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const editNoteHandler = (id, newText) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  return (
    <div className="notes-container">
      <CreateNote
        onTextChange={textHandler}
        onSave={saveNoteHandler}
        onColorChange={colorChangeHandler}
      />

      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          color={note.color}
          onDelete={deleteNoteHandler}
          onEdit={editNoteHandler}
        />
      ))}
    </div>
  );
}

export default NotesContainer;

