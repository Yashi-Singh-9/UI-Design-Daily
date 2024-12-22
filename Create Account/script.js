// Get reference to the modal and close button
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

// Close the modal when the close button is clicked
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
