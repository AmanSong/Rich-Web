document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");

  // Create an observable for the button click event
  const addButtonClick$ = rxjs.fromEvent(addButton, "click");

  // Subscribe to the observable and perform actions when the button is clicked
  addButtonClick$.subscribe(() => {

    // Get the values from the input and select elements
    const selectedColor = document.querySelector(".select").value;
    const noteText = document.getElementById("note").value;

    // Create a new note element
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.style.backgroundColor = selectedColor;
    noteElement.textContent = noteText;

    const noteEdit = document.createElement("button");
    noteEdit.classList.add("edit-button");
    noteEdit.textContent = "Edit Note";

    const noteDelete = document.createElement("button");
    noteDelete.classList.add("delete-button");
    noteDelete.textContent = "Delete Note";


    const notesContainer = document.getElementById("notes-container");
    notesContainer.appendChild(noteElement);
    notesContainer.appendChild(noteEdit);
    notesContainer.appendChild(noteDelete);

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


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("add-button").addEventListener("click", function() {
//         const selectedColor = document.querySelector(".select").value;
//         const noteText = document.getElementById("note").value;

//         const noteElement = document.createElement("div");
//         noteElement.classList.add("note");
//         noteElement.style.backgroundColor = selectedColor;
//         noteElement.textContent = noteText;

//         const noteEdit = document.createElement("button");
//         noteEdit.classList.add("edit-button");
//         noteEdit.textContent = "Edit Note";

//         const noteDelete = document.createElement("button");
//         noteDelete.classList.add("delete-button");
//         noteDelete.textContent = "Delete Note";

//         // Add an event listener to the "Edit Note" button
//         noteEdit.addEventListener("click", function() {
//             // Toggle edit mode for the note
//             if (noteElement.contentEditable === "true") {
//                 noteElement.contentEditable = "false";
//                 noteEdit.textContent = "Edit Note";
//             } else {
//                 noteElement.contentEditable = "true";
//                 noteEdit.textContent = "Save Changes";
//             }
//         });

//         noteDelete.addEventListener("click", function() {
//             noteElement.remove();
//             noteEdit.remove();
//             noteDelete.remove();
//         });

//         const notesContainer = document.getElementById("notes-container");
//         notesContainer.appendChild(noteElement);
//         notesContainer.appendChild(noteEdit);
//         notesContainer.appendChild(noteDelete);

//         document.getElementById("note").value = "";
//     });
// });
