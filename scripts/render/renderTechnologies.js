import { frameworks, languages, other } from "../../data/technologies.js";
import { generateCards } from "../utils/generateHTML.js";

export function renderTechCards() {
  document.querySelector(".js-language-container").innerHTML =
    generateCards(languages);

  document.querySelector(".js-framework-container").innerHTML =
    generateCards(frameworks);

  document.querySelector(".js-other-container").innerHTML =
    generateCards(other);
}
