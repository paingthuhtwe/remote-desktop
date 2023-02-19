const toggle = document.querySelector("#toggle");
const toggleMenu = document.querySelector("#toggleMenu");
const body = document.querySelector("html");
toggle.onclick = setTheme;
toggleMenu.onclick = setTheme;

function setTheme() {
  let theme = localStorage.getItem("theme");
  if (theme == "light") {
    localStorage.setItem("theme", "dark");
  } else if (theme == "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  dark();
}
function dark() {
  let theme = localStorage.getItem("theme");
  if (theme == "dark") {
    body.classList.add("dark");
    toggle.checked = true;
    toggleMenu.checked = true;
  } else if (theme == "light") {
    body.classList.remove("dark");
    toggleMenu.checked = false;
  }
}
dark();
