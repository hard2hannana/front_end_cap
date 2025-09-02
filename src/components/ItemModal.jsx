import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";



export default function ItemModal({ item, isOpen, initialQty = 1, onConfirm, onClose }) {
  const [qty, setQty] = useState(initialQty);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if(!isOpen) return;
    let prev = document.body.style.overflow;
      if (prev === "hidden") prev = "";
    document.body.style.overflow = "hidden";
    closeBtnRef.current.focus();
    
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      setQty(initialQty);
    };
  }, [isOpen, initialQty, onClose]);
    

  if (!isOpen || !item) return null;

  const { name, description, image } = item;

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => q + 1);

  const handleBackdrop = (e) => {
    // close if click outside the dialog
    if (e.target === e.currentTarget) onClose?.();
  };

  return createPortal(
    <div className="modal-backdrop" onMouseDown={handleBackdrop}>
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="item-modal-title"
        aria-describedby="item-modal-desc"
        ref={dialogRef}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
          ref={closeBtnRef}
        >
          ×
        </button>

        <div className="modal-body">
          <h2 id="item-modal-title" className="modal-title">
            {name}
          </h2>
          <p id="item-modal-desc" className="modal-desc">
            {description}
          </p>
          <img className="modal-image" src={image} alt={name} />
          <div className="qty-row">
            <div className="qty-wrapper">
              <button
                type="button"
                className="qty-btn"
                onClick={dec}
                aria-label="Decrease quantity"
              >
                &#x2190;
              </button>
              <span className="qty-value" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                className="qty-btn"
                onClick={inc}
                aria-label="Increase quantity"
              >
                &#x2192;
              </button>
            </div>
            <button
              type="button"
              className="confirm-btn btn-primary"
              onClick={() => onConfirm?.(item, qty)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}