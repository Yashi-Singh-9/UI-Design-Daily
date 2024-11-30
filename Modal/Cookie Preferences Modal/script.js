document.addEventListener("DOMContentLoaded", () => {
    // Function to show a popup message
    function showPopup(message) {
      const popup = document.createElement("div");
      popup.className = "popup";
      popup.textContent = message;
      document.body.appendChild(popup);
  
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 1000);
    }
  
    // Reset modal to its default state
    function resetModal() {
      const checkboxes = document.querySelectorAll(".toggle-switch input");
      if (checkboxes.length >= 4) {
        checkboxes[0].checked = true; // Strictly Necessary Cookies (default)
        checkboxes[1].checked = true; // Functional Cookies (default)
        checkboxes[2].checked = true; // Performance Cookies (default)
        checkboxes[3].checked = false; // Personalised Ads (default)
      }
  
      const alwaysActiveText = document.querySelector(".always-active");
      if (alwaysActiveText) {
        alwaysActiveText.textContent = "Always Active";
      }
    }
  
    // "Allow All" button logic
    document.querySelector(".allow-all").addEventListener("click", () => {
      const checkboxes = document.querySelectorAll(".toggle-switch input");
      checkboxes.forEach((input) => (input.checked = true));
  
      const alwaysActiveText = document.querySelector(".always-active");
      if (alwaysActiveText) {
        alwaysActiveText.textContent = "Always Active";
      }
    });
  
    // "Reject All" button logic
    document.querySelector(".reject-all").addEventListener("click", () => {
      const checkboxes = document.querySelectorAll(".toggle-switch input");
      checkboxes.forEach((input) => (input.checked = false));
  
      const alwaysActiveText = document.querySelector(".always-active");
      if (alwaysActiveText) {
        alwaysActiveText.textContent = "Decline";
      }
    });
  
    // "Submit My Choices" button logic
    document.querySelector(".submit-choices").addEventListener("click", () => {
      showPopup("Your choices have been saved!");
      // Do not reset the modal here to preserve user choices
    });
  
    // Optional: Reset modal state manually if needed
    document.querySelector(".close-modal")?.addEventListener("click", () => {
      resetModal();
    });
  });
  