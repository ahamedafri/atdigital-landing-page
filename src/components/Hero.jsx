import React from 'react';
import HeroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={HeroImg} alt="Big Image" className="w-auto h-auto object-cover" />  
      <div className="p-4 hero-content-wrapper md:w-2/5 md:h-2/5 md:pb-14 md:absolute md:top-3/4 md:left-12 z-50" style={{ backgroundImage: 'linear-gradient(to right, #4DCA79, #1CBDDD)'}}>  {/* Apply styles for md */}
        <p className="text-white md:text-4xl md:p-6 font-semibold text-2xl ">
          We crush your competitors, goals, And sales records - without The B.S.
        </p>
        <button className="text-white bg-Secondary px-5 py-1 my-2 md:ml-5 rounded">
          GET FREE CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default Hero;
