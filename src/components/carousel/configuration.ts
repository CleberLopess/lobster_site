import { Settings } from "react-slick";

export const settings: Settings = {
  className: "relative",
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
