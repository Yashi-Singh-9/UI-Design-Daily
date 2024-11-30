// Select the form and buttons
const form = document.querySelector("form");
const doneButton = document.querySelector(".btn-done");
const cancelButton = document.querySelector(".btn-cancel");

// Select modal elements
const modal = document.getElementById("resultModal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");
const modalOkButton = document.getElementById("modalOkButton");

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the checkbox values
  const fullTimeChecked = document.getElementById("full-time").checked;
  const freelanceChecked = document.getElementById("freelance").checked;

  // Create a message to display the selected options, with <br> tags for line breaks
  const availabilityMessage = `
    Full Time: ${fullTimeChecked ? "Yes" : "No"}<br>
    Freelance & Projects: ${freelanceChecked ? "Yes" : "No"}
  `;

  // Set the message in the modal and display it
  modalMessage.innerHTML = availabilityMessage; // Use innerHTML to render HTML tags like <br>
  modal.style.display = "block";
}

// Function to handle cancel button click
function handleCancelButtonClick() {
  // Uncheck both checkboxes when "Cancel" is clicked
  document.getElementById("full-time").checked = false;
  document.getElementById("freelance").checked = false;

  // Optionally, display a message or do nothing when cancel is clicked
  modalMessage.innerHTML = "Selection has been cleared.";
  modal.style.display = "block";
}

// Function to close the modal
function closeModalFunction() {
  modal.style.display = "none";
}

// Add event listeners
form.addEventListener("submit", handleFormSubmit);
cancelButton.addEventListener("click", handleCancelButtonClick);
closeModal.addEventListener("click", closeModalFunction);
modalOkButton.addEventListener("click", closeModalFunction);

// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModalFunction();
  }
});
