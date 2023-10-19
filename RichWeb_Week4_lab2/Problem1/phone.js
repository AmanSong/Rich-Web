document.addEventListener("DOMContentLoaded", function(e) {

    // for adding contacts
    document.getElementById("add-contact").addEventListener("click", function(e) {
        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;
        const contactForm = document.getElementById("contact-form");

        const namePattern = /^[a-zA-Z\s]+$/;

        if (contactForm.checkValidity() && namePattern.test(name)) {
    
            const table = document.querySelector("#table");

            const Row = table.insertRow(1)

            const nameCell = Row.insertCell(0);
            const mobileCell = Row.insertCell(1);
            const emailCell = Row.insertCell(2);

            nameCell.textContent = name;
            mobileCell.textContent = mobile;
            emailCell.textContent = email;

            Row.classList.add("row");
            nameCell.classList.add("table-item");
            
            mobileCell.classList.add("table-item");
            mobileCell.setAttribute('id', 'mobile-cell')
            emailCell.classList.add("table-item");
    
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

    document.getElementById('search').addEventListener('input', function() {
        const table = document.querySelector("#table");
        const searchInput = document.querySelector("#search");
        const noInfoMessage = document.querySelector("#noInfoMessage");
        const rows = table.querySelectorAll(".row:not(:first-child)");

        const searchText = searchInput.value.trim();
        let found = false;

        console.log('inputs')

        rows.forEach(row => {
        const mobileCell = row.querySelector("#mobile-cell");
        if (mobileCell) {
            const mobileValue = parseFloat(mobileCell.textContent); 
            if (!isNaN(mobileValue) && mobileValue.toString().includes(searchText)) {
            row.style.display = "";
            found = true;
            } else {
            row.style.display = "none";
            }
        }
        });
            
            if (found) {
            noInfoMessage.style.display = "none";
            } else {
            noInfoMessage.style.display = "";
        }
    });

    let sort = true
    document.getElementById('name-header').addEventListener('click', function() {
        const table = document.querySelector("#table");
        const rows = Array.from(table.querySelectorAll(".row:not(:first-child)"));
    
        if(sort == true) {
            rows.sort((a, b) => {
                const nameA = a.querySelector(".table-item").textContent.toLowerCase();
                const nameB = b.querySelector(".table-item").textContent.toLowerCase();
                return nameA.localeCompare(nameB);
            });
    
            // Clear the table and reinsert the sorted rows
            rows.forEach(row => table.appendChild(row));

            sort = false
            console.log(sort)
        }
        else {
            rows.sort((a, b) => {
                const nameA = a.querySelector(".table-item").textContent.toLowerCase();
                const nameB = b.querySelector(".table-item").textContent.toLowerCase();
                return nameB.localeCompare(nameA);
            });
    
            // Clear the table and reinsert the sorted rows
            rows.forEach(row => table.appendChild(row));

            sort = true
            console.log(sort)
        }
    })
});

function enforceMaxLength(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector("#table");
    const searchInput = document.querySelector("#search");
    const noInfoMessage = document.querySelector("#noInfoMessage");

    // sample data for testing
    const data = [
        { name: "Aman Song", mobile: 18449291, email: "song@example.com" },
        { name: "John Doe", mobile: 44234567, email: "john@example.com" },
        { name: "Jane Smith", mobile: 55598765, email: "jane@example.com" },
        { name: "Bob Johnson", mobile: 77543780, email: "bob@example.com" },
        { name: "Alice Brown", mobile: 13577788, email: "alice@example.com" },
    ];

    // create rows with sample data
    data.forEach(item => {
        const newRow = table.insertRow();
        newRow.classList.add("row");
        const nameCell = newRow.insertCell();
        nameCell.classList.add("table-item");
        nameCell.textContent = item.name;
        const mobileCell = newRow.insertCell();
        mobileCell.classList.add("table-item");
        mobileCell.setAttribute('id', 'mobile-cell')
        mobileCell.textContent = item.mobile;
        const emailCell = newRow.insertCell();
        emailCell.classList.add("table-item");
        emailCell.textContent = item.email;
    });


});



// to sort data in descending or ascending
// document.addEventListener("OnClick", function sort() {
    
// });
  
  