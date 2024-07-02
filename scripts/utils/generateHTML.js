import {
  findFrameworkByID,
  findLanguageByID,
} from "../../data/technologies.js";

export function generateCards(cardList) {
  let html = ``;
  cardList.forEach((card) => {
    html += `
        <div class="technology-card">
            <div class="technology-image-container">
                <img
                      class="technology-image"
                      src=${card.image}
                />
            </div>
            <div class="technology-detail">
                <div class="technology-name">${card.name}</div>
                <div class="technology-level">Level: ${card.level}</div>
            </div>
        </div>
    `;
  });
  return html;
}

export function generateLanguageTags(tagList) {
  let html = ``;
  tagList.forEach((tag) => {
    let matchingLanguage = findLanguageByID(tag);
    html += `
      <div class="tech-stack">
          <img src=${matchingLanguage.image} />
          <div>${matchingLanguage.name}</div>
       </div>
    `;
  });
  return html;
}

export function generateFrameworkTags(tagList) {
  let html = ``;
  tagList.forEach((tag) => {
    let framework = findFrameworkByID(tag);
    html += `
      <div class="tech-stack">
          <img src=${framework.image} />
          <div>${framework.name}</div>
       </div>
    `;
  });
  return html;
}
