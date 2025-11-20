import React, { useEffect } from "react";
import "./Modal.css";
export default function Modal({ isOpen, onClose, children }) {
  // Close when pressing ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
    <div className="model-container">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking modal
        >
        <button className="modal-close-btn" onClick={onClose}>×</button>
        {children}
      </div>
          </div>
    </div>
  );
}
