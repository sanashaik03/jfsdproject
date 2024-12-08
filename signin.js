document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validate required fields
    if (!email || !password || !role) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password length
    if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
    }

    // If validation is successful, show success message
    alert('Sign in successful!');

    // Redirect to appropriate dashboard based on role
    if (role === 'student') {
        window.location.href = 'student-dashboard.html'; // Redirect to student dashboard
    } else if (role === 'educator') {
        window.location.href = 'educator-dashboard.html'; // Redirect to educator dashboard
    } else {
        alert('Invalid role selected.');
    }
});
