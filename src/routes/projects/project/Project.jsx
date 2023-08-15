import React, { useEffect } from "react";
import { Modal, Ripple, initTE } from "tw-elements";
import style from './Project.module.css'
import pokemon from '../../../assets/images/pokemons.jpg'
import monos from '../../../assets/images/monos.jpg'
import pod from '../../../assets/images/podcasts.jpg'
const Project = () => {
  let projects = [
    {
      name: "Pokemon App",
      url: "https://pokeapp-lucasfigueroa.vercel.app/",
      image: pokemon,
      description:
        "This is an application that allows searching for Pokémon from an API and creating them. Technologies used: JavaScript, React, Redux, Express, Node.js, Sequelize, Postgresql. ",
    },
    {
      name: "Mighty Monkey Club",
      url: "https://mighty-monkey-pf.vercel.app/",
      image: monos,
      description:
        "This is an app to manage a sports club, where users can become members, book slots for sports activities, view updates, and perform other actions. The administrator can manage users, sports, courts, and membership plans.",
    },
    {
      name: "Podcasts",
      url: "https://lucasfigueroa5.github.io/Sprint1_Podcasts/",
      image: pod,
      description:
        "This is my first static app, it's made solely with HTML and CSS. It's about podcasts imported from Spotify...",
    },
   
  ];

  
  
  console.log(projects)

  useEffect(() => {
    initTE({ Modal, Ripple });
  }, []);

  return (
    <div className={style.cardsContainer}>
      {projects.map((proy, index) => (
        
        <div key={proy.name}>
          <button
            type="button"
            className={`${style.btnCard} inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-forwards`}
            data-te-toggle="modal"
            data-te-target={`#exampleModalCenter-${index}`}
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {proy.name}
          </button>
          <div
            data-te-modal-init
            className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id={`exampleModalCenter-${index}`}
            tabIndex="-1"
            aria-labelledby={`exampleModalScrollableLabel-${index}`}
            aria-modal="true"
            role="dialog"
          >
            <div
              data-te-modal-dialog-ref
              className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
            >
              {/* Modal content */}
              <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                {/* Modal header */}
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  <h5
                    className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                    id="exampleModalScrollableLabel"
                  >
                    {proy.name}
                  </h5>
                 
                  <button
                    type="button"
                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <img className={style.image} src={proy.image} alt={proy.name} />
                {/* Modal body */}
                <div className="relative p-4">
                  <p>{proy.description}</p>
                </div>
                {/* Modal footer */}
                <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  <a href={proy.url}>
                    <button
                      type="button"
                      className={` ${style.btnCard} ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Visit the site
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
