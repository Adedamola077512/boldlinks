// import React from 'react';
// import './OurBlog.css';

// // Import images from assets
// import blog1 from "./assets/cat-1.jpg";
// import blog2 from "./assets/blog-2.jpg";
// import blog3 from "./assets/blog-3.jpg";

// const course = [
//   { title: "Lorem elitr magna stet eirmod labore amet labore clita at ut clita", image: blog1 },
//   { title: "Lorem elitr magna stet eirmod labore amet labore clita at ut clita", image: blog2 },
//   { title: "Lorem elitr magna stet eirmod labore amet labore clita at ut clita", image: blog3 },
// ];
// // const courses = [
// //   { title: "Web Design", image: cat1 },
// //   { title: "Development", image: cat2 },
// //   { title: "Game Design", image: cat3 },
// //   ];

// const OurBlog = () => {
//   return (
//     <div className="container my-5">
//       <div className="text-center">
//         <h3>Our Blog</h3>
//         <h1><b>Latest From Our Blog</b></h1>
//       </div>
//       <div className="row my-5 g-4">
//         {course.map((popular, index) => (
//           <div key={index} className="col-md-4">
//             <div className="BlogCard">
//               <div 
//                 className="BlogImage" 
//                 style={{ 
//                   backgroundImage: `url(${popular.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center"
//                 }}>
//               </div>
//               <div className="over">
//                 <h4>{popular.title}</h4>
//                 <p>100 Courses</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurBlog;

import React from 'react';
import './OurBlog.css';

// Import images from assets
import course1 from "./assets/blog-1.jpg";
import course2 from "./assets/blog-2.jpg";
import course3 from "./assets/blog-3.jpg";


const courses = [
  { title: "We’re not just about teaching you to code; we’re about preparing you for a career in tech", image: course1 },
  { title: "In today’s tech-driven world, learning how to code opens the door to countless opportunities.", image: course2 },
  { title: "Our programming school stands out by offering a project-based curriculum.", image: course3 },
  // Add more courses here...

];

const OurBlog = () => {
  return (
    <div className="container my-5 explore-top">
      <div className="Subject text-center">
        <h3>OUR BLOG</h3>
        <h1 className="Explores"><b>Latest From Our Blog</b></h1>
      </div>
      <div className=" row my-5 g-4 rows">
        {courses.map((popular, index) => (
          <div key={index} className="col-md-4 ">
            <div className="courseCard">
              <div 
                className="courseImage" 
                style={{ backgroundImage: `url(${popular.image})` }}>
              </div>
              <div className="blogoverlay">
                <h5>{popular.title}</h5>
                <p className='jan'>Jan 05 2025</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
