import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Importing Header correctly
import Header from './component/Header';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import About from './component/About';
import Subjects from './Subjects';
import Course from './Course';
import SignUp from './SignUp';
import Teachers from './Teachers';
import Testimonial from './Testimonial';
// import OurBlog from './OurBlog';
import Footer from './Footer';
function App() {
  return (
    <div className="">
      <Header />
      <Navbar/>
      <Carousel />
      <About />
      <Subjects />
      <Course />
      <SignUp/>
      <Teachers/>
      <Testimonial/>
      {/* <OurBlog/> */}
      <Footer />
    </div>
  );
}

export default App;
