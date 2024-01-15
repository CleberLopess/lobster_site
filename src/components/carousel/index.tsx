import { useState } from "react";
import Slider from "react-slick";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { IcarrouselComponent } from "./models";
import { settings } from "./configuration";

const CarouselComponent = ({ children }: IcarrouselComponent) => {
  const [currentSlider, setCurrentSlider] = useState<Slider | null>();

  return (
    <div className="p-8 relative">
      <Slider ref={(ref) => setCurrentSlider(ref)} {...settings}>
        {children}
      </Slider>
      <HiArrowCircleRight
        className="absolute top-1/2 right-0 w-10 h-10 z-[1] flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20"
        onClick={currentSlider?.slickNext}
      />
      <HiArrowCircleLeft
        className="absolute top-1/2 left-0 w-10 h-10 z-[1] flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20"
        onClick={currentSlider?.slickPrev}
      />
    </div>
  );
};

export default CarouselComponent;
