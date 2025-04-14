import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import {img} from "./data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselStyle from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus= {false}
      >
        {img?.map((imgItem, index) => {
            return <img key={index} src={imgItem} />
        })}
      </Carousel>
      <div className= {carouselStyle.hero_img}></div>
    </>
  );
}

export default CarouselEffect;