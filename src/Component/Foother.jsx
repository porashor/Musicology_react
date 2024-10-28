import React from 'react'
import { footherNav } from '../Data/data'
import logo from "../assets/logo2.png"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Foother = () => {
  return (
    // <!-- foother section here  -->
    <section className="foother" id="foother">
        <div className="foother_container">
            {/* <!-- details section  --> */}
            <div className="foother_details">
                <img className="foother_details_logo" src={logo} alt=""/>
                <div className="foother_details_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vel corrupti facilis sit quas incidunt accusantium quos ad obcaecati amet totam rem nam delectus ipsam. Voluptatem sint architecto impedit totam ab repellat, harum esse ut tenetur aperiam sapiente beatae ipsum?
                </div>
                <div className="foother_details_icons">
                    <div><FaFacebook/></div>
                    <div><FaInstagram/></div>
                    <div><FaLinkedin/></div>
                </div>
            </div>
            {/* <!-- about nav  --> */}
            {footherNav.map((item, index)=>(
            <div key={index} className="foother_nav_about">
                <div className="foother_nav_about_header">{item.name}</div>
                <ul className="foother_nav_about_nav">
                    {item.nav.map((item, index)=>(
                        <li class="foother_about_nav_item" key={index}>
                            <a class="nav_name" href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Foother
