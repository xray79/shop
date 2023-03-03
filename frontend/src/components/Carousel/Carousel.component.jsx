import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";

const Carousel = () => {
  const [position, setPosition] = useState(0);
  const [tuple, setTuple] = useState([null, position]);
  const [ref, { width }] = useMeasure();

  if (tuple[1] !== position) {
    setTuple([tuple[1], position]);
  }

  let prev = tuple[0];
  let direction = position > prev ? 1 : -1;
  // console.log(tuple);
  // console.log(direction);

  const carouselSlides = [
    {
      url: "./sale.webp",
      title: "Sale",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem sunt aliquam ut repellendus totam eveniet labore asperiores repellat temporibus.",
    },
    {
      url: "./phone.webp",
      title: "Phone",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem sunt aliquam ut repellendus totam eveniet labore asperiores repellat temporibus.",
    },
    {
      url: "./tablet.webp",
      title: "Tablet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem sunt aliquam ut repellendus totam eveniet labore asperiores repellat temporibus.",
    },
  ];

  const handleIncrement = () => {
    setPosition(position + 1);
    if (position > 1) setPosition(0);
  };

  const handleDecrement = () => {
    setPosition(position - 1);
    if (position < 1) setPosition(2);
  };

  let variant = {
    enter: ({ direction, width }) => ({ x: direction * width }),
    center: { x: 0 },
    exit: ({ direction, width }) => ({ x: direction * width }),
  };

  return (
    <div
      className="carouselContainer bg-red-500 relative w-full overflow-hidden h-96"
      ref={ref}
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

      <AnimatePresence custom={{ direction, width }}>
        <motion.div
          key={position}
          variants={variant}
          initial="enter"
          animate="center"
          exit="exit"
          custom={{ direction, width }}
          transition={{ duration: 0.3 }}
          className="slidesContainer absolute w-full h-full top-0 left-0"
        >
          <img
            className="slideImg w-full"
            src={carouselSlides[position].url}
            alt="sale"
          />
          <div className="slidesText absolute top-0 h-full w-full bg-black/30 text-8xl text-white flex flex-col items-center justify-between pt-10 pb-20">
            <h2 className="text-center text-2xl">
              {carouselSlides[position].title}
            </h2>
            <p className="text-center w-1/2 mx-auto text-base">
              {carouselSlides[position].text}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Carousel;
