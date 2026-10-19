import "./style.css";

import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

homePage();

// menuPage();

// aboutPage();

const home = document.getElementById("home");
home.addEventListener("click", function (e) {
  content.replaceChildren();
  const menu = document.getElementById("menu");
  menu.style.cssText = "";
  const about = document.getElementById("about");
  about.style.cssText = "";

  homePage();
});

const menu = document.getElementById("menu");
menu.addEventListener("click", function (e) {
  content.replaceChildren();
  const home = document.getElementById("home");
  home.style.cssText = "";
  const about = document.getElementById("about");
  about.style.cssText = "";
  menuPage();
});

const about = document.getElementById("about");
about.addEventListener("click", function (e) {
  content.replaceChildren();
  const menu = document.getElementById("menu");
  menu.style.cssText = "";
  const home = document.getElementById("home");
  home.style.cssText = "";
  aboutPage();
});
