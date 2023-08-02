import { ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./modal.module.scss";
import Button from "../../UI/Button/Button";

type ModalProps = {
  title: string;
  children: ReactNode;
  open: boolean;
  openFunc: (isOpen: false) => void;
};

export default function Modal({ title, children, open, openFunc }: ModalProps) {
  const modalFragment = document.querySelector("#modal")!;

  function closeModal() {
    openFunc(false);
  }

  return createPortal(
    <>
      {open && <div className={classes.backdrop} onClick={closeModal}></div>}
      <div
        className={`${classes["modal"]} ${open ? classes["modal_open"] : ""}`}
      >
        <h2>{title}</h2>
        <div>{children}</div>
        <div className={classes["modal__footer"]}>
          <Button title="Close" func={closeModal} />
        </div>
      </div>
    </>,
    modalFragment
  );
}

