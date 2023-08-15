import React from "react";
import lucas from "../../assets/images/lucasf1.png";
import fondo from "../../assets/images/fondolucas.png";
import style from "./Home.module.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={style.homeContainer} id="home">
      <h1 className={style.title}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString("I'm ")
            .typeString(`<span class="${style.span}" style="color: #995869;">Lucas Figueroa</span>`)
            .typeString(", full stack developer...")
            .start();
          }}
        />
      </h1>
      <img
        className={`animate-fade-left animate-once animate-delay-[1000ms] animate-duration-1000 animate-ease-in-out ${style.lucas}`}
        src={fondo}
        alt="#"
      />
      <img
        className={`animate-fade-up animate-once animate-duration-1000 animate-delay-[2500ms] animate-ease-in-out ${style.lucas}`}
        src={lucas}
        alt="#"
      />
    </div>
  );
};

export default Home;
