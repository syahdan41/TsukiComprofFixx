import "./ServiceList.css";
import GlobeIcon from "../../Assets/Images/globe-icon.png";

export default function ServiceList(props) {
  return (
    <>
      <div className="gradient-box">
        <div className="content-wrap">
          <img src={GlobeIcon} alt="Yah Ilang" className="globe-icon" />
          <p className="content">{props.nama}</p>
        </div>
      </div>
    </>
  );
}
