import {
  backendURL,
  successNotification,
  getLoggedUser,
} from "../utils/utils.js";

getLoggedUser();

const btn_logout = document.getElementById("btn_logout");

btn_logout.onclick = async () => {
  const response = await fetch(backendURL + "/api/logout", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  if (response.ok) {
    localStorage.clear();

    window.location.pathname = "/";

    successNotification("Successfully logged out account", 5);
  } else {
    const json = await response.json();

    alert(json.message);
  }
};
