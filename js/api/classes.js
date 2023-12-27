import {
    backendURL,
    successNotification,
    getLoggedUser,
  } from "../utils/utils.js";
  
  getLoggedUser();
  
  const joinClassBtn = document.getElementById("joinClassBtn");
  
  joinClassBtn.onclick = async () => {
    const classId = 1; // Replace with the actual class ID or any relevant identifier
  
    try {
      const response = await fetch(`${backendURL}/api/classreg`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "ngrok-skip-browser-warning": "69420",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          classId: classId,
        }),
      });
  
      if (response.ok) {
        successNotification("Successfully joined the class", 5);
      } else {
        const json = await response.json();
        alert(json.message);
      }
    } catch (error) {
      console.error("Error joining class:", error);
    }
  };
  