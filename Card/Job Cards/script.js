<<<<<<< HEAD
// Select all .count elements
const counts = document.querySelectorAll(".count");

// Function to handle selection
function selectCount(event) {
  // Remove the 'selected' class from all counts
  counts.forEach((count) => count.classList.remove("selected"));

  // Add 'selected' class to the clicked .count
  event.target.classList.add("selected");
}

// Set the default selected count (Engineering)
const defaultSelected = document.getElementById("default-selected");
defaultSelected.classList.add("selected");

// Add click event listeners to all .count elements
counts.forEach((count) => {
  count.addEventListener("click", selectCount);
});
=======
// Select all .count elements
const counts = document.querySelectorAll(".count");

// Function to handle selection
function selectCount(event) {
  // Remove the 'selected' class from all counts
  counts.forEach((count) => count.classList.remove("selected"));

  // Add 'selected' class to the clicked .count
  event.target.classList.add("selected");
}

// Set the default selected count (Engineering)
const defaultSelected = document.getElementById("default-selected");
defaultSelected.classList.add("selected");

// Add click event listeners to all .count elements
counts.forEach((count) => {
  count.addEventListener("click", selectCount);
});
>>>>>>> 06d09e18dfc642437d26ae3883e5a5337b89bc43
