const openMenu = document.querySelector("#openMenu");
const bgMenu = document.querySelector("#bg-menu");
const mainMenu = document.querySelector("#main-menu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.onclick = () => {
  bgMenu.style.left = "0px";
  mainMenu.style.left = "0px";
};
closeMenu.onclick = () => {
  bgMenu.style.left = "-100%";
  mainMenu.style.left = "-100%";
};
