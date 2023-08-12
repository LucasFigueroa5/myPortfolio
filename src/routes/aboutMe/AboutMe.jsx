import React from 'react'
import lucas from '../../assets/images/lucas.png'

const AboutMe = () => {
    console.log('esto es about')
  return (
    <div id="about">
        <h1>ABOUT ME</h1>
        <img src={lucas} alt="#" />
    </div>
  )
}

export default AboutMe