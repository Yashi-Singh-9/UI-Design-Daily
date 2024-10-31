document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission

    // Get the input fields
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    // Error message containers
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    // Reset error messages
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";

    // Define email pattern for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Sample user database for email check (for demonstration purposes)
    const validEmails = ["test@example.com", "user@example.com"];

    let hasError = false;

    // Validation conditions
    if (!username.value && !password.value) {
      // Both fields are empty
      usernameError.innerHTML = "Please fill in the Username field.";
      passwordError.innerHTML = "Please fill in the Password field.";
      hasError = true;
    } else if (username.value && !password.value) {
      // Password is empty
      passwordError.innerHTML = "Please fill in the Password field.";
      hasError = true;
    } else if (!username.value && password.value) {
      // Username is empty
      usernameError.innerHTML = "Please fill in the Username field.";
      hasError = true;
    } else if (username.value && !emailPattern.test(username.value)) {
      // Username format is incorrect
      usernameError.innerHTML = "Please enter a valid email address.";
      hasError = true;
    } else if (username.value && !validEmails.includes(username.value)) {
      // Email is not found
      usernameError.innerHTML = "Email not found.";
      hasError = true;
    }
  });
