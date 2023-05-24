import emailjs from "@emailjs/browser";

export default function sendEmail([
  e,
  form,
  setPopUpState,
  setErrorIsVisible,
]: any) {
  e.preventDefault();

  if (form.current) {
    emailjs
      .sendForm(
        "service_gkt1f2n",
        "template_9vm4zc6",
        form.current,
        "Xo4-e87CZFWltdmgi"
      )
      .then(
        (result: { text: any }) => {
          setPopUpState(true);
        },
        (error: { text: any }) => {
          error ? setErrorIsVisible(true) : setErrorIsVisible(false);
          setPopUpState(false);
        }
      );
  }
}
