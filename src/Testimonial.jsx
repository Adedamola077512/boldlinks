import React from "react";
import './Testimonial.css'
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const testimonials = [
  {
    img: "https://media.licdn.com/dms/image/v2/C5603AQGmXYCLqF2yKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1615546451997?e=1744243200&v=beta&t=Lm7XbSAvs-g5MlNF531SLvjMVydDE2lxPoqHtBe2XgQ ",
    quote: "It was an incredible experience where I explored both Back-end and Front-end development. I learned not just about various languages and tools but also the principles of writing clean code. The journey went beyond syntax, diving into software architecture.",
    name: "Chigozie Joshua",
    profession: "Software Developer at Bluecode",
  },
  {
    quote: "At Boldlinks, we weren't just taught programming syntax but we learnt to build. We were instilled with the discipline and the mental fortitude of software engineer,it was an awesome experience. In less than a year of training.",
    img: " https://media.licdn.com/dms/image/v2/D4D03AQHxKAHVupO8uA/profile-displayphoto-shrink_800_800/B4DZOdvn1xHMAc-/0/1733518328237?e=1744243200&v=beta&t=UEAo61_nnCbm8uFEaofIzyYVfn-WBc2ORfsRUN21Br4 ",
    name: "Ibrahim Olayioye",
    profession: "UI/UX Designer",
    active: true,
  },
  {
    quote: "I owe Boldlinks Technology so much because it gave me more than the penny I paid. Today I work as a developer with MYSOL Nigeria Limited where I work with other developers to improve the HRMS application built on LARAVEL FRAMEWORK.",
    img: " https://media.licdn.com/dms/image/v2/C5603AQHcMbaFQHfijQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639482328704?e=1744243200&v=beta&t=VXXbQElnWST1ThXFJZXp0_ufsZ-yzNY2-JuVlWsnyiQ ",
    name: "Aderemi Suliamon",
    profession: "Project Manager",
  },
];

const Testimonial = () => {
  return (
    <div className="container mt-5" id="TESTIMONIALS">
      <h5 className="text-center TEST">TESTIMONIALS</h5>
      <h1 className="text-center"><b>What Say Our Students</b></h1>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav={false}
        dots={true}
        autoplay
        autoplayTimeout={3000}
        responsive={{
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            id="text-card"
            className={`testimonial text-center card p-3 ${testimonial.active ? "bg-warning text-white" : "bg-white"}`}
          >
            {/* <div className="quote display-4 text-warning">&#8220;</div> */}
            <img
              src={testimonial.img}
              alt="Client"
              className="rounded-circle mx-auto d-block mb-3"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="client font-weight-bold text-center"><h6><b>{testimonial.name}</b></h6></div>
            <div className="profession text-center"><b>{testimonial.profession}</b></div>
            <p>{testimonial.quote}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Testimonial;
