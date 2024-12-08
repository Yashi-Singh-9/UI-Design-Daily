function follow() {
    const followButton = document.querySelector(".follow-button");
  
    // Toggle between Follow and Following
    if (followButton.getAttribute("data-following") === "false") {
      followButton.innerHTML = `<i class="fa-solid fa-user-check"></i> Following`;
      followButton.style.background =
        "linear-gradient(to right, #42a5f5, #64b5f6)"; // Blue gradient for "Following"
      followButton.setAttribute("data-following", "true"); // Set state to following
    } else {
      followButton.innerHTML = `<i class="fa-solid fa-user-plus"></i> Follow`;
      followButton.style.background =
        "linear-gradient(to right, #fa3967, #fa9639)"; // Original gradient for "Follow"
      followButton.setAttribute("data-following", "false"); // Set state to not following
    }
  }
  
  function sendMessage() {
    // Create message modal
    const messageBox = document.createElement("div");
    messageBox.classList.add("message-box");
  
    messageBox.innerHTML = `
      <div class="message-content">
        <h3>Send a Message to Frances S. Cady</h3>
        <textarea id="messageInput" placeholder="Type your message here..."></textarea>
        <button class="send-button" onclick="submitMessage()">Send</button>
      </div>
    `;
  
    document.body.appendChild(messageBox);
  }
  
  function submitMessage() {
    const messageInput = document.getElementById("messageInput").value.trim();
  
    if (messageInput === "") {
      alert("Please type your message.");
    } else {
      const messageBox = document.querySelector(".message-content");
      messageBox.innerHTML = "<p>Message sent!</p>";
  
      // Close the modal after 1.5 seconds
      setTimeout(closeMessageBox, 1500);
    }
  }
  
  function closeMessageBox() {
    const messageBox = document.querySelector(".message-box");
    if (messageBox) {
      messageBox.remove();
    }
  }  