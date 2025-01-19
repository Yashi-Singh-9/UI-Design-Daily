// Select elements
const closeIcon = document.querySelector(".hiring-container .fa-xmark");
const postJobButton = document.querySelector(".hiring-container button");
const hiringContainer = document.querySelector(".hiring-container");
const postContainer = document.querySelector(".post-container");

// Add event listener to the close icon
closeIcon.addEventListener("click", () => {
  hiringContainer.style.display = "none"; // Hide the hiring-container
});

// Add event listener to the "Post a job" button
postJobButton.addEventListener("click", () => {
  hiringContainer.style.display = "none"; // Hide the hiring-container
  postContainer.classList.remove("d-none"); // Show the post-container
});
