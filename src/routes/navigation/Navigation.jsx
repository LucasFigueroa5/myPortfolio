import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Collapse, initTE } from "tw-elements";
import firma from "../../assets/images/firma2.png";
import style from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(prevClick => !prevClick); // Toggle the click state

  const closeMenu = () => setClick(false); // Function to close the menu

  useEffect(() => {
    initTE({ Collapse });
  }, []);


  const handleOptionClick = () => {
    const collapseElement = document.getElementById("navbarSupportedContent2"); // Get the collapsible element
    const collapseInstance = Collapse.getInstance(collapseElement); 
    if (collapseInstance) {
      collapseInstance.hide();// Get the Collapse instance
  };
};

  return (
    <div className={style.maxContainer}>
      <nav
        className={`${style.navContainer} relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4`}
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded='false'
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li
                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1 navbtn"
                data-te-nav-item-ref
                style={{ cursor: 'pointer' }}                
              >
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={handleOptionClick}
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                >
                  Home
                </Link>
              </li>
              <li
                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                data-te-nav-item-ref
                style={{ cursor: 'pointer' }}
              >
                <Link
                   to="about"
                   spy={true}
                   smooth={true}
                   offset={0}
                   duration={500}
                   onClick={handleOptionClick}
                   className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                >
                  About Me
                </Link>
              </li>
              <li
                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                data-te-nav-item-ref
                style={{ cursor: 'pointer' }}
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={handleOptionClick}
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                >
                  Projects
                </Link>
              </li>
              <li
                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                data-te-nav-item-ref
                style={{ cursor: 'pointer' }}
              >
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={handleOptionClick}
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                >
                  Skills
                </Link>
              </li>
              <li
                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                data-te-nav-item-ref
                style={{ cursor: 'pointer' }}
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={handleOptionClick}
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${style.socialBtns} px-3`}>
          <a href="https://github.com/LucasFigueroa5" target="blank">
            <FontAwesomeIcon icon={faSquareGithub} className={style.github} />
          </a>
          <a href="https://www.linkedin.com/in/lucas-figueroa-62b6b4205/" target="blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
