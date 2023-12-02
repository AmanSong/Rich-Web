import { React, useState } from "react";
import './Note.css'

function Note({ id, text, color, onDelete, onEdit }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, editedText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedText(text);
    setIsEditing(false);
  };

  return (
    <div className="note-container" style={{ backgroundColor: color }}>
      {isEditing ?
        <>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div className="note-buttons">
            <button className="edit-button" onClick={handleSaveClick}>Save</button>
            <button className="edit-button" onClick={handleCancelClick}>Cancel</button>
          </div>
        </>
        :
        <>
          <span>{text}</span>
          <div className="note-buttons">
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
          </div>
        </>}
    </div>
  );
}


export default Note;
