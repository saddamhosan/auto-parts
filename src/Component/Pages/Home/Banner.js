import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner1 from '../../../images/banner-1.jpg';
import banner2 from '../../../images/banner-2.png';
import banner3 from '../../../images/banner-3.jpg';
import banner4 from '../../../images/banner-4.jpg';
import banner5 from '../../../images/banner-5.jpg';
import banner6 from '../../../images/banner-6.jpg';

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
      <div className="px-7 h-[70vh] mb-20">
        <Slider {...settings}>
          <div className="h-[70vh]">
            <img className="w-full h-full" src={banner1} alt="" />
          </div>
          <div className="h-[70vh]">
            <img className="w-full h-full" src={banner2} alt="" />
          </div>
          <div className="h-[70vh]">
            <img className="w-full h-full" src={banner3} alt="" />
          </div>
          <div className="h-[70vh]">
            <img className="w-full h-full" src={banner4} alt="" />
          </div>
          <div className="h-[70vh]">
            <img className="w-full h-full" src={banner5} alt="" />
          </div>
          <div className="h-[70vh]">
            <img className="w-full h-full" src={banner6} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default Banner;