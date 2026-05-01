import React from "react";
import getImages from "../utils/fetchData";
import classes from "../assets/styles/Gallery.module.css";
import Masonry from "react-masonry-css";
import Image from "next/image";

const fallbackImages = [
  "https://images.unsplash.com/photo-1630609083938-3acb39a06392",
  "https://images.unsplash.com/photo-1530903677198-7c9f3577a63e",
  "https://images.unsplash.com/photo-1705599773422-c1066356f801",
  "https://images.unsplash.com/photo-1696575813407-9b21ad630f8d",
  "https://images.unsplash.com/photo-1741037306825-90cdccd19a52",
  "https://images.unsplash.com/photo-1695153557696-764c7350a298",
  "https://images.unsplash.com/photo-1695154206595-e7fe9bb99fbd",
  "https://images.unsplash.com/photo-1695154207731-dc2ca756f063",
];

const resource = getImages("gallery/illustration/");

const Images = (props: any): JSX.Element => {
  let imageList: string[] = [];

  try {
    imageList = (resource as { read: () => string[] }).read() || [];
  } catch (err) {
    console.warn("Image fetch failed, using fallback images:", err);
    imageList = [];
  }

  const finalImages = imageList.length > 0 ? imageList : fallbackImages;

  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    1100: 2,
    700: 1,
  };

  // 🛑 optional safety empty state (rare case)
  if (!finalImages.length) {
    return (
      <div className={classes.empty_state}>
        <p>📷 No images available right now.</p>
      </div>
    );
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={classes.my_masonry_grid}
      columnClassName={classes.my_masonry_grid_column}
    >
      {finalImages.map((url: string, index: number) => (
        <div className={classes.image_container} key={`${url}-${index}`}>
          <Image
            onClick={props.clickEvent}
            className={classes.art}
            src={url}
            alt={`art-${index}`}
            width={500}
            height={500}
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default Images;
