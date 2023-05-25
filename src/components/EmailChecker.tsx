import React, { useState, useRef } from "react";
import classes from "../assets/styles/Contact.module.css";
import emailjs from "@emailjs/browser";

export default function EmailChecker({
  upState,
  toggled,
  error,
  input,
}: any): JSX.Element {
  if (toggled && input) {
    if (upState) {
      return (
        <div className={classes.thank_you}>
          <img src="/icons/check.svg" />
          <h1 className={classes.title}>Thank you !</h1>
          <p>
            your message was successfully sent, i will reply to your email as
            soon as possible
          </p>
        </div>
      );
    } else if (error) {
      return (
        <div className={classes.oops}>
          <img src="/icons/error.svg" />
          <h1 className={classes.title}>OOPS !</h1>
          <p>
            it seem there was an error if you couldn&apos;t send the message
            contact me at this address :
            <a
              className={classes.phone_mail_container}
              href="mailto:mostefai147@gmail.com"
            >
              mostefai147@gmail.com
            </a>
          </p>
        </div>
      );
    } else {
      return <img src="/icons/loading.svg" />;
    }
  } else {
    return <></>;
  }
}
