import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  { icon: faTwitter, link: "#" },
  { icon: faFacebookF, link: "#" },
  { icon: faLinkedinIn, link: "#" },
  { icon: faInstagram, link: "#" },
];

const courses = ["Web Design", "Apps Design", "Database", "Research", "SEO"];

const Footer = () => {
  return (
    <footer className="footer text-light py-5">
      <Container>
        <Row className="gy-4">
          {/* Contact Info */}
          <Col lg={4} md={6}>
            <h5 className="text-uppercase text-warning">Get In Touch</h5>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 472, Lagos Abeokuta Expressway, Beside Northwest Filling Station, General B/stop, Ijaiye Ojokoro, Lagos
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> 08162754001
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@boldlinks.com.ng
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.link} className="social-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </Col>

          {/* Courses List */}
          <Col lg={4} md={6}>
            <h5 className="text-uppercase text-warning">Our Courses</h5>
            <ul className="list-unstyled">
              {courses.map((course, index) => (
                <li key={index}>› {course}</li>
              ))}
            </ul>
          </Col>

          {/* Newsletter Section */}
          <Col lg={4} md={12}>
            <h5 className="text-uppercase text-warning">Newsletter</h5>
            <button className="button mt-4">
              Apply Now
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <InputGroup className="newsletter-input mt-3">
              <Form.Control type="email" placeholder="Your Email Address" />
              <Button variant="warning">Sign Up</Button>
            </InputGroup>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="mt-4 pt-3 border-top">
          <Col md={6} className="text-md-start text-center">
            © <b className="text-warning">Boldlinks</b>. All Rights Reserved. Designed by {" "}
            <a href="#" className="text-warning">
              Obadimu Adedamola
            </a>
          </Col>
          <Col md={6} className="text-md-end text-center">
            {['Privacy', 'Terms', 'FAQs', 'Help'].map((item, index) => (
              <a key={index} href="#" className="me-3 text-light">
                {item}
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
