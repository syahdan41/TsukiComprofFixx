import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import Gambar1 from "../../Assets/Images/Gambar1.jpg";
import Gambar2 from "../../Assets/Images/Gambar2.jpg";
import Gambar3 from "../../Assets/Images/Gambar3.jpg";
import Gambar4 from "../../Assets/Images/Gambar4.jpg";
import Gambar5 from "../../Assets/Images/Gambar5.jpg";
import Gambar6 from "../../Assets/Images/cantiknyasyhdn.jpg";

import CarouselItem from "../CarouselItem/CarouselItem";

const images = [Gambar1, Gambar2, Gambar3, Gambar4, Gambar5, Gambar6];

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
  };

  const renderImages = () => images.map((image, index) => <CarouselItem key={index} image={image} />);

  return (
    <div className="flex items-center justify-center">
      <div className="carousel-layout">
        <Slider {...settings}>{renderImages()}</Slider>
      </div>
    </div>
  );
}
