import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/img/carousel/bckg.jpg';
import ScrollDown from "../scroll-down/scroll-down.component";
import './my-carousel.style.css'

const MyCarousel = () => {
    return (
      <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>   
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={image} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
    )
}

export default MyCarousel