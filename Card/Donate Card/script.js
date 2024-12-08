document.addEventListener("DOMContentLoaded", () => {
    const monthlyAmounts = [12, 30, 50, 60];
    const oneTimeAmounts = [40, 80, 120];
    let selectedFrequency = "Monthly";
    let selectedAmount = monthlyAmounts[0];
  
    const amountSelector = document.getElementById("amountSelector");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const formMessage = document.getElementById("formMessage");
    const errorMessages = document.querySelectorAll(".error-message");
  
    // Frequency buttons
    const monthlyButton = document.querySelector(
      ".frequency-selector button:nth-child(1)"
    );
    const oneTimeButton = document.querySelector(
      ".frequency-selector button:nth-child(2)"
    );
  
    // Function to update the amount buttons based on frequency
    function updateAmountButtons() {
      const amounts =
        selectedFrequency === "Monthly" ? monthlyAmounts : oneTimeAmounts;
      amountSelector.innerHTML = ""; // Clear previous buttons
  
      amounts.forEach((amount, index) => {
        const button = document.createElement("button");
        button.innerText = `$${amount}`;
        if (index === 0) button.classList.add("active"); // Only add "active" to the first button
        button.onclick = () => setAmount(amount);
        amountSelector.appendChild(button);
      });
  
      // Set initial selected amount
      selectedAmount = amounts[0];
    }
  
    // Function to set the donation frequency
    function setFrequency(frequency) {
      selectedFrequency = frequency;
  
      // Toggle active state on frequency buttons
      if (frequency === "Monthly") {
        monthlyButton.classList.add("active");
        oneTimeButton.classList.remove("active");
      } else {
        oneTimeButton.classList.add("active");
        monthlyButton.classList.remove("active");
      }
  
      updateAmountButtons();
    }
  
    // Function to set the selected donation amount
    function setAmount(amount) {
      selectedAmount = amount;
  
      // Toggle active state on amount buttons
      Array.from(amountSelector.children).forEach((button) => {
        button.classList.toggle("active", button.innerText === `$${amount}`);
      });
    }
  
    // Function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to display message
    function displayMessage(message, isSuccess = true) {
      formMessage.innerText = message;
      formMessage.className = "form-message"; // Reset classes
      formMessage.classList.add(isSuccess ? "success" : "error");
    }
  
    // Function to handle donation
    function donateNow() {
      const name = nameField.value.trim();
      const email = emailField.value.trim();
      let valid = true;
  
      // Clear previous error messages
      errorMessages.forEach((msg) => (msg.innerText = ""));
      formMessage.innerText = ""; // Clear form message
  
      // Validate name
      if (name === "") {
        errorMessages[0].innerText = "Please enter your name.";
        valid = false;
      }
  
      // Validate email
      if (email === "") {
        errorMessages[1].innerText = "Please enter your email.";
        valid = false;
      } else if (!isValidEmail(email)) {
        errorMessages[1].innerText = "Please enter a valid email address.";
        valid = false;
      }
  
      // Show success message if validation passes
      if (valid) {
        displayMessage(
          `A donation link has been sent to your email (${email}). If you don't receive it, please check your spam folder. If you still don't receive it, please try again.`,
          true
        );
      } else {
        displayMessage(
          "Please correct the highlighted errors and try again.",
          false
        );
      }
    }
  
    // Attach event listeners to frequency buttons
    monthlyButton.onclick = () => setFrequency("Monthly");
    oneTimeButton.onclick = () => setFrequency("One time");
  
    // Attach event listener to donate button
    document.querySelector(".donate-button").onclick = donateNow;
  
    // Initialize the form with default frequency and amount
    updateAmountButtons();
  });