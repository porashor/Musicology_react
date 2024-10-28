import React from 'react'
import Header from "../Component/Header"
import { pricingData } from '../Data/data'
const Pricing = () => {
  return (
    // <!-- pricing section  -->
    <section className="pricing" id="pricing">
        <div className="pricing_container">
            {/* <!-- header area  --> */}
            <Header head="Pricing"/>
            {/* <!-- main section  --> */}
            <ul className="pricing_list">
                {pricingData.map((item, index)=>(
                  <li key={index} class="pricing_item">
                  <img src={item.img} alt="" class="pricing_item_image"/>
                  <h1 class="pricing_item_title">{item.title}</h1>
                  <p class="pricing_item_para">
                      {item.details}
                  </p>
                  <button class="pricing_item_btn">{item.btn}</button>
              </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Pricing
