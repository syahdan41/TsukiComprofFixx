import "./OurService.css";
import ServicePict from "../../Assets/Images/service.png";
import ServiceList from "../ServiceList/ServiceList";

export default function OurService() {
  const services = [
    { svc: "Website Development" },
    { svc: "Internet Of Things" },
    { svc: "Machine Learning" },
    { svc: "Logo Design" },
    { svc: "Graphic Design" },
    { svc: " Videography" },
    { svc: "Mobile Developing" },
    { svc: "Photography" },
    { svc: "Motion Graphic" },
  ];
  return (
    <>
      <div className="row-based">
        <div className="border h-[500px] w-[500px] rounded-full gradient-circle blur-[280px] absolute z-10 circle-layout"></div>
        <div className="text-content">
          <p className="ServiceText">Services</p>
          <p className="text-white-rido">
            Our <span className="gradient">Services</span>
          </p>
          <p className="body-copy">
            Every one of us loves something different. Some people may be drawn to offer convenience and simplicity, while others may prioritize features that allow for customization and personalization. So, explore the world through the
            lens of our visual capabilities and find what you love!
          </p>
          <div className="serviceList">
            {" "}
            {services.map((service) => (
              <ServiceList key={service.id} nama={service.svc} />
            ))}
          </div>
        </div>
        <img className="serviceImg" src={ServicePict} alt="foto service" />
      </div>
    </>
  );
}
