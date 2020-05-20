import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            {/* column1 */}
            <div className="col-md-3 col-sm-6">
              <div className="social">
                <div className="logo">
                  <a>
                    <img></img>
                  </a>
                </div>
                <div className="description">
                  <p>
                    Mursheed helps you to have an unforgettable experience
                    anywhere you travel to.
                  </p>
                </div>
              </div>
            </div>
            {/* column2 */}
            <div className="col-md-3 col-sm-6">
              <div className="site-map">
                <p className="header-text">Site Map</p>
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Guides & Drivers</a>
                  </li>
                  <li>
                    <a>Offers</a>
                  </li>
                  <li>
                    <a>Support</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* column3 */}
            <div className="col-md-3 col-sm-6">
              <div className="more">
                <p className="header-text">More</p>
                <ul>
                  <li>
                    <a>Terms & conditions</a>
                  </li>
                  <li>
                    <a>Privacy policy</a>
                  </li>
                  <li>
                    <a>Cookies</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* column4 */}
            <div className="col-md-3 col-sm-6">
              <div className="contact-subscribe">
                <div className="contact">
                  <p className="header-text">Contact Us</p>
                  <ul>
                    <li>
                      <a>info@mursheed.com</a>
                    </li>
                    <li>
                      <a>+994 50 808 08 01</a>
                    </li>
                  </ul>
                </div>
                <div className="subscribe">
                  <p className="header-text">Subscribe</p>
                  <div className="send pt-2"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
              <div className="follow-us d-flex align-items-center">
                <p className="header-text">Follow us:</p>
                <div className="social-icons d-flex align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
