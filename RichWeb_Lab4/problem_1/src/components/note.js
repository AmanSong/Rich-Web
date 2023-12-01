import React from "react";
import './Note.css'

function Note({ text }) {
    return (
      <div className="note">
        {text}
      </div>
    );
  }
  
  export default Note;
  