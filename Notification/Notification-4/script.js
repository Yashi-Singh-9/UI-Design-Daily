// Function to close the banner
function closeBanner() {
    document.getElementById("banner").style.display = "none";
  }
  
  // Function to close the cookie dialog
  function closeCookieDialog() {
    document.getElementById("cookieDialog").style.display = "none";
  }
  
  // Function to handle "Accept Cookies"
  function acceptCookies() {
    closeCookieDialog();
    console.log("Cookies accepted");
  }
  
  // Function to handle "Decline Cookies"
  function declineCookies() {
    closeCookieDialog();
    console.log("Cookies declined");
  }
  