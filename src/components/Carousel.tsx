import { useState, useEffect } from "react";
import classes from "../assets/styles/Carousel.module.css";
import Image from "next/image";
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
      <Image
        className={classes.image}
        src={currentImage}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{ height: "90%", width: "auto" }}
        width={400}
        height={400}
      />
    </div>
  );
}

export default Carousel;
