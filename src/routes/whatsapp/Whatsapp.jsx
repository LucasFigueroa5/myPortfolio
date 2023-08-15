import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "./Whatsapp.module.css";

const Whatsapp = () => {
  return (
    <div className={style.wappContainer}>
      <a
        href="https://api.whatsapp.com/send?phone=543875053015"
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default Whatsapp;
