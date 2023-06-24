function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menu.addEventListener("click", function () {
      menu.style.display = "none";
    });

  } else {
    menu.style.display = "none";
  }
}
toggleMenu();