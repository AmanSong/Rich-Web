import React from "react";
import './CreateNote.css'

function CreateNote({ onTextChange, onSave }) {
    return (
        <div className="create-note">
            <textarea
                cols="10"
                rows="5"
                placeholder="Type...."
                maxLength="100"
                onChange={onTextChange}
            ></textarea>
            <button className="note-save" onClick={onSave}>
                Save
            </button>
        </div>
    );
}

export default CreateNote;
