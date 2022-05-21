import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Banner = () => {
     const settings = {
       dots: true,
       infinite: true,
       speed: 1500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
       cssEase: "linear",
     };
    return (
      <div className='p-7'>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
};

export default Banner;