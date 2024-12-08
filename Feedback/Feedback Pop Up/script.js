function closeSurvey() {
    document.querySelector(".survey-container").style.display = "none";
  }
  
  // Function to select a rating
  function selectRating(rating) {
    // Clear previous selection
    document.querySelectorAll(".rating-button").forEach((button) => {
      button.classList.remove("selected");
    });
    // Mark the selected rating
    document
      .querySelectorAll(".rating-button")
      [rating - 1].classList.add("selected");
  
    // Clear any existing error message when a rating is selected
    document.getElementById("error-message").innerHTML = "";
  }
  
  // Function to handle the next button click
  function nextStep() {
    const selectedRating = document.querySelector(".rating-button.selected");
    const notUsingFeature = document.getElementById("notUsingFeature").checked;
    const errorMessage = document.getElementById("error-message");
  
    // Check if no rating or checkbox is selected
    if (!selectedRating && !notUsingFeature) {
      // Show error message below the NEXT button
      errorMessage.innerHTML =
        "Please select a rating or check the box if you don’t use the feature.";
      return;
    }
  
    // Clear any existing error message
    errorMessage.innerHTML = "";
  
    // Show thank-you message in the survey container
    document.getElementById("surveyContainer").innerHTML =
      "<p style='font-size: 18px; font-weight: bold; color: #151a41;'>Thank you for your feedback!</p>";
  }