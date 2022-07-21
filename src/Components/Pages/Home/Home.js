import React from 'react'
import HomeImage from "../../images/homeImgg.png"
import "./home.css"
import Resume from "../../Resume/Resume.pdf"
const Home = () => {
  return (
      <div className='container homeContainer'> 
          
          <div className="imager">
              <img src={HomeImage} alt=""  />
          </div>

          <div className="texter">
              <h1 className='heroHeading'>Hello I'm <br />
                  <span>Shivkumar M</span>
              </h1>
              <h3 className='typewriterText' >Front end React developer</h3>
              <p className='heroParagraph' >I'm a Developer specialized in ReactJS, JavaScript HTML & CSS. Web designer specializing in Adobe-XD and Figma.</p>
              
              <div className="buttonwrap">
              <a href={Resume} download='Resume'><button className='primary' type="submit">Download CV</button></a>
              <button className='secondary' type="submit">Download CV</button>
              </div>
          </div>
          
      </div>
  )
}

export default Home