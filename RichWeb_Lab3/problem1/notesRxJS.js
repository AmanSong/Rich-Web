document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");
  const notesContainer = document.getElementById("notes-container");

  // Function to create a note object
  function createNoteElement(text, color, parent) {
      const noteElement = document.createElement("div");
      noteElement.classList.add("note");
      noteElement.style.backgroundColor = color;
      noteElement.textContent = text;
      noteElement.parent = parent; // Assign the parent note

      const noteEdit = document.createElement("button");
      noteEdit.classList.add("edit-button");
      noteEdit.textContent = "Edit Note";

      const noteDelete = document.createElement("button");
      noteDelete.classList.add("delete-button");
      noteDelete.textContent = "Delete Note";

      notesContainer.appendChild(noteElement);
      notesContainer.appendChild(noteEdit);
      notesContainer.appendChild(noteDelete);

      return { noteElement, noteEdit, noteDelete };
  }

  // Create an observable for the button click event
  const addButtonClick$ = rxjs.fromEvent(addButton, "click");

  // Subscribe to the observable and perform actions when the button is clicked
  addButtonClick$.subscribe(() => {
      const selectedColor = document.querySelector(".select").value;
      const noteText = document.getElementById("note").value;

      // Create a new note and get the note objects
      const { noteElement, noteEdit, noteDelete } = createNoteElement(noteText, selectedColor, null);

      document.getElementById("note").value = "";

      // Create observables for "Edit Note" and "Delete Note" button clicks
      const editButtonClick$ = rxjs.fromEvent(noteEdit, "click");
      const deleteButtonClick$ = rxjs.fromEvent(noteDelete, "click");

      // Subscribe to "Edit Note" button clicks
      editButtonClick$.subscribe(() => {
          if (noteElement.contentEditable === "true") {
              noteElement.contentEditable = "false";
              noteEdit.textContent = "Edit Note";
          } else {
              noteElement.contentEditable = "true";
              noteEdit.textContent = "Save Changes";
          }
      });

      // Subscribe to "Delete Note" button clicks
      deleteButtonClick$.subscribe(() => {
          noteElement.remove();
          noteEdit.remove();
          noteDelete.remove();
      });
  });
});



