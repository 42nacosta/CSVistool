document.getElementById("menu-bar").addEventListener("click", () => {
  const menu = document.getElementById("menu-container");
  menu.classList.toggle("show");
  menu.classList.toggle("hide");
  console.log(menu);
});

document.getElementById("theme").addEventListener("click", () => {
  const menu = document.getElementById("data-theme");
  menu.classList.toggle("light");
  menu.classList.toggle("dark");
  console.log(menu);
});