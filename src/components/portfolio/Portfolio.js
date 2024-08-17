import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/LLpage1.png"
import IMG2 from "../../assets/ecommerce1.png"
import IMG3 from "../../assets/quizlet.jpg"
import IMG4 from "../../assets/ebay.jpg"
import IMG12 from "../../assets/digital.jpg"
import IMG5 from "../../assets/portfolio2.jpg"
import IMG6 from "../../assets/portfolio6.jpg"
import IMG7 from "../../assets/netflix4.png"
import IMG8 from "../../assets/logoPantryPal.png"
import IMG9 from "../../assets/space_home.png"
import IMG10 from "../../assets/quiz.jpg"
import IMG11 from "../../assets/stockanalysz2.jpg"
import IMG13 from "../../assets/onlinecourse.png"
export default function Portfolio() {
  const data =[

   {
    id:1,
    title:"Pantry Pal ",
    image:IMG8,
    github:" https://github.com/irfanariyaz/PantryPal",
    demo:" https://cohort-pantrypal.onrender.com",
},
{
  id:2,
  title:"Stockanalysz",
  image:IMG11,
  github:" https://github.com/irfanariyaz/stockanalysz.git ",
  demo:" https://github.com/irfanariyaz/stockanalysz.git ",
},
{
  id:3,
  title:"Quizlet",
  image:IMG3,
  github:" https://github.com/irfanariyaz/quizlet",
  demo:" https://quizlet-flf1.onrender.com",
},
{
  id:4,
  title:"Ebay clone(web3.0) App ",
  image:IMG4,
  github:"https://github.com/irfanariyaz/ebay-clone",
  demo:" https://ebay-clone-build.vercel.app/",
},  

  {
    id:5,
    title:"NETFLIX CLONE",
    image:IMG7,
    github:"https://github.com/irfanariyaz/netflix-clone ",
    demo:"https://netflix-sqgb.onrender.com ",
},
    {
        id:6,
        title:"LOCAL LIBRARY APP",
        image:IMG1,
        github:" https://github.com/irfanariyaz/locallibrary.git ",
        demo:"https://afternoon-beyond-00881.herokuapp.com/catalog/",
    },
    {
      id:7,
      title:"ECOMMERCE APP",
      image:IMG2,
      github:"https://github.com/irfanariyaz/ecomm",
      demo:"https://ecommerce-blm7.onrender.com",
    },
  {
    id:8,
    title:"Onlinecourse",
    image:IMG13,
    github:"https://github.com/irfanariyaz/onlinecourse",
    demo:"https://irfan.us-south.cf.appdomain.cloud/onlinecourse",
},
{
  id:9,
  title:"Digital Business Card",
  image:IMG12,
  github:"https://github.com/irfanariyaz/digital-card",
  demo:"https://github.com/irfanariyaz/digital-card",
},
{
  id:10,
  title:"Quiz App",
  image:IMG10,
  github:"https://github.com/irfanariyaz/quizzical",
  demo:"https://quizzical-opal.vercel.app/",
},
{
  id:11,
  title:"Space Website",
  image:IMG9,
  github:"https://github.com/irfanariyaz/space_website",
  demo:"https://github.com/irfanariyaz/space_website",
},
{
  id:12,
  title:"Todo (DjangoREST)",
  image:IMG6,
  github:"https://github.com/irfanariyaz/DjangoREST-Todo",
  demo:"https://github.com/irfanariyaz/DjangoREST-Todo",
},
{
  id:13,
  title:"To do App",
  image:IMG6,
  github:"https://github.com/irfanariyaz/Todo",
  demo:"https://github.com/irfanariyaz/Todo",
},

{
  id:14,
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
