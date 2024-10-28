import React from 'react'
import Header from './Header'
import { stisiticData } from '../Data/data'

const Statistic = () => {
  return (
    // <!-- statistics section  -->
    <section class="statistic" id="statistic">
        <div class="statistic_container">
            {/* <!-- header area  --> */}
            <Header head={"Our statistics"}/>
            {/* <!-- main section  --> */}
            <ul class="statistic_list">
                {stisiticData.map((item, index)=>(
                <li key={index} class="statistic_item">
                    <h1 class="statistic_item_number">{item.state}</h1>
                    <h1 class="statistic_item_title">{item.title}</h1>
                </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Statistic
