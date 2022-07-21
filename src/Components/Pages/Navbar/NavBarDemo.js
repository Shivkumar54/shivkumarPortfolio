import React from 'react'
import "./navbar.css"
const Navbar = () => {

    const NavList = [
        {
            id: 1,
            title: "Home",
        },
        {
            id: 2,
            title: "About",
        },
        {
            id: 3,
            title: "Jobs & Internships",
        },
        {
            id: 4,
            title: "Projects",
        },
        {
            id: 5,
            title: "Experience",
        },
        {
            id: 6,
            title: "Contact",
        },
       
    ]

  return (
      <div className='navBase'>
          <div className='navroot container'>
          <div className="navLogo">
          <h5>Shivkumar</h5>
          </div>  
          <div className="navLinks">
              <ul>
                      {NavList.map((eachList) => (
                  
                  <li>{eachList.title}</li>
              ))}
                  
          </ul>
          </div>  
    </div>
      </div>
  )
}

export default Navbar