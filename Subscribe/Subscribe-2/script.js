document
  .getElementById("card-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear any previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => (msg.innerText = "")); // Clear inner text instead of removing

    // Get form elements
    const emailInput = document.getElementById("email");
    const termsCheckbox = document.querySelector('input[name="terms"]');
    const emailError = document.getElementById("email-error"); // Error message container for email
    const termsError = document.getElementById("terms-error"); // Error message container for terms
    const newsletterCheckboxes = document.querySelectorAll(
      'input[name="newsletter"]'
    ); // Select all newsletter checkboxes

    // Validation flags
    let valid = true;

    // Check if email is empty
    if (emailInput.value.trim() === "") {
      emailError.innerText = "Email address is required.";
      valid = false;
    } else if (!validateEmail(emailInput.value)) {
      // Validate email format
      emailError.innerText = "Please enter a valid email address.";
      valid = false;
    }

    // Check if terms and conditions are checked
    if (!termsCheckbox.checked) {
      termsError.innerText = "You must agree to the terms and conditions.";
      valid = false;
    }

    // If valid, show success message
    if (valid) {
      const messageContainer = document.createElement("div");
      messageContainer.innerHTML = "Download link has been sent to your email!";
      messageContainer.style.color = "#28a745"; // Green color for success message
      messageContainer.style.fontWeight = "bold";
      messageContainer.style.marginTop = "20px";
      document.querySelector(".card").appendChild(messageContainer);

      // Reset the email input and terms checkbox
      emailInput.value = "";
      termsCheckbox.checked = false;

      // Uncheck all newsletter checkboxes
      newsletterCheckboxes.forEach((checkbox) => {
        checkbox.checked = false; // Uncheck each newsletter checkbox
      });
    }
  });

// Function to validate email format
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
  return regex.test(email);
}
