import React from 'react'
import './Teachers.css';



// Import images from assets
import team1 from "./assets/team-1.jpg";
import team2 from "./assets/team-2.jpg";
import team3 from "./assets/tunde.png";
import team4 from "./assets/dami.jpg";



const courses = [
  { title: "MR Yaqub Adesola", image: " https://media.licdn.com/dms/image/v2/D4D35AQGBWNAKesNcPw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1725422513522?e=1739880000&v=beta&t=q2kQ5-u1yP8or9C2LLzhWsn_qE3p6tv2mp-l0lMuhqE"},
  { title: "Adeyemo Olamide", image: " https://media.licdn.com/dms/image/v2/D4D03AQHaUvQVvbOg2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668854393551?e=1744848000&v=beta&t=Pf1O09wkWhRPEyvyPcc3t-W9Mw-LhJ_3heWjmCfroao " },
  { title: "Mr Tunde", image: team3 },
  { title: "Damilola", image: team4 },
  ];
const Teachers = () => {
    return (
        <div className="container my-5" id='meet'>
          <div className="Subject text-center">
            <h3>T e a c h e r s</h3>
            <h1 className="Explores"><b>Meet Our Teachers</b></h1>
          </div>
          <div className=" row my-5">
            {courses.map((popular, index) => (
              <div key={index} className="col-md-3">
                <div className="course-Card">
                  <div 
                    className="courseImage" 
                    id=''
                    style={{ backgroundImage: `url(${popular.image})` }}>
                  </div>
                  <div className='steady'></div>
                </div>
                <div className="text-center center">
                  <h4 className='courseTitle '>{popular.title}</h4>
                  <p className='courseTitle '></p><b>INSTUCTOR</b>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}

export default Teachers