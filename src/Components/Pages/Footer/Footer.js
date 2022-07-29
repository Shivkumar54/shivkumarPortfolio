import React from 'react'
import Signature from "../../images/signature.png"
import "./footer.css"
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {SiVercel} from "react-icons/si"

const Footer = () => {
  return (
      <div className='footer' >
          <a href="/" className='ft-img' >
                  <img src={Signature} alt="" />
                  </a>
      <h6>Follow me on </h6>
      <div className="social-icons d-flex gap-3">
        {/* <p><FaLinkedin size={20} /></p>
        <p><FaGithub size={20} /></p>
        <p><SiVercel size={20} /></p> */}

        <a a href = "https://www.linkedin.com/in/shivkumar-m-a7a49b205/" >
            <p><FaLinkedin size={20} /></p>
  </a>
  <a a href = "https://github.com/Shivkumar54" >
                    <p><FaGithub size={20} /></p>
            </a>
  <a a href = "https://vercel.com/shivkumar54" >
  <p><SiVercel size={20} /></p>
            </a>

      </div>
    </div>
  )
}

export default Footer


 
  