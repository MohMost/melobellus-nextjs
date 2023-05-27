import React from "react";
import classes from "../assets/styles/About.module.css";
import Button from "./Button";
import Image from "next/image";
export default function About() {
  return (
    <div id="about" className={classes.about}>
      <Image
        className={classes.image}
        src="/images/melobellus.png"
        alt="illustration"
        style={{ width: "auto", height: "auto" }}
        width={400}
        height={400}
      />
      <div>
        <div className={classes.title_container}>
          <Image src="/icons/star.svg" alt="star icon" width={40} height={37} />
          <h2 className={classes.title}>About us</h2>
          <Image src="/icons/star.svg" alt="star icon" width={40} height={37} />
        </div>
        <div className={classes.content_container}>
          <p className={classes.content}>
            Un artiste et designer doué dans la création d&apos;œuvres
            d&apos&apos;art numériques et traditionnelles, y compris
            l&apos;aquarelle et la peinture à l&apos;huile. Parcourez ma
            collection diversifiée d&apos;œuvres d&apos;art, qui comprend des
            logos, des icônes, des illustrations et bien plus encore créés à
            l&apos;aide d&apos;outils tels que Photoshop et Figma.
          </p>
          <p className={classes.content}>
            pour en savoir plus sur moi voici mon cv:
          </p>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/mohameto-ddd57.appspot.com/o/gallery%2Funnamed.png?alt=media&token=6769041d-cf44-4e1b-859a-11dbd05fbde4"
            className={classes.button_container}
            target="_blank"
          >
            <Button text="Mon CV" />
          </a>
        </div>
      </div>
    </div>
  );
}
