import React from 'react'
import "./experience.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import HTMl from "../../images/html.png"
import CSS from "../../images/css.png"
import Bootstrap from "../../images/bootstrap.png"
import JavaScript from "../../images/js.png"
import ReactImg from "../../images/react.png"
import Tailwind from "../../images/tailwind.png"
import Adobe from "../../images/xd.png"
import Figma from "../../images/figma.png"
import GitHub from "../../images/git.png"


const ExpList = [ 
  {
    id: 1,
    img: HTMl,
    title: "HTML",
  },
  {
    id: 2,
    img: CSS,
    title: "CSS",

  },
  {
    id: 3,
    img: Bootstrap,
    title: "Bootstrap",

  },
  {
    id: 4,
    img: JavaScript,
    title: "JavaScript",
  },
  {
    id: 5,
    img: ReactImg,
    title: "ReactJS",
  },
  {
    id: 6,
    img: Tailwind,
    title: "Tailwind CSS",
  },
  {
    id: 7,
    img: Adobe,
    title: "Adobe XD",
  },
  {
    id: 8,
    img: Figma,
    title: "Figma",
  },
  {
    id: 9,
    img: GitHub,
    title: "GitHub",

  },
]


const Experience = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  



  return (
    <div>
      <div className='container-sm rootExp' >
        <h1 className='aboutSubText  cont' >Experience</h1>
        <p>Some of the tools learnt to Build and Design the website</p>
          
          <div className="exp container">
        <Slider {...settings}>
          { ExpList.map(({ id, img, title,  }) => (
      
      
      <div key={id}   className='container rootLister' >
        <div  className=" expImgWrapper">
        <img className='expImg' src={img} alt="" />
        </div>
              <h1 className='expText'>{title}</h1>
</div>       


))}
        </Slider>
        </div>
        
</div>
      </div>
   
  )
}

export default Experience