// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", () => {
    // Select the boxes
    const box1 = document.querySelector(".box-1");
    const box2 = document.querySelector(".box-2");
  
    // Add click event listeners to the boxes
    box1.addEventListener("click", () => {
      alert("Virtual Machines: Provision Windows and Linux in seconds.");
    });
  
    box2.addEventListener("click", () => {
      alert(
        "Virtual Desktop: Enable a secure, remote desktop experience from anywhere."
      );
    });
  
    // Add hover effect for box1
    box1.addEventListener("mouseover", () => {
      box1.style.backgroundColor = "#3b3e5c";
      box1.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });
  
    box1.addEventListener("mouseout", () => {
      box1.style.backgroundColor = "#353854";
      box1.style.boxShadow = "0 8px 8px rgba(42, 44, 67, 0.9)";
    });
  
    // Add hover effect for box2
    box2.addEventListener("mouseover", () => {
      box2.style.backgroundColor = "#3b3e5c";
      box2.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });
  
    box2.addEventListener("mouseout", () => {
      box2.style.backgroundColor = "#353854";
      box2.style.boxShadow = "0 8px 8px rgba(42, 44, 67, 0.9)";
    });
  
    // Dynamically update content (optional example)
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update Content";
    updateButton.style.marginTop = "20px";
    updateButton.style.padding = "10px 15px";
    updateButton.style.backgroundColor = "#4a4f74";
    updateButton.style.color = "white";
    updateButton.style.border = "none";
    updateButton.style.cursor = "pointer";
    updateButton.style.borderRadius = "5px";
  
    updateButton.addEventListener("click", () => {
      box1.querySelector("p").textContent =
        "Updated: Launch Linux in seconds with ease.";
      box2.querySelector("p").textContent =
        "Updated: Experience a secure virtual desktop now.";
    });
  
    document.querySelector("main").appendChild(updateButton);
  });
  