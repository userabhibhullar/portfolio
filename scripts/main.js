import { renderProjects } from "./render/renderProjects.js";
import { renderTechCards } from "./render/renderTechnologies.js";

var hamburger = document.querySelector(".check");
var navMenu = document.querySelector(".header-links");

hamburger.addEventListener("change", () => {
  navMenu.classList.toggle("opened");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.remove("opened");
  hamburger.checked = false;
});

renderTechCards();
renderProjects();
