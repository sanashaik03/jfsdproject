document.getElementById("create-course-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Step 1: Get input values from the form
    const courseTitle = document.getElementById("course-title").value;
    const courseDescription = document.getElementById("course-description").value;

    // Step 2: Validate the form input
    if (courseTitle.trim() === "" || courseDescription.trim() === "") {
        alert("Please fill out both fields.");
        return;
    }

    // Step 3: Create a new course item
    const newCourse = document.createElement("li");
    newCourse.textContent = `${courseTitle}: ${courseDescription}`;

    // Step 4: Append the new course to the list
    document.getElementById("course-list").appendChild(newCourse);

    // Step 5: Clear the form fields
    document.getElementById("create-course-form").reset();

    // Save created courses in LocalStorage
function saveCoursesToLocalStorage() {
    const courses = Array.from(document.getElementById("course-list").children).map(course => course.textContent);
    localStorage.setItem("courses", JSON.stringify(courses));
}

// Load courses from LocalStorage when the page loads
function loadCoursesFromLocalStorage() {
    const storedCourses = JSON.parse(localStorage.getItem("courses"));
    if (storedCourses) {
        const courseList = document.getElementById("course-list");
        storedCourses.forEach(courseText => {
            const courseItem = document.createElement("li");
            courseItem.textContent = courseText;
            courseList.appendChild(courseItem);
        });
    }
}

window.onload = loadCoursesFromLocalStorage; // Load courses when the page loads

document.getElementById("create-course-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const courseTitle = document.getElementById("course-title").value;
    const courseDescription = document.getElementById("course-description").value;
    if (courseTitle.trim() === "" || courseDescription.trim() === "") {
        alert("Please fill out both fields.");
        return;
    }

    const newCourse = document.createElement("li");
    newCourse.textContent = `${courseTitle}: ${courseDescription}`;
    document.getElementById("course-list").appendChild(newCourse);
    document.getElementById("create-course-form").reset();

    // Save the courses to LocalStorage
    saveCoursesToLocalStorage();
});
// Dummy courses data
const courses = [
    { title: "Course 1", description: "Intro to Course 1" },
    { title: "Course 2", description: "Intro to Course 2" },
    { title: "Course 3", description: "Intro to Course 3" }
];

window.onload = function () {
    const courseList = document.getElementById("available-courses");

    courses.forEach(course => {
        const listItem = document.createElement("li");
        listItem.textContent = `${course.title}: ${course.description}`;
        listItem.addEventListener("click", () => {
            // Redirect to course details
            window.location.href = "course.html";
        });
        courseList.appendChild(listItem);
    });
};
// Logout functionality
document.getElementById("logout").addEventListener("click", function(event) {
    event.preventDefault();

    // Clear the user's session from localStorage
    localStorage.removeItem("loggedInUser");

    // Display a logout message (optional)
    alert("You have been logged out!");

    // Redirect the user to the sign-in page or home page
    window.location.href = "signin.html"; // Redirect to the sign-in page
});


});
