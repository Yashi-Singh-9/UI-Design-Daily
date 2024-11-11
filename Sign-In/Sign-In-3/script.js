document
  .getElementById("sign-in-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const dob = document.getElementById("dob").value;
    const phoneErrorDiv = document.getElementById("phone-error");
    const dobErrorDiv = document.getElementById("dob-error");
    const successMessageDiv = document.getElementById("success-message");

    // Reset messages
    phoneErrorDiv.innerHTML = "";
    dobErrorDiv.innerHTML = "";
    successMessageDiv.innerHTML = "";

    let isValid = true;

    // Phone number validation
    if (phoneNumber.length !== 8 || isNaN(phoneNumber)) {
      phoneErrorDiv.innerHTML = "Phone number must be 8 digits.";
      isValid = false;
    }

    // Date of birth validation
    if (dob.length !== 6 || isNaN(dob)) {
      dobErrorDiv.innerHTML =
        "Date of birth must be 6 digits in ddmmyy format.";
      isValid = false;
    }

    // Display success message if valid
    if (isValid) {
      successMessageDiv.innerHTML = "Sign-in successful!";
    }
  });
