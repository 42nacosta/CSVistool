document.getElementById("menu-bar").addEventListener("click", function() {
    const menu = document.getElementById("menu-container");
    console.log(menu)

    // Option 1: Toggle between two specific classes
    if (menu.classList.contains("menu-hide")) {
      menu.classList.remove("menu-hide");
      menu.classList.add("menu-show");
    } else {
      menu.classList.remove("menu-show");
      menu.classList.add("menu-hide");
    }
  });