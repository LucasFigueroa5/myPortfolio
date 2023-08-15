import React from "react";
import style from "./Proyects.module.css";
import Proyect from "./proyect/Proyect";


const Proyects = () => {


  return (
    <div id="proyects" className={style.proyectsContainer}>
      <h2>PROYECTOS</h2>
      <Proyect />
    </div>
  );
};

export default Proyects;
