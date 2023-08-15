import React from 'react'
import Home from '../home/Home.jsx'
import AboutMe from '../aboutMe/AboutMe.jsx'
import Projects from '../projects/Projects.jsx'
import Skills from '../skills/Skills.jsx'
import Contact from '../contact/Contact.jsx'
import Arrows from '../arrows/Arrows.jsx'

const Page = () => {
  return (
    <div>
      <Arrows />
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
    </div>
  )
}

export default Page