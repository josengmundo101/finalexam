import {
  backendURL,
  successNotification,
  getLoggedUser,
} from "../utils/utils.js";

getClasses();
  async function getClasses() {
    const response = await fetch(
      backendURL + "api/classes",
      {
        headers: {
          Accept: "application/json",
          "ngrok-skip-browser-warning": "69420",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  
    if (response.ok) {
      const json = await response.json();
  
      let container = "";
      json.forEach((element) => {
        const date = new Date(element.created_at).toLocaleString();
    
        container += `<div class="col-lg-12 mb-4 d-inline-block mx-2 shadow-none">
                        <div class="pricing text-center">
                            <span>&nbsp;</span>
                            <h3>${element.class_name}</h3>
                            <p class="mb-4">${element.instructor_id}</p>
                            <p class="mb-4">${element.class_date}</p>
                            <p class="mb-4">${element.class_description}</p>
                            <a href="#" class="btn btn-primary">Join Class</a>
                        </div>
                    </div>`;
    });
    
    // Assuming container is an HTML element, e.g., obtained using document.getElementById
    document.getElementById("get_classes").innerHTML = container;
    
    
    
    
  
      // Add event listeners for any additional actions here
  
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }
