import React from "react";
import lucas from '../../assets/images/port.png'
import style from './Home.module.css'

const Home = () => {
  console.log("esto es home");
  return (
    <div className={style.homeContainer} id="home">
      <h1 className={style.title}>Lucas Figueroa,</h1>
      <img className={style.lucas} src={lucas} alt="#" />
    </div>
  );
};

export default Home;
