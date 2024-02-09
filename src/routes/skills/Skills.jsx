import React from "react";
import style from "./Skills.module.css";
import js from "../../assets/images/techskills/js.png";
import reactjs from "../../assets/images/techskills/react.png";
import next from "../../assets/images/techskills/next.png";
import redux from "../../assets/images/techskills/redux.png";
import sequelize from "../../assets/images/techskills/sequelize.png";
import express from "../../assets/images/techskills/express.png";
import postgresql from "../../assets/images/techskills/postgresql.png";
import node from "../../assets/images/techskills/node.png";

const Skills = () => {
  let techSkills = [
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "ReactJs",
      image: reactjs,
    },
    {
      name: "Redux",
      image: redux,
    },
    {
      name: "NextJs",
      image: next,
    },
    {
      name: "Tailwind",
      image: js,
    },
    {
      name: "PostgreSQL",
      image: postgresql,
    },
    {
      name: "ExpressJs",
      image: express,
    },
    {
      name: "Sequelize",
      image: sequelize,
    },
    {
      name: "NodeJs",
      image: node,
    },
  ];
  let softSkills = [
    "Adaptability",
    "Empathy",
    "Creativity",
    "Resilience",
    "Teamwork",
  ];

  return (
    <div className={style.skillsContainer} id="skills">
      <div className={style.marginSkills}>
        <h1>
          <span className={style.tags}>#</span>Skills
        </h1>
        <div className={style.softSkills}>
          <h3>Soft Skills</h3>
          <div className={style.skillsFlex}>
            {softSkills &&
              softSkills.map((skill, index) => {
                return (
                  <div key={index} className={style.skillContainer}>
                    <h4>{skill}</h4>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={style.techSkills}>
          <h3>Tech Skills</h3>
          <div className={style.techSkillsFlex}>
            {techSkills &&
              techSkills.map((skill, index) => {
                return (
                  <div key={index} className={style.techSkill}>
                    <img src={skill.image} alt={skill.name} />
                    <h4>{skill.name}</h4>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
