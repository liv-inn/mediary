import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FaXmark } from "react-icons/fa6";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "20px",
  zIndex: 1000,
  borderRadius: "8px",
  minWidth: "500px"
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
};

function Modal({ onClose, children, portalId = "modal-root-1" }) {
  const el = document.createElement("div");

  useEffect(() => {
    const modalRoot = document.getElementById(portalId);
    modalRoot.appendChild(el);
    document.body.style.overflow = "hidden";

    return () => {
      modalRoot.removeChild(el);
      document.body.style.overflow = "auto";
    };
  }, [el, portalId]);

  return ReactDOM.createPortal(
    <div style={OVERLAY_STYLES} onClick={onClose}>
      <div style={MODAL_STYLES} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2">
          <FaXmark />
        </button>
        {children}
      </div>
    </div>,
    el
  );
}

export default Modal;
