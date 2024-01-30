import React, { useEffect, useState } from "react";
import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.webp";
import slide4 from "./images/slide4.jpg";
import slide5 from "./images/slide5.jpg";
import slide6 from "./images/slide6.jpg";
import slide7 from "./images/slide7.jpg";
import slide8 from "./images/slide8.webp";
import slide9 from "./images/slide9.jpg";
import slide10 from "./images/slide10.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SlidesSection = () => {
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const isFirstSlide = currentSlide === slides.length - 1;
    const newSlide = isFirstSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    const isLastSlide = currentSlide === 0;
    const newSlide = isLastSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 37) prevSlide();
      else if (event.keyCode === 39) nextSlide();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentSlide]);

  const goSlide = (index) => {
    setCurrentSlide(index)
  }

  const slideStyle = {
    height: "550px",
    marginBottom:"10px",
    marginLeft:"20px",
    width: "1000px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${slides[currentSlide]})`,
  };
  const slideContainer = {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <div style={slideContainer}>
        <div style={slideStyle}></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center",alignItems:"center",}}>
          {slides.map((slide, index) => (
            <div key={index} onClick={() => goSlide(index)}>
              <FiberManualRecordIcon />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SlidesSection;
