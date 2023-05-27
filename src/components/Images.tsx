import React from "react";
import getImages from "../utils/fetchData";
import classes from "../assets/styles/Gallery.module.css";
import Masonry from "react-masonry-css";
const resource = getImages("gallery/illustration/");
import Image from "next/image";
const Images = (props: any): JSX.Element => {
  const imageList: string[] = (resource as { read: () => string[] }).read();
  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    1100: 2,
    700: 1,
  };
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.my_masonry_grid}
        columnClassName={classes.my_masonry_grid_column}
      >
        {imageList.map((url: string) => {
          return (
            <div className={classes.image_container} key={url}>
              <Image
                onClick={props.clickEvent}
                className={classes.art}
                style={{ width: "100%", height: "auto" }}
                src={url}
                alt={`${imageList.indexOf(url)}`}
                loading="lazy"
                width={400}
                height={400}
              />
            </div>
          );
        })}
      </Masonry>
    </>
  );
};

export default Images;
