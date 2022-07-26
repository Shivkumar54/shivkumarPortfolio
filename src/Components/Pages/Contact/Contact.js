import React from 'react'
import ContactImage from "../../images/contact.png"
import "./contact.css"
const Contact = () => {
  return (
    <div className='contacter container ' >
      <div className="contact-img">
        <img src={ContactImage} alt="" width='100%' />
      </div>
      <div>
      <h1 className='aboutSubText cont'>Contact Me</h1>

        <p className='cont-desc' >Leave your valuable feedbacks, comments or message below  </p>
        <p className='note' > </p>

        <form action="https://getform.io/f/12111e44-c5e7-41d8-88a0-d3de5462a2d5" method='POST'>
          <input type="text" placeholder='Your Name' required />
          <input type="email" placeholder='Your Email' className='emailer' required />
          <textarea name="texter" id="" cols="40" rows="10" placeholder='Leave Your Message... '></textarea>

          <div className="buttonwrap">
              <button className='primary' type="submit">Submit </button>
             </div>

        </form>
      </div>
    </div>
  )
}

export default Contact