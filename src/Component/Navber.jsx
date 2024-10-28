import React from 'react'
import image from "../assets/logo2.png"
const Navber = () => {
  return (
    <div>
      <section id="nav" className="nav">
      {/* container section */}
        <div className="nav_Container">
            {/* <!-- logo section here  --> */}
            <div className="logo">
                <img src={image} alt=""/>
            </div>
            {/* <!-- main navber here  --> */}
            <nav className="nav_area">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav_item">
                        <a href="#">Product</a>
                    </li>
                    <li className="nav_item">
                        <a href="#">Promo</a>
                    </li>
                    <li className="nav_item">
                        <a href="#">About</a>
                    </li>
                    <li className="nav_item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            {/* <!-- search section  --> */}
            <div className="search">
                <i className="material-icons">search</i>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Navber
