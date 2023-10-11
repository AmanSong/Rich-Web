document.addEventListener("DOMContentLoaded", function() {

    // for adding contacts
    document.getElementById("add-contact").addEventListener("click", function(e) {
        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;
        const contactForm = document.getElementById("contact-form");

        const namePattern = /^[a-zA-Z\s]+$/;

        if (contactForm.checkValidity() && namePattern.test(name)) {
            // Get the table
            const table = document.querySelector("#table");

            // Create a new row
            const Row = table.insertRow(1)

            // Create cells for the new row
            const nameCell = Row.insertCell(0);
            const mobileCell = Row.insertCell(1);
            const emailCell = Row.insertCell(2);

            // Set the cell content to the input values
            nameCell.textContent = name;
            mobileCell.textContent = mobile;
            emailCell.textContent = email;

            // Apply CSS classes to the new row and cells
            Row.classList.add("row");
            nameCell.classList.add("table-item");
            mobileCell.classList.add("table-item");
            emailCell.classList.add("table-item");
    
            // Clear the form values
            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("email").value = "";
        }
        else {
            e.preventDefault()
            const error = document.getElementById("error");

            error.style.display = "block";

            setTimeout(function() {
                error.style.display = "none";
            }, 1000);
        }
    });
});

function enforceMaxLength(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}
