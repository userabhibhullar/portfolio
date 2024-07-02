import { projects } from "../../data/projects.js";
import {
  generateLanguageTags,
  generateFrameworkTags,
} from "../utils/generateHTML.js";

export function renderProjects() {
  let html = ``;

  projects.forEach((project) => {
    html += `
            <div class="big-projects-card">
                <div class="project-thumbnail">
                    <img src=${project.thumnail} alt="" />
                    <a href=${
                      project.link
                    } target="_blank" class="project-thumbnail-tooltip" >view on ${
      project.destination
    }</a>
                </div>
                <div class="project-details">
                <a href=${project.link} target="_blank">
                <div class="project-title">
                    ${project.title}
                </div>
                </a>
                <div class="project-call-to-action">
                    <a class="link-primary" target="_blank" href=${
                      project.link
                    }>${project.destination}</a>
                </div>
                <div class="project-tech-stack">
                    <div class="project-programming-language">
                        ${generateLanguageTags(project.language)}
                    </div>
                    <div class="project-frameworks">
                        ${generateFrameworkTags(project.framework)}
                    </div>
                </div>
            </div>
        `;
  });

  document.querySelector(".js-project-container").innerHTML = html;
}
