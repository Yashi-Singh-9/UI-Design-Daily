<<<<<<< HEAD
const notificationIcon = document.querySelector(".notification-icon");
const notificationPanel = document.querySelector(".notification-panel");

document.querySelector(".mark-read").addEventListener("click", () => {
  document.querySelectorAll(".notification-item").forEach((item) => {
    item.style.opacity = "0.5";
  });
});

notificationIcon.addEventListener("click", () => {
  notificationPanel.classList.toggle("hidden");
});
=======
const notificationIcon = document.querySelector(".notification-icon");
const notificationPanel = document.querySelector(".notification-panel");

document.querySelector(".mark-read").addEventListener("click", () => {
  document.querySelectorAll(".notification-item").forEach((item) => {
    item.style.opacity = "0.5";
  });
});

notificationIcon.addEventListener("click", () => {
  notificationPanel.classList.toggle("hidden");
});
>>>>>>> 06d09e18dfc642437d26ae3883e5a5337b89bc43
