import React from 'react';
import './Course.css';

// Import images from assets
import course1 from "./assets/course-1.jpg";
import course2 from "./assets/course-2.jpg";
import course3 from "./assets/course-3.jpg";
import course4 from "./assets/course-4.jpg";
import course5 from "./assets/course-5.jpg";
import course6 from "./assets/course-6.jpg";


const courses = [
  { title: "Web design & development courses for beginner", image: course1, student: "20" },
  { title: "Web development courses for intermediate", image: course2, student: "25" },
  { title: "Web development courses for advanced", image: course3, student: "30" },
  { title: "MySQL Training & Administration", image: course4, student: "35" },
  { title: "Mongodb for the Beginners", image: course5, student: "40" },
  { title: "CSS libaray for the Beginners", image: course6, student: "45" },
  // Add more courses here...

];

const Course = () => {
  return (
    <div className="container my-5 mt-5 my">
      <div className="Subject text-center">
        <h3>COURSES</h3>
        <h1 className="Explores"><b>Our Popular Courses</b></h1>
      </div>
      <div className=" row my-5 g-4 rows">
        {courses.map((popular, index) => (
          <div key={index} className="col-md-4 ">
            <div className="courseard">
              <div 
                className="courseImage" 
                style={{ backgroundImage: `url(${popular.image})` }}>
              </div>
            </div>
            <div className='color'>
            <div className="Students">
              <div><p><span>👩‍👦‍👦</span> {popular.student} Students</p></div>
              <div><p><span>🕒</span> 01h 30m</p></div>
            </div>
            <div className="">
              <h4 className='courseTitle'>{popular.title}</h4>
            </div>
            <hr className='hh' />
            <div className='dollar'>
              <div><p><span>⭐</span> 4.5 (250)</p></div>
              {/* <div className='fs-5'><p>$99</p></div> */}
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;