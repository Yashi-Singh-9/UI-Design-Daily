<<<<<<< HEAD
// Remove the document.addEventListener part and just keep the functions
function closeModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  }
  
  function saveChanges() {
    const viewOptions = document.querySelectorAll('input[name="view"]');
    let selectedView = "";
    viewOptions.forEach((option) => {
      if (option.checked) {
        selectedView = option.nextSibling.textContent.trim();
      }
    });
  
    const includeCheckbox = document.querySelector(
      '.include-section input[type="checkbox"]'
    );
    const isChecked = includeCheckbox.checked;
  
    const searchKeyword = document
      .querySelector('.search-section input[type="text"]')
      .value.trim();
  
    console.log("Search Keyword:", searchKeyword);
    console.log("Selected View:", selectedView);
    console.log("Jobs shared with me:", isChecked);
  
    alert("Changes saved!");
  
    closeModal();
  }
=======
// Remove the document.addEventListener part and just keep the functions
function closeModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  }
  
  function saveChanges() {
    const viewOptions = document.querySelectorAll('input[name="view"]');
    let selectedView = "";
    viewOptions.forEach((option) => {
      if (option.checked) {
        selectedView = option.nextSibling.textContent.trim();
      }
    });
  
    const includeCheckbox = document.querySelector(
      '.include-section input[type="checkbox"]'
    );
    const isChecked = includeCheckbox.checked;
  
    const searchKeyword = document
      .querySelector('.search-section input[type="text"]')
      .value.trim();
  
    console.log("Search Keyword:", searchKeyword);
    console.log("Selected View:", selectedView);
    console.log("Jobs shared with me:", isChecked);
  
    alert("Changes saved!");
  
    closeModal();
  }
>>>>>>> 06d09e18dfc642437d26ae3883e5a5337b89bc43
  