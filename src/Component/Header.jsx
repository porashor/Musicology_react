import React from 'react'

const Header = ({head}) => {
  return (
    <div>
        <h1 className="testimonial_header">{head}</h1>
        <h5 className="testimonial_sub_header">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure enim ratione obcaecati nemo eligendi?
        </h5>
    </div>
  )
}

export default Header
