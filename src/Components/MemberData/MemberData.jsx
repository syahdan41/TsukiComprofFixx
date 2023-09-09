import "./MemberData.css";
import React from "react";
import PanduPict from "../../Assets/Images/MemberPict/pandu.png";
import IkramFounder from "../../Assets/Images/MemberPict/Ikram-bw.png";
import profile1 from "../../Assets/Images/Chaewon (6).png";
import profile2 from "../../Assets/Images/syahdansayangseulgi.png";
import profile4 from "../../Assets/Images/hanif.png";

import igIcon from "../../Assets/Images/iconig.png";
import linkedinPict from "../../Assets/Images/linkedin.png";
import imageDummy from "../../Assets/Images/cantiknyasyhdn.jpg";

// Member Data software
import DonyPict from "../../Assets/Images/MemberPict/Donny Ali Sanjaya.png";
import TitoPict from "../../Assets/Images/MemberPict/Tito.jpeg";
import AnipPyPict from "../../Assets/Images/MemberPict/anip.jpg";
import PutewPict from "../../Assets/Images/MemberPict/Putew.jpg";
import SyhdnPict from "../../Assets/Images/MemberPict/syhdn.jpg";
import IkramPict from "../../Assets/Images/MemberPict/ikuramu.jpg";
import RoniPict from "../../Assets/Images/MemberPict/Roni.jpg";

// Member Data Media
import RidoPict from "../../Assets/Images/MemberPict/Ridhoalharits.png";
import SaboPict from "../../Assets/Images/MemberPict/sabo.jpg";
import GubasPict from "../../Assets/Images/MemberPict/gubas.jpg";
import HapizPict from "../../Assets/Images/MemberPict/hapiz.jpg";

import FoundingCard from "../FoundingCardComponent/FoundingCard.js";
import MemberCard from "../MemberCard/MemberCard.js";

export default function MemberData() {
  const FounderData = [
    {
      name: "Putra Bangsa W.",
      role: "Founding Member",
      image: profile1,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/putra-bangsa-widjanarko-0890b2223/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/sapikayang/",
    },
    {
      name: "Syahdan Triantoro",
      role: "Founding Member",
      image: profile2,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/syahdan-triantoro/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/syhdn_t/",
    },
    {
      name: "Pandu Wirakusuma",
      role: "President",
      image: PanduPict,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/muhammad-pandu-549977207/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/pandu_wirakusuma/",
    },
    {
      name: "Hanif Faiq",
      role: "Founding Member",
      image: profile4,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/haniffaiq13/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/lama2dingin/",
    },
    {
      name: "Ikram Andika Ukar",
      role: "Founding Member",
      image: IkramFounder,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/ikramau/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/ikramau/",
    },
  ];
  const SofwareMemberData = [
    {
      MemberName: "Hanif Faiq",
      MemberRole: ["Engineering Director", "| Full Stack Developer"],
      Memberimage: AnipPyPict,
      MemberLinkedin: "https://www.linkedin.com/in/haniffaiq13",
      MemberIg: "https://www.instagram.com/lama2dingin/",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
    {
      MemberName: "Ikram Andika Ukar",
      MemberRole: ["Software House Project Manager", ""],
      Memberimage: IkramPict,
      MemberLinkedin: "https://www.linkedin.com/in/ikramau",
      MemberIg: "https://www.instagram.com/ikramau/",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
    {
      MemberName: "Putra Bangsa W.",
      MemberRole: ["Creative Director", "| UI/UX Designer"],
      Memberimage: PutewPict,
      MemberLinkedin: "https://www.instagram.com/sapikayang/",
      MemberIg: "https://www.instagram.com/sapikayang/",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
    {
      MemberName: "Syahdan Triantoro",
      MemberRole: ["Lead Mobile App Developer", "| Front-End Developer"],
      Memberimage: SyhdnPict,
      MemberLinkedin: "https://www.linkedin.com/in/syahdan-triantoro/",
      MemberIg: "https://www.instagram.com/syhdn_t/",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
    {
      MemberName: "Imam Nurhaq",
      MemberRole: ["Full Stack Developer", ""],
      Memberimage: imageDummy,
      MemberLinkedin: "https://www.linkedin.com/in/imam-nurhaq-901a78228",
      MemberIg: "https://instagram.com/imam_nurhaq02?igshid=MzRlODBiNWFlZA==",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
    {
      MemberName: "Arifitantito Oktarian H.",
      MemberRole: ["Full Stack Developer", ""],
      Memberimage: TitoPict,
      MemberLinkedin: "https://www.linkedin.com/in/arifitanto-oktarian-hafayer-654470221/",
      MemberIg: "https://instagram.com/arifitanto_tito?igshid=MzRlODBiNWFlZA==",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
    {
      MemberName: "M. Irwan Zamroni",
      MemberRole: ["Back-End Developer", ""],
      Memberimage: RoniPict,
      MemberLinkedin: "https://www.linkedin.com/in/irwanzamroni/",
      MemberIg: "https://instagram.com/zamron__?igshid=MzRlODBiNWFlZA==",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
    {
      MemberName: "Donny Ali Sanjaya",
      MemberRole: ["Internet of Things Engineer", ""],
      Memberimage: DonyPict,
      MemberLinkedin: "https://www.linkedin.com/in/donnysdp",
      MemberIg: "https://instagram.com/donnysdp?igshid=MzRlODBiNWFlZA==",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
  ];
  const MediaMemberData = [
    {
      MemberName: "Gustin Aldiansyah",
      MemberRole: ["Media House Project Manager", ""],
      Memberimage: SaboPict,
      MemberLinkedin: "https://www.linkedin.com/in/gustin-aldiansyah-h-16615121b/",
      MemberIg: "https://instagram.com/david_nic12?igshid=MzRlODBiNWFlZA==",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
    { MemberName: "David Nicholas", MemberRole: ["Graphic Designer", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "https://instagram.com/david_nic12?igshid=MzRlODBiNWFlZA==", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Hafiz Wiraokta", MemberRole: ["Video Editor", ""], Memberimage: HapizPict, MemberLinkedin: "", MemberIg: "https://instagram.com/hafiz133?igshid=MzRlODBiNWFlZA==", linkedin: linkedinPict, instagram: igIcon },
    {
      MemberName: "Bagus Angkasa",
      MemberRole: ["Video Editor", ""],
      Memberimage: GubasPict,
      MemberLinkedin: "https://www.linkedin.com/in/bagus-angkasa-55aa7a195",
      MemberIg: "https://instagram.com/gubasss_?igshid=MzRlODBiNWFlZA==",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
    { MemberName: "Naufal Mirza", MemberRole: ["Photographer", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "https://instagram.com/fallmirza_?igshid=MzRlODBiNWFlZA==", linkedin: linkedinPict, instagram: igIcon },
    {
      MemberName: "Ridho Al Harits",
      MemberRole: ["3D Animator", "Video Editor"],
      Memberimage: RidoPict,
      MemberLinkedin: "https://www.linkedin.com/in/ridhoalharits/",
      MemberIg: "https://instagram.com/ridhoalharits?igshid=MzRlODBiNWFlZA==",
      linkedin: linkedinPict,
      instagram: igIcon,
    },
  ];
  return (
    <>
      <div className="member-data-maincontainer">
        <div>
          <div className="circle-container-left">
            <div className="circle-1"></div>
          </div>
          <div className="circle-container-right">
            <div className="circle-2"></div>
          </div>
          <FoundingCard CardData={FounderData} />
        </div>
        <div>
          <MemberCard SoftwareMemberCardData={SofwareMemberData} MediaCardData={MediaMemberData} />
        </div>
      </div>
    </>
  );
}
