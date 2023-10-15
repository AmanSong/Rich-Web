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

                // Make another API request to fetch user's repositories
                return fetch(data.repos_url);
            })
            .then(response => response.json())
            .then(reposData => {
                // Access the "user-repos" container
                const userReposContainer = document.querySelector('.user-repos .repo-container');
                
                // Clear any previous content in the user-repos container
                userReposContainer.innerHTML = '';

                // Add each repository to the container
                reposData.forEach(repo => {
                    const repoElement = document.createElement('div');
                    repoElement.classList.add('repo-item');
                    repoElement.innerHTML = `
                        <h4>Name: ${repo.name}</h4>
                        <p>Description: ${repo.description || "N/A"}</p>
                    `;
                    userReposContainer.appendChild(repoElement);
                });
            })

    });

});
  