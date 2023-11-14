function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Simple validation - check if fields are not empty
    if (username === "") {
        usernameError.textContent = "Username is required";
    } else {
        usernameError.textContent = "";
    }

    if (email === "") {
        emailError.textContent = "Email is required";
    } else {
        emailError.textContent = "";
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
    } else {
        passwordError.textContent = "";
    }
}
