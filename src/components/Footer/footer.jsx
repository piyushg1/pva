/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>Muirabad, Prayagraj, UP</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>perfectvisionadvisory@gmail.com</p>
                  </div>
                </li>
                {/* <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+91-</p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                {/* <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a> */}
                {/* <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a> */}
                <a href="https://instagram.com/perfectvisionadvisory?igshid=YmMyMTA2M2Y=">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2023, Perfect Vision Advisory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
