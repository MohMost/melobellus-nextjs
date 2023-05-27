"use client";
import { useState, useRef } from "react";
import classes from "../assets/styles/Contact.module.css";
import Button from "./Button";
import sendEmail from "../utils/emailSender";
import EmailChecker from "./EmailChecker";
import Image from "next/image";
export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [popUpState, setPopUpState] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [errorIsVisible, setErrorIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function toggleClass() {
    if (inputValue) {
      setIsToggled(!isToggled);
    } else {
      setIsToggled(false);
    }
  }

  return (
    <div id="contact" className={classes.contact}>
      <form
        ref={form}
        className={classes.form}
        onSubmit={(e) => sendEmail([e, form, setPopUpState, setErrorIsVisible])}
      >
        <div className={classes.title_container}>
          <Image src="/icons/star.svg" alt="star icon" width={40} height={37} />
          <h2 className={classes.title}>Contact Me</h2>
          <Image src="/icons/star.svg" alt="star icon" width={40} height={37} />
        </div>

        <input
          id={classes.name}
          type="text"
          name="user_name"
          placeholder="Your/Company name..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="email"
          name="user_email"
          id={classes.phone}
          placeholder="Your Adress..."
          required
          onChange={(e) => setInputValue(e.target.value)}
        />

        <textarea
          id={classes.message}
          rows={12}
          name="message"
          placeholder="Your Message..."
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>

        <div className={classes.button_container}>
          <Button type="submit" text="Send" event={toggleClass} />
        </div>
        <EmailChecker
          upState={popUpState}
          toggled={isToggled}
          error={errorIsVisible}
          input={inputValue}
        />
      </form>
    </div>
  );
}
