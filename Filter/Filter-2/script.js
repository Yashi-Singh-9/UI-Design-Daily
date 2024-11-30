// Search filter functionality
const searchInput = document.getElementById("searchInput");
const authorList = document.getElementById("authorList");
const authors = authorList.getElementsByClassName("author-item");

// Create "No user found" message element
const noUserFound = document.createElement("li");
noUserFound.textContent = "No user found";
noUserFound.style.textAlign = "center";
noUserFound.style.padding = "10px";
noUserFound.style.display = "none"; // Initially hidden
authorList.appendChild(noUserFound); // Append it to the author list

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();
  let visibleCount = 0;

  for (let i = 0; i < authors.length; i++) {
    let authorName = authors[i].textContent || authors[i].innerText;

    if (authorName.toLowerCase().indexOf(filter) > -1) {
      authors[i].style.display = "";
      visibleCount++;
    } else {
      authors[i].style.display = "none";
    }
  }

  // Show "No user found" if no authors are visible
  if (visibleCount === 0) {
    noUserFound.style.display = "";
  } else {
    noUserFound.style.display = "none";
  }
});

// Highlight the selected author
authorList.addEventListener("click", function (e) {
  if ((e.target && e.target.nodeName === "LI") || e.target.closest("LI")) {
    // Remove the 'selected' class from any previously selected items
    const selected = document.querySelector(".author-item.selected");
    if (selected) {
      selected.classList.remove("selected");
    }

    // Add the 'selected' class to the clicked item
    const targetItem = e.target.closest("LI");
    if (targetItem !== noUserFound) {
      // Prevent "No user found" from being selected
      targetItem.classList.add("selected");
    }
  }
});
