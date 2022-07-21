import React from 'react'
import Signature from "../../images/signature.png"
import "./footer.css"

const Footer = () => {
  return (
      <div className='footer' >
          <img src={Signature} alt=""  />
          <p> Copyright @ 2022 All copyright reserved </p>

    </div>
  )
}

export default Footer