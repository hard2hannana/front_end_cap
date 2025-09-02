import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";



export default function CartModal({ isOpen, onClose, cart, setCart }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  
  const subtotal = cart.reduce((sum, item) => {
    const unit = Number((item.price ?? "0").toString().replace(/[^0-9.]/g, ""));
    return sum + unit * item.qty;
  }, 0);

  const taxRate = 0.08; // (change as needed)
  const tax = subtotal * taxRate;
  const finalPrice = subtotal + tax;

  function handlePlaceOrder() {
  toast.success("✅ Order Submitted!");
  onClose();  
  setCart([]); 
  }


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
    };
  }, [isOpen, onClose]);
    

  if (!isOpen ) return null;

  const handleBackdrop = (e) => {
    // close if click outside the dialog
    if (e.target === e.currentTarget) onClose?.();
  };

  return createPortal(
    <div className="modal-backdrop" onMouseDown={handleBackdrop}>
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
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
          <h1 className="cart-heading">Cart</h1>
          <h2 id="item-modal-title" className="modal-title">
            Selected Items
          </h2>

          <div className="cart-list">
            <div className="cart-row cart-col-header">
              <span>Name</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            <div>
              {cart.map((item) => (
                <div className="cart-row" key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <span>{item.qty}</span>
                  <span>
                    $
                    {(
                      Number(item.price.toString().replace(/[^0-9.]/g, "")) *
                      item.qty
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="cart-row cart-summary cart-space">
                <span></span>
                <span></span>
                <span style={{ fontWeight: "bold" }}>Subtotal</span>
                <span style={{ fontWeight: "bold" }}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              {/* Tax */}
              <div className="cart-row cart-summary">
                <span></span>
                <span></span>
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              {/* Final Price */}
              <div className="cart-row cart-summary">
                <span></span>
                <span></span>
                <span style={{ fontWeight: "bold" }}>Final Price</span>
                <span style={{ fontWeight: "bold" }}>
                  ${finalPrice.toFixed(2)}
                </span>
              </div>
              <button
                className="btn-primary btn-oo-item"
                onClick={handlePlaceOrder}
                disabled={cart.length === 0}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}