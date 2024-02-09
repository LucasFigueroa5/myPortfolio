import React from "react";
import style from "./Projects.module.css";
import Project from "./project/Project";
import Typewriter from "typewriter-effect";

const Projects = () => {
  return (
    <div id="projects" className={style.projectsContainer}>
      <div className={style.marginProjects}>
        <h1>
          <span className={style.tags}>#</span>Projects
        </h1>
        <Project />
        <div className={style.coming}>
          <h4>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("function ")
                  .typeString(
                    `<span class="${style.span}" style="color: #995869;">projects() {</span><br />`
                  )
                  .typeString('return "More projects coming soon!";<br />')
                  .typeString("};")
                  .start();
              }}
            />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
