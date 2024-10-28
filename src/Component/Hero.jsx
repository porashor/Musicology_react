import React from 'react'
import BgImg from "../assets/product/hero.png"
const Hero = () => {
  return (
    // <!-- hero section here  -->
    <section className="hero" id="hero">
        {/* <!-- hero container section  --> */}
        <div className="hero_container">
            {/* <!-- details secrion  --> */}
            <div className="hero_details">
                <h1 className="hero_tile">
                    Photographer 
                </h1>
                <p className="hero_para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iusto praesentium ipsam consequuntur dignissimos! Possimus iste illum amet ratione! Laboriosam similique vel deserunt debitis animi aliquid at illum, soluta modi!
                </p>
                <button className="hero_btn">Register</button>
            </div>
        </div>
    </section>
  )
}

export default Hero
