import React from 'react'
import img1 from "../assets/product/card1.png"
import img2 from "../assets/product/card2.png"


const Practise = () => {
  return (
    // <!-- practise section  -->
    <section className="practise" id="practise">
        {/* <!-- 1st review --> */}
        <div className="practise_container">
            {/* <!-- image section  --> */}
            <img src={img1} class="practise_image" alt="no photo"/>
            {/* <!-- details section  --> */}
            <div className="practise_details">
                <h1 className="practise_details_title">
                    Best dance
                </h1>
                <div className="practise_details_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum id qui commodi obcaecati dolor totam adipisci explicabo iusto hic!
                </div>
                <button className="practise_details_btn">
                    Read more
                </button>
            </div>
        </div>
        {/* <!-- second review  --> */}
        <div className="practise_container">
            {/* <!-- details section  --> */}
            <div className="practise_details">
                <h1 className="practise_details_title">
                    Best dance
                </h1>
                <div className="practise_details_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum id qui commodi obcaecati dolor totam adipisci explicabo iusto hic!
                </div>
                <button className="practise_details_btn">
                    Read more
                </button>
            </div>
            {/* <!-- image section  --> */}
            <img src={img2} className="practise_image" alt="no photo"/>
        </div>
    </section>
  )
}

export default Practise
