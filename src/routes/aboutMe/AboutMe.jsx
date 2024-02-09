import React from "react";
import lucas from "../../assets/images/lucas.png";
import style from "./AboutMe.module.css";
import cvPdf from "../../assets/files/CV_Lucas_Figueroa_Fullstack.pdf";

const AboutMe = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const url = cvPdf;

    // Crear un elemento <a> para descargar el archivo
    const a = document.createElement("a");
    a.href = url;
    a.target = "blank";
    a.download = "CV_Lucas_Figueroa_Fullstack.pdf"; // Nombre del archivo que se descargará
    a.click();
  };
  return (
    <div className={style.aboutContainer} id="about">
      <div className={style.marginAbout}>
        <h1 className={style.sectionTitle}>
          <span className={style.tags}>#</span>About Me
        </h1>
        <p className={style.infoSec}>
          My passion for encouraging creativity and innovation, along with my
          knack for tackling challenges from an industrial design perspective,
          ignited a deep interest in exploring the technology realm. This
          journey led me to the dynamic field of web development, where I
          blended my skills. Now, I'm in a position to apply my expertise and
          empathy in business settings or teams, crafting impactful solutions
          and forging meaningful bonds.
        </p>
        <div className={style.cta}>
          <span className={style.spanCV}>You can download my CV here!</span>
          <a href="../../assets/files/CV_Lucas_Figueroa_Fullstack.pdf" download>
            <button
              onClick={handleDownload}
              className={`${style.btnDownload} bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
