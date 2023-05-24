import classes from "../assets/styles/ImageModal.module.css";

function Modal({ children, onClose }: any) {
  return (
    <div className={classes.body}>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        <svg
          onClick={onClose}
          className={classes.cancel}
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <a className={classes.cancel_icon}>
            <circle
              cx="25"
              cy="25"
              r="24"
              fill="#21073C"
              stroke="#DEFFEB"
              stroke-width="2"
            />
            <path
              d="M14 36L25.5 24.5L37 36M37 13L25.4978 24.5L14 13"
              stroke="#DEFFEB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </a>
        </svg>

        {children}
      </dialog>
    </div>
  );
}

export default Modal;
