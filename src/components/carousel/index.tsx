import { useState } from "react";
import Slider from "react-slick";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { IcarrouselComponent } from "./models";
import { settings } from "./configuration";
import "./carrousel.css";

const CarouselComponent = ({ children }: IcarrouselComponent) => {
  const [currentSlider, setCurrentSlider] = useState<Slider | null>();

  return (
    <div className="pt-8 md:p-8 relative">
      <Slider ref={(ref) => setCurrentSlider(ref)} {...settings}>
        {children}
      </Slider>
      <HiArrowCircleRight
        className="hidden md:flex justify-center items-center absolute top-1/2 -right-4 w-10 h-10 z-[1] opacity-30 hover:opacity-100 cursor-pointer z-20"
        onClick={currentSlider?.slickNext}
      />
      <HiArrowCircleLeft
        className="hidden md:flex justify-center items-center absolute top-1/2 -left-4 w-10 h-10 z-[1] opacity-30 hover:opacity-100 cursor-pointer z-20"
        onClick={currentSlider?.slickPrev}
      />
    </div>
  );
};

export default CarouselComponent;
