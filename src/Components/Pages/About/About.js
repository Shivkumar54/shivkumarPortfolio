import React from 'react'
import AboutImage from "../../images/about.png"
import "./about.css"
import {FiArrowDown} from "react-icons/fi"

const About = () => {
  return (
    <div className="container about " >

      <div className="aboutHeader">
        <h1 className='aboutHeading' >Welcome to the<br /> <span className='abt-span' >About Section</span> <span className='scroller' > Please Scroll Below</span> <FiArrowDown className='downArrow' size={30} /> </h1>
        
      </div>

      <div className=' aboutRoot ' >
      <div className=" about-img">
        <img src={AboutImage} alt="" srcset="" width='100%' />
      </div>
      <div className=" abouttext">
        <h1 className='aboutSubText default-header' >About Me </h1>
        <p className='abt-para'>I'm Shivkumar M 22 years old completed BE in Computer Science stream in the year 2021 <br />
          <p></p>
          I'm a React JS developer with 6 months of experience, and 2+ years of experience in HTML and CSS. Web designer specializing in Adobe XD and Figma Tools.</p>
        
          <div className="buttonwrap">
              <button className='primary' type="submit">Linkedin</button>
              <button className='secondary' type="submit">Github</button>
              </div>
      </div>
      </div>
   </div>
  )
}

export default About