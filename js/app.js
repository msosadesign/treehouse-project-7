const closeNotification = document.getElementById("close-notification");

// Close notification bar
closeNotification.addEventListener("click", () => {
  const notification = document.getElementById("notification-container");
  notification.style.display = "none";
});
