import { useState } from "react";
import {
  CarouselSection,
  CarouselContainer,
  StyledBlue,
  BtnIncrement,
  BtnDecrement,
  StyledImg,
  StyledText,
} from "./Carousel.styles";

const Carousel = () => {
  const [position, setPosition] = useState(0);

  const carouselSlides = [
    { url: "./sale.jpg", title: "Sale" },
    { url: "./phone.jpg", title: "Phone" },
    { url: "./tablet.jpg", title: "Tablet" },
  ];

  const handleIncrement = () => {};

  const handleDecrement = () => {};

  return <section></section>;
};
export default Carousel;
