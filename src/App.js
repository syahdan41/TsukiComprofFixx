import "./App.css";
import Landing from "./Components/Landing/Landing";
import React from "react";
import About from "./Components/About/About";
// import Testimonials from "./Components/Testimoni/Testimoni";
import OurService from "./Components/OurService/OurService";
import ProjectComponent from "./Components/ProjectComponent/ProjectComponent";
import MemberData from "./Components/MemberData/MemberData";
import FooterSection from "./Components/FooterSection/FooterSection";

function App() {
  return (
    <>
      <div className="bg-black">
        <Landing />
        <About />
        <OurService />
        <ProjectComponent />
        <MemberData />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
