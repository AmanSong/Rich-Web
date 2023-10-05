document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add-button").addEventListener("click", function() {
        const selectedColor = document.querySelector(".select").value;
        const noteText = document.getElementById("note").value;

        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.style.backgroundColor = selectedColor;
        noteElement.textContent = noteText;

        const noteEdit = document.createElement("button");
        noteEdit.classList.add("edit-button");
        noteEdit.textContent = "Edit Note";

        const noteDelete = document.createElement("button");
        noteDelete.add("delete-button");
        noteDelete.textContent = "Delete Note";

        // Add an event listener to the "Edit Note" button
        noteEdit.addEventListener("click", function() {
            // Toggle edit mode for the note
            if (noteElement.contentEditable === "true") {
                noteElement.contentEditable = "false";
                noteEdit.textContent = "Edit Note";
            } else {
                noteElement.contentEditable = "true";
                noteEdit.textContent = "Save Changes";
            }
        });

        const notesContainer = document.getElementById("notes-container");
        notesContainer.appendChild(noteElement);
        notesContainer.appendChild(noteEdit)

        document.getElementById("note").value = "";
    });
});
