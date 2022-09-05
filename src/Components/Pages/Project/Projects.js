import React, { useState } from "react"
import projectData from "./ProjectData"
import ProjectImg from "../../images/projects.png"
import "./project.css"

const Projects = () => {
  const [items, setItems] = useState(projectData)

  const CardList = items.map((eachItems) => {
    const { title, img, desc, siteLink, codeLink } = eachItems

    return (
      <div className="item1 col-12 col-md-6 col-lg-3 my-3">
        <div className="projectWrapper">
          {/* for Image  */}
          <div className="RootImage">
            <img src={img} alt="Menu Pic" className="img-fluid" />
          </div>
          {/* for Image  */}
          {/* for Menu Description  */}
          <div>
            <div className="texter main-title pt-4 pb-3">
              <div className="d-flex justify-content-between">
                <h1 className="eachProjects">{title}</h1>
              </div>
              <p>{desc}</p>

              <div className="btn-wrapr ">
                <a href={siteLink} className="primary alinker">
                  View Site
                </a>
                <a href={codeLink} className="secondary alinker">
                  View Code
                </a>
              </div>
            </div>
          </div>
          {/* for Menu Description  */}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="container projRoot ">
        <div className="flexerImg">
          <img src={ProjectImg} alt="" />
        </div>
        <div className="flexertxt">
          <h1 className="projectHeading">Projects & Accomplishment</h1>
          <p className="projDesc">
            These are some of my projects and accomplishments, some project I
            did myself and some are from my "Internships" and from YouTube
            tutorials. Do Visit the site or View the code by clicking the
            buttons given below the project and leave your valuable feedbacks in
            contact page. <br /> Thankyou{" "}
          </p>
        </div>
      </div>

      <div className="menu-items container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row my-4">{CardList}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
