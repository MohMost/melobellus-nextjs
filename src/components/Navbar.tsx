import classes from "../assets/styles/Navbar.module.css";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";
export default function Navbar() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(e: any) {
    setModalIsVisible(true);
    document.body.classList.toggle("no-scroll");
  }
  function hideModalHandler(e: any) {
    setModalIsVisible(false);
    document.body.classList.toggle("no-scroll");
  }
  const links = (
    <ul className={classes.links_ul}>
      <li onClick={hideModalHandler} className={classes.links_li}>
        <a className={classes.links_a} href="#">
          Home
        </a>
      </li>
      <li onClick={hideModalHandler} className={classes.links_li}>
        <a className={classes.links_a} href="#about">
          About
        </a>
      </li>
      <li onClick={hideModalHandler} className={classes.links_li}>
        <a className={classes.links_a} href="#contact">
          Contact
        </a>
      </li>
      <li onClick={hideModalHandler} className={classes.links_li}>
        <a className={classes.links_a} href="#gallery">
          Gallery
        </a>
      </li>
      <li onClick={hideModalHandler} className={classes.links_li}>
        <Button text="Services"></Button>
      </li>
    </ul>
  );
  return (
    <div className={classes.navbar}>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <div className={classes.links_container}>{links}</div>
        </Modal>
      )}

      <div className={classes.logo}>
        <a className={classes.logo_a} href="#">
          Melobellus
        </a>
      </div>

      <div className={classes.links}>
        {" "}
        <ul className={classes.links_ul}>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#">
              Home
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#about">
              About
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#contact">
              Contact
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#gallery">
              Gallery
            </a>
          </li>
          <li className={classes.links_li}>
            <Button text="Services"></Button>
          </li>
        </ul>
      </div>
      <div onClick={showModalHandler} className={classes.menu}>
        <svg
          width="30"
          height="22.5"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H17M1 7H17M1 13H17"
            stroke="#e7f1e5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
