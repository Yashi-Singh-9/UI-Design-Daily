<<<<<<< HEAD
function toggleNotification() {
    const notificationCard = document.getElementById("notificationCard");
    notificationCard.style.display =
      notificationCard.style.display === "none" ? "block" : "none";
  }
  
  // Toggle notification card visibility
  function toggleNotification() {
    const notificationCard = document.getElementById("notificationCard");
    notificationCard.classList.toggle("active");
  }
  
  // Function to share on Twitter
  function shareToTwitter() {
    const text = "If you like what we do, please tell your friends and share.";
    const url = "https://yourwebsite.com"; // replace with the actual URL
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  }
  
  // Function to share on Facebook
  function shareToFacebook() {
    const url = "https://yourwebsite.com"; // replace with the actual URL
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank");
  }
  
  // Optional: Close notification card when clicking outside of it
  document.addEventListener("click", function (event) {
    const notificationCard = document.getElementById("notificationCard");
    const notificationBell = document.querySelector(".notification-bell");
  
    // Check if the click is outside the notification card or bell icon
    if (
      !notificationCard.contains(event.target) &&
      !notificationBell.contains(event.target)
    ) {
      notificationCard.classList.remove("active");
    }
  });
=======
function toggleNotification() {
    const notificationCard = document.getElementById("notificationCard");
    notificationCard.style.display =
      notificationCard.style.display === "none" ? "block" : "none";
  }
  
  // Toggle notification card visibility
  function toggleNotification() {
    const notificationCard = document.getElementById("notificationCard");
    notificationCard.classList.toggle("active");
  }
  
  // Function to share on Twitter
  function shareToTwitter() {
    const text = "If you like what we do, please tell your friends and share.";
    const url = "https://yourwebsite.com"; // replace with the actual URL
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  }
  
  // Function to share on Facebook
  function shareToFacebook() {
    const url = "https://yourwebsite.com"; // replace with the actual URL
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank");
  }
  
  // Optional: Close notification card when clicking outside of it
  document.addEventListener("click", function (event) {
    const notificationCard = document.getElementById("notificationCard");
    const notificationBell = document.querySelector(".notification-bell");
  
    // Check if the click is outside the notification card or bell icon
    if (
      !notificationCard.contains(event.target) &&
      !notificationBell.contains(event.target)
    ) {
      notificationCard.classList.remove("active");
    }
  });
>>>>>>> 06d09e18dfc642437d26ae3883e5a5337b89bc43
  