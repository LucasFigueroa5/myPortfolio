import React from 'react'
import Home from '../home/Home.jsx'
import AboutMe from '../aboutMe/AboutMe.jsx'
import Proyects from '../proyects/Proyects.jsx'
import Skills from '../skills/Skills.jsx'
import Contact from '../contact/Contact.jsx'

const Page = () => {
  return (
    <div>
        <Home />
        <AboutMe />
        <Proyects />
        <Skills />
        <Contact />
    </div>
  )
}

export default Page