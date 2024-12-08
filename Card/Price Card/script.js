// Select elements
const priceElement = document.getElementById("price");
const downloadOptions = document.querySelectorAll(".download-option");
const subscribeButton = document.getElementById("subscribe");
const successMessage = document.getElementById("success-message");

// Update price when a download option is selected
downloadOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Remove 'selected' class from all buttons
    downloadOptions.forEach((btn) => btn.classList.remove("selected"));

    // Add 'selected' class to the clicked button
    option.classList.add("selected");

    // Update the price
    const newPrice = option.getAttribute("data-price");
    priceElement.textContent = newPrice;
  });
});

// Display success message when subscribe button is clicked
subscribeButton.addEventListener("click", () => {
  // Show the success message
  successMessage.classList.remove("hidden");

  // Hide the success message after 2 seconds
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 2000); // 2000ms = 2 seconds
});
