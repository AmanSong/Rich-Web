document.addEventListener("DOMContentLoaded", function() {

    // for adding contacts
    document.getElementById("add-contact").addEventListener("click", function(e) {
        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;
        const contactForm = document.getElementById("contact-form");

        const namePattern = /^[a-zA-Z\s]+$/;

        if (contactForm.checkValidity() && namePattern.test(name)) {
            const table_name = document.querySelector("#table-name");
            const table_mobile = document.querySelector("#table-mobile");
            const table_email = document.querySelector("#table-email");

            const newRow1 = document.createElement("div");
            newRow1.className = "table-row";
            const newRow2 = document.createElement("div");
            newRow2.className = "table-row";
            const newRow3 = document.createElement("div");
            newRow3.className = "table-row";
    
            const nameDiv = document.createElement("div");
            nameDiv.className = "table-item";
            nameDiv.innerHTML = `<h5>${name}</h5>`;
    
            const mobileDiv = document.createElement("div");
            mobileDiv.className = "table-item";
            mobileDiv.innerHTML = `<h5>${mobile}</h5>`;
    
            const emailDiv = document.createElement("div");
            emailDiv.className = "table-item";
            emailDiv.innerHTML = `<h5>${email}</h45`;
    
            newRow1.appendChild(nameDiv);
            newRow2.appendChild(mobileDiv);
            newRow3.appendChild(emailDiv);
    
            table_name.appendChild(newRow1);
            table_mobile.appendChild(newRow2);
            table_email.appendChild(newRow3);
    
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
