function closePopup() {
    const popup = document.querySelector(".notification-popup");
    const backgroundShape = document.querySelector(".background-shape");
  
    // Hide the notification popup
    if (popup) {
      popup.style.display = "none";
    }
  
    // Hide the background shape if it exists
    if (backgroundShape) {
      backgroundShape.style.display = "none";
    }
  }
  
  // Example functions for button actions
  function blockNotifications() {
    alert("Notifications Blocked");
    closePopup();
  }
  
  function allowNotifications() {
    alert("Notifications Allowed");
    closePopup();
  }
