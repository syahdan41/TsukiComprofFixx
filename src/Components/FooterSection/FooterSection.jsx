import React from "react";
import "./FooterSection.css";
import TsukiPict from "../../Assets/Images/asdadad.png";
import TyphoPict from "../../Assets/Images/Typography White.png";
import igIcon from "../../Assets/Images/Instagram.png";
import linkedIcon from "../../Assets/Images/LinkedIn-white.png";

export default function FooterSection() {
  return (
    <>
      <div>
        <div className="circle-container-left-footer">
          <div className="circle-1-footer"></div>
        </div>
        <div className="circle-container-right-footer">
          <div className="circle-2-footer"></div>
        </div>
        <div className="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="380" viewBox="0 0 1200 408" fill="none">
            <path
              d="M1200 30C1200 13.4314 1186.57 0 1170 0H600H30C13.4314 0 0 13.4315 0 30V322.1C0 325.579 2.33911 328.624 5.70093 329.52C395.097 433.359 804.903 433.359 1194.3 329.52C1197.66 328.624 1200 325.579 1200 322.1V30Z"
              fill="url(#paint0_linear_470_732)"
            />
            <defs>
              <linearGradient id="paint0_linear_470_732" x1="-6.00932e-06" y1="2.19853e-05" x2="1200" y2="328" gradientUnits="userSpaceOnUse">
                <stop stop-color="#009BD8" />
                <stop offset="1" stop-color="#01DBAD" />
              </linearGradient>
            </defs>
            <text x="50" y="140" font-size="60" fill="white" fontFamily="Syne" fontWeight="700">
              Let's Rock Your
            </text>
            <text x="50" y="205" font-size="60" fill="white" fontFamily="Syne" fontWeight="700">
              Project Now!
            </text>

            <rect x="900" y="123" width="193" height="61" rx="33" fill="#fff" />
            <text x="939" y="160" font-size="18" fill="black" fontFamily="Visby CF" fontWeight="700">
              Contact Now!
            </text>
          </svg>
        </div>
        <div className="background-svg-footer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1349" height="575" viewBox="0 0 1440 575" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0C0 0 360 88.3955 720 88.3955C1080 88.3955 1440 0 1440 0V575H0V0Z" fill="url(#paint0_linear_470_738)" />
            <defs>
              <linearGradient id="paint0_linear_470_738" x1="0" y1="0" x2="1445.36" y2="561.193" gradientUnits="userSpaceOnUse">
                <stop stop-color="#009BD8" />
                <stop offset="1" stop-color="#01DBAD" />
              </linearGradient>
            </defs>
          </svg>
          <div className="footer-content-container">
            <div className="first-content">
              <div className="logo-content-layout">
                <img src={TsukiPict} className="tsuki-pict-layout" alt="logo" />
                <img src={TyphoPict} className="tsuki-typho-layout" alt="typho" />
              </div>
              <p>Solely dedicated to creating the best digital products for you.</p>
            </div>
            <div className="second-content">
              <div className="usefulLink-content">
                <p className="useful-tittle">Useful link</p>
                <div className="paging-link-content">
                  <p className="page-txt">About</p>
                  <p className="page-txt">Testimonials</p>
                  <p className="page-txt">Services</p>
                  <p className="page-txt">Projects</p>
                  <p className="page-txt">Our Team</p>
                </div>
              </div>
            </div>
            <div className="third-content">
              <div className="social-link-content">
                <p className="useful-tittle">Social Media</p>
                <div className="socialmedia-layout">
                  <div className="socialmedia-with-txt">
                    <img src={igIcon} className="insta-icon" alt="instagram" />
                    <p>Ideasoftsuki</p>
                  </div>
                  <div className="socialmedia-with-txt">
                    <img src={linkedIcon} className="insta-icon" alt="linkedin" />
                    <p>Tsuki Software</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fourth-content">
              <p className="useful-tittle">Address</p>
              <div className="addres-content">
                <p className="basic-txt">Kota Bandung, Jawa Barat Indonesia</p>
                <p className="basic-txt">ideasoftsuki@gmail.com</p>
                <p className="basic-txt">+62 822-9293-7672</p>
              </div>
            </div>
            <div className="bar-separator">
              <svg xmlns="http://www.w3.org/2000/svg" width="1128" height="1" viewBox="0 0 1128 1" fill="none">
                <path d="M0 0.5H1128" stroke="#DEDEDE" />
              </svg>
              <div className="copyright-layout">
                <p className="footer-copyright">Copyright Tsuki Software & Media House 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
