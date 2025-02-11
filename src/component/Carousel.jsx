import React, { useEffect } from "react";
import "./Carosel.css";
import Aos from 'aos';
import 'aos/dist/aos.css'


function Carousel () {
  // Initialize AOS
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <div className="img">
        <div className="OnlineCourses"></div>
        <div className="hero-content">
           <h1 className="Education" data-aos="zoom-in-right" data-aos-duration="1000"><b>Welcome to <span className="links">Boldlink</span> <br />Technology</b></h1>
           <h5 className="p-1 Embark" data-aos="fade-right" data-aos-duration="1000"><b>Embark on an exciting journey of learning and innovation with our <br />top-notch programming courses</b></h5>
           <button className="learn" data-aos="flip-down" data-aos-duration="1400" data-aos-delay="400">Learn More</button>
        </div>
    </div>
  );
};

export default Carousel;

