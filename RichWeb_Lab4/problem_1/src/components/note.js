import React from "react";
import './Note.css'

function Note({ id, text, color, onDelete, onEdit }) {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onEdit(id)}>Edit</button>
    </div>
  );
}

export default Note;
