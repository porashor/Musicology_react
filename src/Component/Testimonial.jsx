import React from 'react'
import Header from './Header'
import { testimonialData } from '../Data/data'

const Testimonial = () => {
  return (
    // <!-- testimonial section  -->
    <section class="testimonial" id="testimonial">
        <div class="testimonial_container">
            {/* <!-- header area  --> */}
            <Header head={"Dance Tour"}/>
            {/* <!-- main section  --> */}
            <ul class="testimonial_list">
                {testimonialData.map((item, index)=>(
                    <li key={index} class="testimonial_item">
                    <img src={item.img} alt="" class="testimonial_item_image"/>
                    <h1 class="testimonial_item_title">{item.title}</h1>
                    <p class="testimonial_item_para">
                        {item.details}
                    </p>
                </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Testimonial