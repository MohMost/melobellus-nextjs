import { useState, useEffect } from "react";
import classes from "../assets/styles/Carousel.module.css";

interface CarouselProps {
  currentNum: number;
}

function Carousel({ currentNum }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState<any>(currentNum);

  useEffect(() => {
    setCurrentImage(currentNum);
  }, [currentNum]);

  return (
    <div className={classes.carousel}>
      <img
        className={classes.image}
        src={currentImage}
        alt=""
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default Carousel;
