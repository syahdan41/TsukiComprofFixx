import "./ProjectComponent.css";
import React from "react";

import img1 from "../../Assets/Images/img1.png";
import img2 from "../../Assets/Images/img2.png";
import img3 from "../../Assets/Images/img3.png";

function ProjectComponent() {
  return (
    <div className="main-project-container">
      <div className="Project">
        <p className="Heading">PROJECTS</p>
        <div className="text-white-ridho">
          Our <span className="gradient">Best Project </span>That We Made
        </div>
        <p className="OurProductDesc">The products we're most proud of can be found here. Our team of designers, developers and engineers has created an incredible new lineup of high quality, innovative and convenient products.</p>
      </div>
      <div className="listProjectRow">
        <div className="photoBox1">
          <img src={img1} alt="gambar1" />
        </div>
        <div className="listProjectCol">
          <div className="photoBox2">
            <img src={img2} alt="gambar2" />
          </div>
          <div className="photoBox3">
            <img src={img3} alt="gambar3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
