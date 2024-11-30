// JavaScript to handle modal close functionality and form validation

// Get references to HTML elements
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("closeButton");
const cancelButton = document.getElementById("cancelButton");
const addButton = document.querySelector(".add-button");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const descriptionInput = document.getElementById("description");
const itemTypeRadio = document.querySelector(
  "input[name='itemType'][value='Product']"
);

// Function to close the modal
function closeModal() {
  overlay.style.display = "none";
}

// Show error message for invalid fields
function showError(input, message) {
  // Create error element if it doesn’t exist
  let error = input.nextElementSibling;
  if (!error || !error.classList.contains("error-message")) {
    error = document.createElement("div");
    error.classList.add("error-message");
    input.parentElement.appendChild(error);
  }
  error.innerText = message;
}

// Remove error messages when input is valid
function removeError(input) {
  const error = input.nextElementSibling;
  if (error && error.classList.contains("error-message")) {
    error.innerText = "";
  }
}

// Show success message after successful validation
function showSuccessMessage() {
  const successMessage = document.createElement("div");
  successMessage.classList.add("success-message");
  successMessage.innerText = "Item added successfully!";

  const buttonGroup = document.querySelector(".button-group");
  buttonGroup.parentNode.insertBefore(successMessage, buttonGroup);

  // Remove success message after 1 seconds
  setTimeout(() => {
    successMessage.remove();
  }, 1000);
}

// Event listener for close button
closeButton.onclick = closeModal;

// Event listener for cancel button
cancelButton.onclick = closeModal;

// Event listener for the add button
addButton.onclick = function (event) {
  event.preventDefault(); // Prevent form submission

  // Validate inputs
  let valid = true;

  // Validate name
  if (!nameInput.value.trim()) {
    showError(nameInput, "Name is required.");
    valid = false;
  } else {
    removeError(nameInput);
  }

  // Validate price
  if (!priceInput.value.trim()) {
    showError(priceInput, "Price is required.");
    valid = false;
  } else {
    removeError(priceInput);
  }

  // If both fields are valid, show success message and reset the form
  if (valid) {
    // Remove any previous success message
    const previousSuccess = document.querySelector(".success-message");
    if (previousSuccess) {
      previousSuccess.remove();
    }

    // Show success message
    showSuccessMessage();

    // Reset the form fields
    nameInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
    itemTypeRadio.checked = true;
  }
};
