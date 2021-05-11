import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const FitnessImage = ({ fitnessImage }) => {
  
  const createCarousel = fitnessImage.map((i) => 
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src={i}
      alt="First slide"
    />
  </Carousel.Item>
  )
    return (
<Carousel fade className='carousel'>
    {createCarousel}
</Carousel>
    )
}

export default FitnessImage;