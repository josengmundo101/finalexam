import {
    backendURL,
    successNotification,
    errorNotification,
  } from "../utils/utils.js";

  // Logout functionality
const logoutButton = document.getElementById("logout_button");

logoutButton.onclick = async () => {
  // Get the token from localStorage
  const token = localStorage.getItem("token");

  if (token) {
    try {
      // Call your logout API endpoint on the server
      const logoutResponse = await fetch(backendURL + "/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (logoutResponse.ok) {
        // Clear the token from localStorage
        localStorage.removeItem("token");

        // Redirect to the login page or any other desired location
        window.location.pathname = "/login.html";
      } else {
        // Handle error response from the logout API if needed
        const logoutError = await logoutResponse.json();
        console.error("Logout error:", logoutError);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  } else {
    // Token is not available in localStorage, handle accordingly
    console.error("No token found for logout");
  }
};