import React from 'react'
import HomeImage from "../../images/homeImgg.png"
import "./home.css"
import Resume from "../../Resume/Resume.pdf"
import { useTypewriter, Cursor} from 'react-simple-typewriter'
const Home = () => {

    const {text} = useTypewriter({
        words: ['Front end Developer', 'Web designer'],
        loop: 0 // Infinit
      })

  return (
      <div className=' homeContainer container'> 
          <div className="imager">
              <img src={HomeImage} alt=""  />
          </div>
          
          <div className=" texter">
              <h1 className='heroHeading'>Hello I'm <br />
                  <span>Shivkumar M</span>
              </h1>
              <h2 className='typewriterText' >{text} <Cursor /> </h2> 
              <p className='para fs-5' >I'm a Front end Developer specialized in ReactJS, JavaScript HTML & CSS. <br /> Web designer specializing in Adobe-XD and Figma.</p>
              
              <div className="buttonwrap">
              <a href={Resume} download='Resume'><button className='primary' type="submit">Download CV</button></a>
              <button className='secondary' type="submit">Contact Me</button>
              </div>
          </div>
          
      </div>
  )
}

export default Home