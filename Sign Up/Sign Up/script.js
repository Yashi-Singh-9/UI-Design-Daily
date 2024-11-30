document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const usernameInput = document.getElementById("username");
    const termsCheckbox = document.getElementById("terms");
    const continueButton = document.querySelector(".continue-btn");
  
    // Create error and success message elements
    const errorContainer = document.createElement("div");
    errorContainer.className = "error-message";
    form.insertBefore(errorContainer, form.firstChild);
  
    const successContainer = document.createElement("div");
    successContainer.className = "success-message";
    form.insertBefore(successContainer, form.firstChild);
  
    // Function to clear messages
    function clearMessages() {
      errorContainer.innerHTML = "";
      successContainer.innerHTML = "";
    }
  
    // Function to show error message
    function showError(message) {
      errorContainer.innerHTML = `<p>${message}</p>`;
      errorContainer.style.color = "red";
    }
  
    // Function to show success message
    function showSuccess(message) {
      successContainer.innerHTML = `<p>${message}</p>`;
      successContainer.style.color = "green";
    }
  
    // Handle form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      clearMessages(); // Clear previous messages
  
      // Validation checks
      const username = usernameInput.value.trim();
      const isTermsChecked = termsCheckbox.checked;
  
      // Check for errors
      if (!username) {
        showError("Please enter a username.");
        return;
      }
  
      if (!isTermsChecked) {
        showError("Please agree to the Terms of Service and Privacy Policy.");
        return;
      }
  
      // If no errors, show success message
      showSuccess("Form submitted successfully!");
    });
  });  