import React from 'react'
import "./jobs.css"
const Jobs = () => {

  const jobList = [
    {
      id: 1,
      imgg:"https://www.top-employers.com/contentassets/ed7e1b2cb1fd40cab269b2f1839ce5ce/oid00d200000000wi7ids0683y00000jvywbda3y000000iazmsgikkcyh5cad4etln20g6hz3b1gdurj453kqqoqlxgaaspdffalse3?format=jpeg&bgcolor=white&quality=75&height=75" ,
      title: "Front-End Developer",
      companyName: "Tata Consultancy Services",
      Loaction:"Mumbai",
      years:"Currently Working",
      desc:`I Joined TCS on the 16th of December 2021 as an “ Associate Software Developer “. I got trained in Front end Technologies and I completed my Training and mini Projects given by the team`,
    },
    {
      id: 2,
      imgg:"https://yt3.ggpht.com/32Z0ly3_Myojwy8BuBqcnt-DqIzlMDAKxhjCISvWx5WThn31ZvJqtBwl6pZlPYIPQblrPx8dAA=s900-c-k-c0x00ffffff-no-rj" ,
      title: "Full-Stack Developer",
      companyName: "Shape AI",
      Loaction:"Bangalore",
      years:"2.5 Months Training & internship",
      desc:` I learnt web design from basic to intermediate topics in web development from this internship  and design responsive and build some responsive website and Book My Show Clone`,
    },
    {
      id: 3,
      imgg:"https://media.glassdoor.com/sqll/1304466/techciti-technologies-squarelogo-1498653863223.png" ,
      title: "Software Developer",
      companyName: "Techciti technologies",
      Loaction:"Bangalore",
      years:"2.5 Months Internship",
      desc:`I have attended 2 months of internship in Techciti Technologies company. I learned HTML5, CSS, and Python and we developed an application known as “Tourism and Analysis”. My role was to make a front-end UI design`,
    },
  ]


  return (
    <div className='container mx-auto  mt-5 jopbs' >
      <h1 className='aboutSubText cont' >Jobs & Internships</h1>

      <div className="content ">

      {
            jobList.map(({id, title, desc,Loaction,companyName,imgg,years}) => (
              
              <div key={id} className="subContent ">
              <div className="jobimgWrapper">
              <img src={imgg} alt="" className='jobimage' />
              </div>
              <h1 className='jobtitle' >{title}</h1>
              <div className="wrapperMini">
              <h5 className='wrapperHeader' >{companyName}</h5>
                <h6 className='loctr' >{Loaction}</h6> 
              </div>
              <h6 className='hsix ' >{years} </h6>
              <p className='jobsDesc' >{desc}</p>
            </div>

            ))
          }

       

       
        
      </div>

    </div>
  )
}

export default Jobs