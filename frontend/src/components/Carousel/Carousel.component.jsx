import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [position, setPosition] = useState(0);
  const [prev, setPrev] = useState(position);

  let direction = position > prev ? "increasing" : "decreasing";

  console.log({ direction });

  const carouselSlides = [
    { url: "./sale.webp", title: "Sale", title: "1" },
    { url: "./phone.webp", title: "Phone", title: "2" },
    { url: "./tablet.webp", title: "Tablet", title: "3" },
  ];

  const handleIncrement = () => {
    setPosition(p => p + 1);
    setPrev(position);
    if (position > 1) setPosition(0);
  };

  const handleDecrement = () => {
    setPosition(position => position - 1);
    setPrev(position);
    if (position < 1) setPosition(2);
  };

  return (
    <div
      className="carouselContainer bg-red-500 relative w-full overflow-hidden h-96"
      onlo
    >
      <div className="buttonsContainer">
        <button
          className="absolute z-10 top-1/2 -translate-y-1/2 left-4 rounded-full p-2 bg-white"
          onClick={handleDecrement}
        >
          -
        </button>

        <button
          className=" absolute z-10 top-1/2 -translate-y-1/2 right-4 rounded-full p-2 bg-white"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      <AnimatePresence>
        <motion.div
          key={position}
          initial={{ x: 600 }}
          animate={{ x: 0 }}
          exit={{ x: -600 }}
          transition={{ duration: 0.3 }}
          className="slidesContainer absolute w-full h-full top-0 left-0"
        >
          <img
            className="slideImg w-full"
            src={carouselSlides[position].url}
            alt="sale"
          />
          <div className="slidesText absolute top-0 h-full w-full bg-black/30 text-8xl text-white">
            <h2 className="text-center text-2xl mt-3">
              {carouselSlides[position].title}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Carousel;
