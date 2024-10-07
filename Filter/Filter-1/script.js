const noResultsMessage = document.createElement("div");
noResultsMessage.textContent = "No results found";
noResultsMessage.style.display = "none"; // Initially hidden
noResultsMessage.style.color = "#999"; // Optional styling
noResultsMessage.style.padding = "10px 0";
document.querySelector(".checkbox-list").appendChild(noResultsMessage);

document.getElementById("resetBtn").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    ".checkbox-list input[type='checkbox']"
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  noResultsMessage.style.display = "none"; // Hide message on reset
});

document.getElementById("showResultsBtn").addEventListener("click", () => {
  const selected = [];
  const checkboxes = document.querySelectorAll(
    ".checkbox-list input[type='checkbox']:checked"
  );
  checkboxes.forEach((checkbox) => {
    selected.push(checkbox.value);
  });
  alert("Selected Industries: " + selected.join(", "));
});

document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const checkboxes = document.querySelectorAll(".checkbox-list label");
  let anyVisible = false;

  checkboxes.forEach((label) => {
    const text = label.textContent.toLowerCase();
    if (text.includes(filter)) {
      label.style.display = "";
      anyVisible = true; // At least one match found
    } else {
      label.style.display = "none";
    }
  });

  // Display or hide "No results found" message based on visibility of checkboxes
  noResultsMessage.style.display = anyVisible ? "none" : "block";
});
