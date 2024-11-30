<<<<<<< HEAD
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Clear any previous error messages and success message
    clearErrors();
    clearSuccess();

    // Validation checks
    let valid = true;

    // Check for empty First Name
    if (firstName === "") {
      showErrorBelowField("firstName", "First name is required.");
      valid = false;
    }

    // Check for empty Last Name
    if (lastName === "") {
      showErrorBelowField("lastName", "Last name is required.");
      valid = false;
    }

    // Check for empty or invalid Email
    if (email === "") {
      showError("email", "Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      showError("email", "Please enter a valid email address.");
      valid = false;
    }

    // Check for empty or too-short Password
    if (password === "") {
      showError("password", "Password is required.");
      valid = false;
    } else if (password.length < 8) {
      showError("password", "Password must be at least 8 characters long.");
      valid = false;
    }

    // If all fields are valid, show success message
    if (valid) {
      showSuccess("Successfully created account!");
    }
  });

// Function to display error message directly below each input field
function showErrorBelowField(inputId, message) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.innerText = message;

  // Insert error message directly inside the input wrapper (below the input)
  inputElement.parentElement.appendChild(errorElement);
}

// Function to display error message for other fields like Email and Password
function showError(inputId, message) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.innerText = message;

  // Insert the error message directly below the input field
  inputElement.insertAdjacentElement("afterend", errorElement);
}

// Function to clear all previous error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => error.remove());
}

// Function to display success message above the submit button
function showSuccess(message) {
  const successElement = document.createElement("div");
  successElement.className = "success-message";
  successElement.innerText = message;

  // Insert success message above the submit button
  const submitButton = document.querySelector(".submit-btn");
  submitButton.insertAdjacentElement("beforebegin", successElement);
}

// Function to clear previous success message
function clearSuccess() {
  const successMessage = document.querySelector(".success-message");
  if (successMessage) successMessage.remove();
}

// Function to validate email format using regex
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
=======
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Clear any previous error messages and success message
    clearErrors();
    clearSuccess();

    // Validation checks
    let valid = true;

    // Check for empty First Name
    if (firstName === "") {
      showErrorBelowField("firstName", "First name is required.");
      valid = false;
    }

    // Check for empty Last Name
    if (lastName === "") {
      showErrorBelowField("lastName", "Last name is required.");
      valid = false;
    }

    // Check for empty or invalid Email
    if (email === "") {
      showError("email", "Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      showError("email", "Please enter a valid email address.");
      valid = false;
    }

    // Check for empty or too-short Password
    if (password === "") {
      showError("password", "Password is required.");
      valid = false;
    } else if (password.length < 8) {
      showError("password", "Password must be at least 8 characters long.");
      valid = false;
    }

    // If all fields are valid, show success message
    if (valid) {
      showSuccess("Successfully created account!");
    }
  });

// Function to display error message directly below each input field
function showErrorBelowField(inputId, message) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.innerText = message;

  // Insert error message directly inside the input wrapper (below the input)
  inputElement.parentElement.appendChild(errorElement);
}

// Function to display error message for other fields like Email and Password
function showError(inputId, message) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.innerText = message;

  // Insert the error message directly below the input field
  inputElement.insertAdjacentElement("afterend", errorElement);
}

// Function to clear all previous error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => error.remove());
}

// Function to display success message above the submit button
function showSuccess(message) {
  const successElement = document.createElement("div");
  successElement.className = "success-message";
  successElement.innerText = message;

  // Insert success message above the submit button
  const submitButton = document.querySelector(".submit-btn");
  submitButton.insertAdjacentElement("beforebegin", successElement);
}

// Function to clear previous success message
function clearSuccess() {
  const successMessage = document.querySelector(".success-message");
  if (successMessage) successMessage.remove();
}

// Function to validate email format using regex
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
>>>>>>> 06d09e18dfc642437d26ae3883e5a5337b89bc43
