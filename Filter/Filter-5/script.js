<<<<<<< HEAD
function closeModal() {
    document.querySelector(".modal").style.display = "none";
  }
  
  function clearFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  
  function applyFilters() {
    const selectedFilters = Array.from(
      document.querySelectorAll('input[type="checkbox"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.nextSibling.nodeValue.trim());
    alert(`Filters applied to: ${selectedFilters.join(", ")}`);
  }
=======
function closeModal() {
    document.querySelector(".modal").style.display = "none";
  }
  
  function clearFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  
  function applyFilters() {
    const selectedFilters = Array.from(
      document.querySelectorAll('input[type="checkbox"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.nextSibling.nodeValue.trim());
    alert(`Filters applied to: ${selectedFilters.join(", ")}`);
  }
>>>>>>> 06d09e18dfc642437d26ae3883e5a5337b89bc43
  