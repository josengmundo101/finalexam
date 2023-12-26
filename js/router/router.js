function setRouter() {
  //alert(window.location.pathname);
  switch (window.location.pathname) {
    case "/":
    case "/home.html":
    case "/index.html":
      if (localStorage.getItem("token") != null) {
        window.location.pathname = "/admin.html";
      }
      break;

    case "/admin.html":
      if (!localStorage.getItem("token")) {
        window.location.pathname = "/index.html";
      }
      break;

    default:
      break;
  }
}

export { setRouter };
