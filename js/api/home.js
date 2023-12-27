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
      "ngrok-skip-browser-warning": "69420",
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
// Submit Form Functionality; This is for Create and Update
const form_slides = document.getElementById("form_slides");

form_slides.onsubmit = async (e) => {
  e.preventDefault();

  // Disable Button
  document.querySelector("#form_slides button[type='submit']").disabled = true;
  document.querySelector(
    "#form_slides button[type='submit']"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                      </div>
                      <span>Loading...</span>`;

  // Get Values of Form (input, textarea, select) set it as form-data
  const formData = new FormData(form_slides);

  // Check key/value pairs of FormData; Uncomment to debug
  // for (let [name, value] of formData) {
  //   console.log(${name} = ${value}); // key1 = value1, then key2 = value2
  // }

  let response;
  // Check if for_update_id is empty, if empty then it's create, else it's update
  if (for_update_id == "") {
    // Fetch API Carousel Item Store Endpoint
    response = await fetch(backendURL + "/api/carousel", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: formData,
    });
  }
}