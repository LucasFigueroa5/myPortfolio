import React, { useState } from 'react';
import style from './Arrows.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

const Arrows = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['home', 'about', 'projects', 'skills', 'contact'];

  const scrollToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      document.getElementById(sections[currentSection + 1]).scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToPreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      document.getElementById(sections[currentSection - 1]).scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={style.arrowsContainer}>
      <FontAwesomeIcon className={`animate-pulse animate-infinite animate-duration-[4000ms] animate-ease-out animate-normal animate-fill-forwards ${style.arrow}`} icon={faArrowUpLong} onClick={scrollToPreviousSection} />
      <FontAwesomeIcon className={`animate-pulse animate-infinite animate-duration-[4000ms] animate-ease-out animate-normal animate-fill-forwards ${style.arrow}`} icon={faArrowDownLong} onClick={scrollToNextSection} />
    </div>
  );
};

export default Arrows;