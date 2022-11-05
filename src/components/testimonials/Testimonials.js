import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avtr1.jpg"
import AVTR2 from "../../assets/avtr2.jpg"
import AVTR3 from "../../assets/avtr3.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Testimonials() {
  const data = [
    {
      avatar:AVTR1,
      review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde magnam quia cupiditate recusandae quae error autem similique consectetur? Eius aspernatur perferendis, magni accusamus quae facere vero voluptates consequuntur numquam.",
      name:"user1",
    },
    {
      avatar:AVTR2,
      review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde magnam quia cupiditate recusandae quae error autem similique consectetur? Eius aspernatur perferendis, magni accusamus quae facere vero voluptates consequuntur numquam.",
      name:"user2",
    },
    {
      avatar:AVTR3,
      review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde magnam quia cupiditate recusandae quae error autem similique consectetur? Eius aspernatur perferendis, magni accusamus quae facere vero voluptates consequuntur numquam.",
      name:"user3",
    },
    
  ]
  return (
    <section id='testimonials'>
     <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
       modules={[Navigation, Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
      >
      {
          data.map(({name,review,avatar},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
          </SwiperSlide>

            )
          })
        }

        
        </Swiper>
    </section>
  )
}
