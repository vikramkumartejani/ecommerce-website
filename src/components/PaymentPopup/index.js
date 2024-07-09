import React from "react";
import { useNavigate } from "react-router-dom";
import "./paymentcard.css"
import AtmCard from "../../assets/atmcard.webp"

const PaymentPopup = ({ onClose, onPayment }) => {
  const navigate = useNavigate();

  const handlePayNow = () => {
    onPayment();
    navigate("/confirmation");
  };

  return (
    <div className="modal_Background">
    <div className="payment-modal">
      <div className="payment-content">
        <img src={AtmCard} alt="ATM Card" />
        <input type="text" name="number" id="number" placeholder="card Number" required />
        <input type="text" name="name" id="name" placeholder="cardholder name" required />
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM / YY" required />

        <div className="button-container">
          <button className="pay-now" onClick={handlePayNow}>
            Pay Now
          </button>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PaymentPopup;
