// Select all the icon sections
const icons = document.querySelectorAll(".icon");

// Add a click event listener to each icon
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Remove the "selected" class from all icons
    icons.forEach((i) => i.classList.remove("selected"));
    // Add the "selected" class to the clicked icon
    icon.classList.add("selected");
  });
});

// Ensure the default selection is visible
document.querySelector(".icon.selected").classList.add("selected");
