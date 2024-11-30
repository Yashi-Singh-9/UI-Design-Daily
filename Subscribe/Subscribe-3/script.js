document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let emailInput = document.getElementById("emailInput").value;
    let message = document.getElementById("message");
    message.innerHTML = ""; // Clear any previous messages

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailInput.trim() === "") {
      message.innerHTML =
        '<span style="color: #ffcc00;">Error: Please enter your email address.</span>';
      return;
    }

    if (!emailRegex.test(emailInput)) {
      message.innerHTML =
        '<span style="color: #ffcc00;">Error: Please enter a valid email address.</span>';
      return;
    }

    message.innerHTML =
      '<span style="color: #4caf50;">Thanks for signing up! All the information or details have been sent. Future updates will be sent to your email as well.</span>';
  });
