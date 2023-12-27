import { setRouter } from "../router/router.js";

async function getLoggedUser() {
  const response = await fetch(backendURL + "/api/profile/show", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  if (response.ok) {
    const json = await response.json();

    document.getElementById("user_logged").innerHTML =
      json.firstname + " " + json.lastname;
  } else {
    const json = await response.json();

    alert(json.message);
  }
}

setRouter();
const backendURL = "https://bcc0-216-247-54-151.ngrok-free.app/backend/public";

function successNotification(message, seconds) {
  document.querySelector(".alert-success").classList.remove("d-none");
  document.querySelector(".alert-success").classList.add("d-block");
  document.querySelector(".alert-success").innerHTML = message;

  if (seconds != "") {
    setTimeout(function () {
      document.querySelector(".alert-success").classList.remove("d-none");
      document.querySelector(".alert-success").classList.add("d-block");
    }, seconds * 1000);
  }
}

function errorNotification(message, seconds) {
  document.querySelector(".alert-danger").classList.remove("d-none");
  document.querySelector(".alert-danger").classList.add("d-block");
  document.querySelector(".alert-danger").innerHTML = message;
  if (seconds != "") {
    setTimeout(function () {
      document.querySelector(".alert-danger").classList.remove("d-none");
      document.querySelector(".alert-danger").classList.add("d-block");
    }, seconds * 1000);
  }
}

export { backendURL, successNotification, errorNotification, getLoggedUser };
