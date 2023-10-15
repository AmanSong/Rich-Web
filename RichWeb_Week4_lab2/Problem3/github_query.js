document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("search").addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the form from submitting

        // search for a user taken from search bar
        const input = document.getElementById("query").value;

        // Make an API request to GitHub's user endpoint
        fetch(`https://api.github.com/users/${input}`)
            .then(response => response.json())
            .then(data => {
                // Update the HTML elements with user data
                // or have N/A if we cant retrieve such data
                document.getElementById("avatar").innerHTML = `<img src="${data.avatar_url}" alt="User Avatar">`;
                document.getElementById("name").textContent = `Name: ${data.name || "N/A"}`;
                document.getElementById("username").textContent = `Username: ${data.login || "N/A"}`;
                document.getElementById("email").textContent = `Email: ${data.email || "N/A"}`;
                document.getElementById("location").textContent = `Location: ${data.location || "N/A"}`;
                document.getElementById("gists").textContent = `Gists: ${data.public_gists || "N/A"}`;
        })

        fetch(`https://api.github.com/users/${input}/repos_url`)
        .then(response => response.json())
        .then(data => {
            const repo = document.createElement("div")
            repo.classList.add("repo-container")
            
        })

    });

});
  