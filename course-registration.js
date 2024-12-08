document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to server

    const studentName = document.getElementById("studentName").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    // Perform your registration logic here, like sending data to the server
    console.log(`Student Registered: ${studentName}, Email: ${email}, Course: ${course}`);

    // Show a confirmation message
    alert("You have successfully registered for " + course + "!");

    // Optionally, you can reset the form after submission
    document.getElementById("registrationForm").reset();
});
