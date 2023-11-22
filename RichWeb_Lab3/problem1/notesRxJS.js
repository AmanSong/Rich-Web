document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-button");
    const notesContainer = document.getElementById("notes-container");
  
    // Create a class for Note
    class Note {
      constructor(text, color, parent) {
        this.noteElement = document.createElement("div");
        this.noteElement.classList.add("note");
        this.noteElement.style.backgroundColor = color;
        this.noteElement.textContent = text;
        this.parent = parent;
        this.children = [];
  
        this.noteEdit = document.createElement("button");
        this.noteEdit.classList.add("edit-button");
        this.noteEdit.textContent = "Edit Note";
  
        this.noteDelete = document.createElement("button");
        this.noteDelete.classList.add("delete-button");
        this.noteDelete.textContent = "Delete Note";
  
        notesContainer.appendChild(this.noteElement);
        notesContainer.appendChild(this.noteEdit);
        notesContainer.appendChild(this.noteDelete);
  
        // Add this note to its parent's children array
        if (this.parent) {
          this.parent.children.push(this);
        }
      }
  
      // Function to recursively delete note and its children
      deleteNoteAndChildren() {
        this.children.forEach(child => child.deleteNoteAndChildren());
  
        // Remove from the DOM
        this.noteElement.remove();
        this.noteEdit.remove();
        this.noteDelete.remove();
  
        // Remove this note from its parent's children array
        if (this.parent) {
          const index = this.parent.children.indexOf(this);
          if (index !== -1) {
            this.parent.children.splice(index, 1);
          }
        }
      }
    }
  
    // Initialize parent note as null
    let parentNote = null;
  
    // Create an observable for the button click event
    const addButtonClick$ = rxjs.fromEvent(addButton, "click");
  
    // Subscribe to the observable and perform actions when the button is clicked
    addButtonClick$.subscribe(() => {
      const selectedColor = document.querySelector(".select").value;
      const noteText = document.getElementById("note").value;
  
      // Create a new note and get the note objects
      const currentNote = new Note(noteText, selectedColor, parentNote);
  
      document.getElementById("note").value = "";
  
      // Update parent note for the next creation
      parentNote = currentNote;
  
      // Create observables for "Edit Note" and "Delete Note" button clicks
      const editButtonClick$ = rxjs.fromEvent(currentNote.noteEdit, "click");
      const deleteButtonClick$ = rxjs.fromEvent(currentNote.noteDelete, "click");
  
      // Subscribe to "Edit Note" button clicks
      editButtonClick$.subscribe(() => {
        if (currentNote.noteElement.contentEditable === "true") {
          currentNote.noteElement.contentEditable = "false";
          currentNote.noteEdit.textContent = "Edit Note";
        } else {
          currentNote.noteElement.contentEditable = "true";
          currentNote.noteEdit.textContent = "Save Changes";
        }
      });
  
      // Subscribe to "Delete Note" button clicks
      deleteButtonClick$.subscribe(() => {
        // Delete note and its children
        currentNote.deleteNoteAndChildren();
      });
    });
  });
  