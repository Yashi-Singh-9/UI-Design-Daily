const stars = document.querySelectorAll(".stars i");

// Add hover and click events to each star
stars.forEach((star, index) => {
  // Handle hover effect
  star.addEventListener("mouseover", () => {
    // Highlight all stars up to the hovered one
    highlightStars(index);
  });

  // Remove hover effect when the mouse leaves
  star.addEventListener("mouseout", () => {
    resetStars();
  });

  // Handle click event
  star.addEventListener("click", () => {
    // Mark or unmark stars as permanently selected up to the clicked one
    toggleSelectStars(index);
  });
});

// Function to highlight stars on hover
function highlightStars(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("fa-solid"); // Add filled star class
      star.classList.remove("fa-regular"); // Remove outline star class
      star.style.color = "yellow";
    } else {
      star.classList.remove("fa-solid");
      star.classList.add("fa-regular");
      star.style.color = "";
    }
  });
}

// Function to reset stars to their initial state
function resetStars() {
  stars.forEach((star) => {
    if (!star.dataset.selected) {
      star.classList.remove("fa-solid");
      star.classList.add("fa-regular");
      star.style.color = "";
    }
  });
}

// Function to toggle star selection on click
function toggleSelectStars(index) {
  if (stars[index].dataset.selected === "true") {
    // If the clicked star is already selected, deselect only that star
    stars[index].classList.remove("fa-solid");
    stars[index].classList.add("fa-regular");
    stars[index].style.color = "";
    stars[index].dataset.selected = "";
  } else {
    // Otherwise, select stars up to the clicked one
    stars.forEach((star, i) => {
      if (i <= index) {
        star.classList.add("fa-solid");
        star.classList.remove("fa-regular");
        star.style.color = "yellow";
        star.dataset.selected = "true"; // Mark as selected
      } else {
        star.classList.remove("fa-solid");
        star.classList.add("fa-regular");
        star.style.color = "";
        star.dataset.selected = "";
      }
    });
  }
}