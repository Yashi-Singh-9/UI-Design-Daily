function toggleDropdown() {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("show");
  }
  
  function selectOption(option) {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.textContent = option;
    toggleDropdown();
  }
  