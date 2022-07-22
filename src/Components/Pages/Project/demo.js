import React, {useState} from 'react'
import projectData from "./ProjectData"
import "./project.css"
const Projects = () => {


  const [items, setItems] = useState(projectData)

  const CardList = items.map((eachItems) => {
    const { title, img, desc, siteLink, codeLink  } = eachItems;

              return(
                <div className='item1 col-12 col-md-6 col-lg-3 my-3' >
                <div className='projectWrapper' > 
                  {/* for Image  */}
                    <div className='RootImage' >
                    <img src ={img} alt="Menu Pic" className='img-fluid' />
                  </div>
                  {/* for Image  */}
                  {/* for Menu Description  */}
                  <div >
                      <div className='texter main-title pt-4 pb-3'>
                        <div className="d-flex justify-content-between">
                          <h1 className='projH' >{title}</h1>
                        </div>
                        <p>{desc}</p>   
                        
                        <div className="btn-wrapr ">
                          <a href={siteLink} className="primary alinker" >View Site</a>
                          <a href={codeLink} className="secondary alinker" >View Code</a>
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
      <div className='container projRoot ' >
        <h1 className='aboutSubText cont ' >Projects </h1>
      </div>

    <div className='menu-items container'>
      <div className='row'>
        <div className='col-12 mx-auto'>
          <div className='row my-4'>     
            {CardList}
          </div>
        </div>
      </div>
      
   </div>
    </div>
  )
}

export default Projects