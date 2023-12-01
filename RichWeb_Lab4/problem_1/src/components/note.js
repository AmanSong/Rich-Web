import React from "react";
import './Note.css'

function Note({ text, color }) {
  console.log(color)
    return (
      <div className="note" style={{backgroundColor:color}}>
        {text}
      </div>
    );
  }
  
  export default Note;
  