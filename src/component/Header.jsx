import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = () => {
  return (
    <div className="container-fluid bg-white py-3">
      <div className="row align-items-center main">
        {/* Logo */}
        <div className="col-md-3 text-md-start text-center">
          <h2 className="fs-1 fw-semibold">
            <b><span className='b'>B</span>OLDLINKS</b>
          </h2>
        </div>

        {/* Contact Details */}
        <div className="col-md-9 none">
          <div className="row text-center text-md-start">
            {/* Address */}
            <div className="col-md-4 d-flex align-items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="textwarning me-2" size="lg" />
              <div className='mt-2'>
                <h6 className="mb-0 fw-semibold">Our Office</h6>
                <p className=" text-muted">472 Lagos Abeokuta Expressway,<br />General B/stop, Lagos</p>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-4 d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="textwarning me-2" size="lg" />
              <div>
                <h6 className="mb-0 fw-semibold">Email Us</h6>
                <p className="mb-0 text-muted">info@boldlinks.com.ng</p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-4 d-flex align-items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="textwarning me-2" size="lg" />
              <div>
                <h6 className="mb-0 fw-semibold">Call Us</h6>
                <p className="mb-0 text-muted">08162754001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
