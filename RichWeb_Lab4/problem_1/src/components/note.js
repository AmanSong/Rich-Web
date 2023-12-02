import React from "react";
import './Note.css'

function Note({ id, text, color, onDelete, onEdit }) {
  return (
    <div className="note-container" style={{ backgroundColor: color }}>
      <span>{text}</span>
      <div className="note-buttons">
        <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
        <button className="edit-button" onClick={() => onEdit(id)}>Edit</button>
      </div>
    </div>
  );
}


export default Note;
