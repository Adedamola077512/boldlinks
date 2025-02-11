import React from "react";
import "./Subjects.css";

// Import images from assets
import cat1 from "./assets/cat-1.jpg";
import cat2 from "./assets/cat-2.jpg";
import cat3 from "./assets/cat-3.jpg";
import cat4 from "./assets/cat-4.jpg";
import cat5 from "./assets/cat-5.jpg";
import cat6 from "./assets/cat-6.jpg";
import cat7 from "./assets/cat-7.jpg";
import cat8 from "./assets/cat-8.jpg";

const courses = [
  { title: "HTML", image: cat1 },
  { title: "CSS", image: cat2 },
  { title: "JAVASCRIPT", image: cat3 },
  { title: "REACT JS", image: cat4 },
  { title: "PYTHON ", image: cat5 },
  { title: "NODE JS", image: cat6 },
  { title: "JAVA", image: cat7 },
  { title: "SEO", image: cat8 },
];

const Subjects = () => {
  return (
    <div className="container my-5 my" style={{
        marginTop: "30px"
    }}>
        <div className="Subjects">
            <h3>S u b j e c t s</h3>
            <h1 className="Explore"><b>Explore Top Subjects</b></h1>
        </div>
      <div className="row g-4 mt-3">
        {courses.map((course, index) => (
          <div key={index} className="col-md-3">
            <div className="course-card">
              <div
                className="course-image"
                style={{ backgroundImage: `url(${course.image})` }}
              ></div>
              <div className="overlay">
                <h4>{course.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
