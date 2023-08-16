import React from "react";
import style from "./Projects.module.css";
import Project from "./project/Project";

const Projects = () => {
  return (
    <div id="projects" className={style.projectsContainer}>
      <div className={style.marginProjects}>
        <h1>
          <span className={style.tags}>#</span>Projects
        </h1>
        <Project />
      </div>
    </div>
  );
};

export default Projects;
