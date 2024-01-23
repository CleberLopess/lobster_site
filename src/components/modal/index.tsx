import { tv } from "tailwind-variants";
import { modalType } from "./modal.models";
import { IoClose } from "react-icons/io5";
import { useCallback, useEffect } from "react";
import { removeScroll } from "../../../utils/functions";

export const modalTv = tv({
  base: "flex flex-col gap-4",
  variants: {
    size: {
      full: "w-full h-full",
      fit: "w-fit h-fit",
      middle: "w-1/2 h-1/2 min-w-80 min-h-96",
    },
  },
  defaultVariants: {
    size: "middle",
  },
});

const Modal = ({ onClose, size, isOpen = false, children }: modalType) => {
  useEffect(() => {
    removeScroll(isOpen);
  }, [isOpen]);

  const stopPropagation = (ev: MouseEvent | any) => {
    ev.stopPropagation();
  };

  const handleCloseModal = (ev: MouseEvent | any) => {
    stopPropagation(ev);
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } justify-center items-center w-full h-full fixed top-0 left-0 bg-black/50 z-10`}
      onClick={handleCloseModal}
    >
      <div className={modalTv({ size })}>
        <div
          className="flex mr-0 ml-auto bg-white  p-1 rounded-full cursor-pointer hover:scale-110"
          onClick={handleCloseModal}
        >
          <IoClose className="text-light-color-01" />
        </div>
        <div
          className="rounded-md bg-white h-full w-full"
          onClick={stopPropagation}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
