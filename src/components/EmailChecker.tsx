import React from "react";
import classes from "../assets/styles/Contact.module.css";

import Image from "next/image";
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
          <Image
            src="/icons/check.svg"
            width={40}
            height={40}
            alt="success icon"
          />
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
          <Image
            src="/icons/error.svg"
            width={40}
            height={40}
            alt="error icon"
          />
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
      return (
        <Image
          src="/icons/loading.svg"
          width={40}
          height={40}
          alt="loading icon"
        />
      );
    }
  } else {
    return <></>;
  }
}
