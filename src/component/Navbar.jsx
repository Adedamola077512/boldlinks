import React, { useState } from "react";
import './Navbar.css';
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubjectsOpen, setSubjectsOpen] = useState(false);

  return (
    <div className="shadow-sm py-2 fixed">
      <Container className="d-flex align-items-center justify-content-between shadow">
        
        {/* Logo and Mobile Menu Toggle */}
        <div className="d-flex align-items-center ">
          <button 
            className="btn d-md-none text-orange me-3"
            id="left"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>
                  {/* Subjects Dropdown (Desktop) */}
        <div className="dropdown d-none d-md-block">
          <button 
            className="btn btn-light fw-bold text-orange dropdown-toggle" 
            id="subjects-dropdown" 
            data-bs-toggle="dropdown"
          >
            <FontAwesomeIcon icon={faBookOpen} /> Subjects
          </button>
          <ul className="dropdown-menu">
            {/* Web Design with Nested Dropdown */}
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle" href="#">
                Web Design
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">HTML</a></li>
                <li><a className="dropdown-item" href="#">CSS</a></li>
                <li><a className="dropdown-item" href="#">JavaScript</a></li>
              </ul>
            </li>
            <li><a className="dropdown-item" href="#">App Design</a></li>
            <li><a className="dropdown-item" href="#">Marketing</a></li>
            <li><a className="dropdown-item" href="#">SEO</a></li>
          </ul>
        </div>
        </div>
        

        {/* Navbar Links for Desktop */}
        <div className={`nav-links d-none d-md-flex align-items-center`}>
          <a href="#" className="nav-link-custom active">Home</a>
          <a href="#" className="nav-link-custom">About</a>
          <a href="#" className="nav-link-custom">Courses</a>
          <a href="#" className="nav-link-custom">Teachers</a>
          <a href="#" className="nav-link-custom">Contact</a>
        </div>

        {/* Join Now Button */}
        <Button className="btn-orange ms-3 d-none d-md-block px-4 py-2">Join Now</Button>
      </Container>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu d-md-none">
          {/* Subjects Dropdown (Mobile) */}
          <div className="mobile-dropdown">
            <button 
              className="btn btn-light fw-bold w-100 text-start" 
              onClick={() => setSubjectsOpen(!isSubjectsOpen)}
            >
              <FontAwesomeIcon icon={faBookOpen} /> Subjects
            </button>
            {isSubjectsOpen && (
              <ul className="mobile-dropdown-menu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">App Design</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">SEO</a></li>
              </ul>
            )}
          </div>
          
          <a href="#" className="nav-link-custom">Home</a>
          <a href="#" className="nav-link-custom">About</a>
          <a href="#" className="nav-link-custom">Courses</a>
          <a href="#" className="nav-link-custom">Teachers</a>
          <a href="#" className="nav-link-custom">Contact</a>
          <Button className="btn-orange mt-2 w-100">Join Now</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
