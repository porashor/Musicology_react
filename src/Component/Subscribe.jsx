import React from 'react'
import Header from './Header'

const Subscribe = () => {
  return (
    // <!-- subcribe section  -->
    <section className="subscribe" id="subscribe">
        <div className="subscribe_container">
            {/* <!-- header area  --> */}
            <Header head={"subscribe"}/>
            {/* <!-- main section  --> */}
            <div className="subscribe_item">
                <input type="email" placeholder="your email" name="email" id="" class="subscribe_item_email" />
                <input type="button" value="subscribe" class="subscribe_item_btn" />
            </div>
        </div>
    </section>
  )
}

export default Subscribe
