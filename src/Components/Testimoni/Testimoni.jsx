import "./Testimoni.css";
import React from "react";
import Ceulgi from "../../Assets/Images/cantiknyasyhdn.jpg";

export default function Testimonials() {
  return (
    <>
      <div className="main-container-testi">
        <div className="circle-right">
          <div className="circle-2"></div>
        </div>
        <div className="content-layout">
          <div className="card-testi">
            <div className="testi-card-left">
              <div className="testi-card-left-1">
                <p className="card-testi-txt visbyregular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,</p>
                <p className="testi-name">Seulgi Kang</p>
              </div>
              <div className="testi-card-left-2">
                <p className="card-testi-txt visbyregular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,</p>
                <p className="testi-name">Bae Johyun</p>
              </div>
            </div>
            <div className="testi-card-right">
              <div className="testi-card-right-1">
                <p className="card-testi-txt visbyregular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,</p>
                <p className="testi-name">Son Seungwan</p>
              </div>
              <div className="testi-card-right-2 ">
                <p className="card-testi-txt visbyregular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,</p>
                <p className="testi-name">Park Sooyong</p>
              </div>
            </div>
          </div>
          <div className="text-testi">
            <p className="testimonials-tittle visbyregular">Testimonials</p>
            <div className="img-container-testi">
              <img src={Ceulgi} className="img-rounded" />
              <img src={Ceulgi} className="img-rounded" />
              <img src={Ceulgi} className="img-rounded" />
              <img src={Ceulgi} className="img-rounded" />
              <img src={Ceulgi} className="img-rounded" />
            </div>
            <div className="tittle-container">
              <p className="white-text">What Our</p>
              <div className="tittle-row-layout">
                <p className="gradient-text">Clients</p>
                <p className="white-text">Said</p>
              </div>
            </div>
            <p className="testimonials-desc visbyregular">You can tell that we love what we do by how much we put in to our services. Our feedback is incredible and it shows how much passion we are putting into our qualities.</p>
            <p className="testimonials-desc-end visbyregular">Let's discuss your ideas</p>
          </div>
        </div>
      </div>
    </>
  );
}
