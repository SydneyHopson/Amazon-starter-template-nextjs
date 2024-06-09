import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="flex justify-center items-center ">
          <img 
            loading="lazy" 
            src="/AlltheFlavorsYouNeed.png" 
            alt="All the Flavors You Need" 
            className="max-h-full w-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center ">
          <img 
            loading="lazy" 
            src="/AlltheFlavorsYouNeed.png" 
            alt="All the Flavors You Need" 
            className="max-h-full w-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center ">
          <img 
            loading="lazy" 
            src="/AlltheFlavorsYouNeed.png" 
            alt="All the Flavors You Need" 
            className="max-h-full w-full object-contain"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
