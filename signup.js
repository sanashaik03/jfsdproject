// Add event listener for the form submission
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Validate role selection
    if (!role) {
        alert("Please select a role (Student or Educator).");
        return;
    }

    // Retrieve existing users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new user object
    const newUser = {
        email: email,
        password: password,
        role: role
    };

    // Add the new user to the users array
    users.push(newUser);

    // Save the updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Display success message
    alert("Sign-up successful!");

    // Redirect to home page after 2 seconds
    setTimeout(() => {
        window.location.href = "index.html"; // Redirect to home page
    }, 2000);
});
