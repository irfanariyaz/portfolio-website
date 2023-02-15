import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/LLpage1.png"
import IMG2 from "../../assets/ecommerce.png"
import IMG3 from "../../assets/onlinecourse.png"
import IMG4 from "../../assets/digitalcard.png"
import IMG5 from "../../assets/portfolio4.jpg"
import IMG6 from "../../assets/portfolio6.jpg"
import IMG7 from "../../assets/netflix4.png"
import IMG8 from "../../assets/ebay.png"
import IMG9 from "../../assets/space_home.png"
import IMG10 from "../../assets/quizlet.png"

export default function Portfolio() {
  const data =[
    {
      id:1,
      title:"Quizlet ",
      image:IMG10,
      github:"https://github.com/irfanariyaz/quizlet",
      demo:"https://github.com/irfanariyaz/quizlet",
  },
    {
      id:2,
      title:"Ebay clone(web3.0) App ",
      image:IMG8,
      github:"https://github.com/irfanariyaz/ebay-clone",
      demo:" https://ebay-clone-build.vercel.app/",
  },
  {
    id:3,
    title:"NETFLIX CLONE",
    image:IMG7,
    github:"https://github.com/irfanariyaz/netflix-clone ",
    demo:"https://github.com/irfanariyaz/netflix-clone ",
},
    {
        id:4,
        title:"LOCAL LIBRARY APP",
        image:IMG1,
        github:" https://github.com/irfanariyaz/locallibrary.git ",
        demo:"https://afternoon-beyond-00881.herokuapp.com/catalog/",
    },
    {
      id:5,
      title:"ECOMMERCE APP",
      image:IMG2,
      github:"https://github.com/irfanariyaz/ecomm",
      demo:"https://irfana-ecommerce.herokuapp.com/",
    },
  {
    id:6,
    title:"Onlinecourse",
    image:IMG3,
    github:"https://github.com/irfanariyaz/onlinecourse",
    demo:"https://irfan.us-south.cf.appdomain.cloud/onlinecourse",
},
{
  id:7,
  title:"Digital Business Card",
  image:IMG4,
  github:"https://github.com/irfanariyaz/digital-card",
  demo:"https://github.com/irfanariyaz/digital-card",
},
{
  id:8,
  title:"Quiz App",
  image:IMG5,
  github:"https://github.com/irfanariyaz/quizzical",
  demo:"https://github.com/irfanariyaz/quizzical",
},
{
  id:9,
  title:"Space Website",
  image:IMG9,
  github:"https://github.com/irfanariyaz/space_website",
  demo:"https://github.com/irfanariyaz/space_website",
},
{
  id:10,
  title:"Todo (DjangoREST)",
  image:IMG6,
  github:"https://github.com/irfanariyaz/DjangoREST-Todo",
  demo:"https://github.com/irfanariyaz/DjangoREST-Todo",
},
{
  id:11,
  title:"To do App",
  image:IMG6,
  github:"https://github.com/irfanariyaz/Todo",
  demo:"https://github.com/irfanariyaz/Todo",
},

{
  id:12,
  title:"Sample Portfolio Website",
  image:IMG5,
  github:"https://github.com/irfanariyaz/portfoliowebsite",
  demo:"https://github.com/irfanariyaz/portfoliowebsite",
},
  
]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(item=>{
          return(
            <article key={item.id} className=' portfolio__item'>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title.toUpperCase()}</h3>          
            <div className="portfolio__item-cta">
              <a href={item.github} className='btn ' target="_blank">GitHub</a>
              <a href={item.demo} className='btn  btn-primary' target="_blank">Demo</a>
            </div>
          </article>
          )
        })}
       </div>
    </section>
  )
}
