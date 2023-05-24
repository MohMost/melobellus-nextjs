import classes from "../assets/styles/Gallery.module.css";
import Masonry from "react-masonry-css";
import Modal from "./ImageModal";
import Carousel from "./Carousel";
import { useEffect, useState, useRef, Suspense } from "react";
import { storage } from "../utils/firebase-config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { color } from "framer-motion";
import Images from "./Images";
export default function Gallery() {
  const dataFetchedRef = useRef(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [imagesAreDisplayed, setImagesAreDisplayed] = useState<any>([]);

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
        <img src="/icons/star.svg" alt="" />
        <h2 className={classes.title}>Gallery</h2>
        <img src="/icons/star.svg" alt="" />
      </div>

      {modalVisible && (
        <Modal onClose={hideHandler}>
          <Carousel currentNum={index} />
        </Modal>
      )}

      <Suspense
        fallback={<img className={classes.loading} src="/icons/loading.svg" />}
      >
        <Images clickEvent={showHandler} />
      </Suspense>
    </div>
  );
}
