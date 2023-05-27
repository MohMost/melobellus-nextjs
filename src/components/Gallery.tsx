import classes from "../assets/styles/Gallery.module.css";
import Modal from "./ImageModal";
import Carousel from "./Carousel";
import { useState, Suspense } from "react";
import Image from "next/image";
import Images from "./Images";
export default function Gallery() {
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);

  function showHandler(e: any) {
    setModalVisible(true);
    const clickedIndex: any = e.target.getAttribute("src");
    setIndex(clickedIndex);
    document.body.classList.toggle("no-scroll");
  }

  function hideHandler(e: any) {
    e.stopPropagation();
    setModalVisible(false);
    document.body.classList.toggle("no-scroll");
  }
  return (
    <div id="gallery" className={classes.gallery}>
      <div className={classes.title_container}>
        <Image src="/icons/star.svg" alt="star icon" width={40} height={37} />
        <h2 className={classes.title}>Gallery</h2>
        <Image src="/icons/star.svg" alt="star icon" width={40} height={37} />
      </div>

      {modalVisible && (
        <Modal onClose={hideHandler}>
          <Carousel currentNum={index} />
        </Modal>
      )}

      <Suspense
        fallback={
          <Image
            className={classes.loading}
            src="/icons/loading.svg"
            alt="loading icon"
            style={{ width: "5em", height: "5em" }}
            width={10}
            height={10}
          />
        }
      >
        <Images clickEvent={showHandler} />
      </Suspense>
    </div>
  );
}
