import { React, useState, useEffect } from "react";
import "./NotesContainer.css";
import Note from "./Note"
import CreateNote from "./CreateNote";

function NotesContainer() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveNoteHandler = () => {
    setNotes((prevNotes) => [...prevNotes, { text: inputText }]);
    setInputText("");
  };

  return (
    <div className="notes-container">
      <CreateNote onTextChange={textHandler} onSave={saveNoteHandler} />

      {notes.map((note, index) => (
        <Note key={index} text={note.text} />
      ))}
    </div>
  );
}

export default NotesContainer;
