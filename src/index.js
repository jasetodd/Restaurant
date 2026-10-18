import "./style.css";

import homePage from "./home.js";
import menuPage from "./menu.js";

// homePage()

menuPage();

const home = document.getElementById("home");
home.addEventListener("click", function (e) {
  content.replaceChildren();
  console.log(home);
  homePage();
});

const menu = document.getElementById("menu");
menu.addEventListener("click", function (e) {
  content.replaceChildren();
  menuPage();
});
