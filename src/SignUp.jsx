import React from "react";
import "./signUp.css";

const SignUp = () => {
  return (
    <div className="signin">
      {/* Background Section */}
      <div className="sign"></div>

      {/* Content Section */}
      <div className="sign-content">
        {/* Offer and Information Section */}
        <div className="need-content">
          <h5 className="need">NEED ANY COURSES</h5>
          <h1>
            <b>30% Off For New Students</b>
          </h1>
          <p className="Invidunt">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
            <br />
            ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat
            <br />
            ut sed diam sea ipsum est dolor
          </p>
          <p>
            <span className="marks">✔</span> Labore eos amet dolor amet diam
          </p>
          <p>
            <span className="marks">✔</span> Etsea et sit dolor amet ipsum
          </p>
          <p>
            <span className="marks">✔</span> Diam dolor diam elitripsum vero.
          </p>
        </div>

        {/* Contact Form Section */}
        <div>
          <div className="Yourname">
            <div className="color-content">
              <h2 className="fs-1"><b>Sign Up Now</b></h2>
            </div>
            <div className="down">
              <form>
                <input type="text" className="input-field" placeholder="Enter text" /><br />
                <input type="email" className="input-field" placeholder="Enter Email" /><br />
                {/* select */}
                <select className="custom-select">
                  <option value="option1" id="call">Select Course</option>
                  <option value="option2" className="">Course 1</option>
                  <option value="option3" className="">Course 3</option>
                  <option value="option3" className="">Course 3</option>
                </select>
                <button className="custom-button" >Click Me</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
