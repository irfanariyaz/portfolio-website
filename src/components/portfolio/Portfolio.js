import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"
export default function Portfolio() {
  const data =[
    {
        id:1,
        title:"LOCAL LIBRARY APP",
        image:IMG1,
        github:" https://github.com/irfanariyaz/locallibrary.git",
        demo:"https://afternoon-beyond-00881.herokuapp.com/catalog/",
    },
    {
      id:2,
      title:"TO-DO APP",
      image:IMG2,
      github:"https://github.com/irfanariyaz/Todo",
      demo:"https://github.com/irfanariyaz/Todo",
    },
  {
    id:3,
    title:"Onlinecourse",
    image:IMG3,
    github:"https://github.com/irfanariyaz/onlinecourse",
    demo:"https://irfan.us-south.cf.appdomain.cloud/onlinecourse",
},
{
  id:4,
  title:"Digital Business Card",
  image:IMG4,
  github:"https://github.com/irfanariyaz/digital-card",
  demo:"https://github.com/irfanariyaz/digital-card",
},
{
  id:5,
  title:"Quiz App",
  image:IMG5,
  github:"https://github.com/irfanariyaz/quizzical",
  demo:"https://github.com/irfanariyaz/quizzical",
},
{
  id:1,
  title:"To do App",
  image:IMG6,
  github:"https://github.com/irfanariyaz/DjangoREST-Todo",
  demo:"https://github.com/irfanariyaz/DjangoREST-Todo",
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
            <h3>{item.title}</h3>          
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
