import React from "react";
import lucas from "../../assets/images/lucas.png";
import style from "./AboutMe.module.css";

const AboutMe = () => {
  const handleDownload = () => {
    // Crear un objeto Blob con el contenido del archivo que deseas descargar
    const fileContent = "Contenido del archivo que deseas descargar";
    const blob = new Blob([fileContent], { type: "text/plain" });

    // Crear una URL para el Blob
    const url = window.URL.createObjectURL(blob);

    // Crear un elemento <a> para descargar el archivo
    const a = document.createElement("a");
    a.href = url;
    a.download = "nombre-del-archivo.txt"; // Nombre del archivo que se descargará
    a.click();

    // Liberar la URL del Blob
    window.URL.revokeObjectURL(url);
  };
  return (
    <div className={style.aboutContainer} id="about">
      <div className={style.marginAbout}>
        <h1>
          <span className={style.tags}>#</span>About Me
        </h1>
        <p>
          My passion for encouraging creativity and innovation, along with my
          knack for tackling challenges from an industrial design perspective,
          ignited a deep interest in exploring the technology realm. This
          journey led me to the dynamic field of web development, where I
          blended my skills. Now, I'm in a position to apply my expertise and
          empathy in business settings or teams, crafting impactful solutions
          and forging meaningful bonds.
        </p>
        <span className={style.spanCV}>You can download my CV here!</span>
        <a href="../../assets/files/CAB Dinner Menu 11x17in may23.pdf" download>
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
  );
};

export default AboutMe;
