import React, { useContext, useState } from "react";
import { CartContext } from "../../components/CartContext";
import PaymentPopup from "../../components/PaymentPopup";
import "./checkout.css";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  // Function to calculate the total amount to be paid
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  // handle Checkout popup
  const handleCheckout = () => {
    setShowPopup(true);
  };

  //   handle payment
  const handlePayment = () => {
    setShowPopup(false);
    clearCart();
  };

  return (
    <div className="checkout_container max-width">
      <section className="form_container">
        <h1>Shipping Information & Address</h1>

        <form className="form">
          <p>*All Fields Required!</p>

          <div className="input_row">
            <div class="input_column">
              <label htmlFor="first name">First Name:</label>
              <input type="text" placeholder="First Name" required />
            </div>

            <div class="input_column">
              <label htmlFor="last name">Last Name:</label>
              <input type="text" placeholder="Last Name" required />
            </div>
          </div>
          <div className="input_row">
            <div class="input_column">
              <label htmlFor="contact Number">Contact Number:</label>
              <input type="text" placeholder="Phone Number" required />
            </div>

            <div class="input_column">
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="Email" required />
            </div>
          </div>

          <div className="input_row">
            <div class="input_column">
              <label htmlFor="address">Address:</label>
              <input type="text" placeholder="Address" required />
            </div>

            <div class="input_column">
              <label htmlFor="zip code">Zip Code:</label>
              <input type="text" placeholder="Zip Code" />
            </div>
          </div>

          <div>
            <button type="button" onClick={handleCheckout}>
              Proceed to Payment
            </button>
          </div>
        </form>

        {showPopup && (
          <PaymentPopup
            onClose={() => setShowPopup(false)}
            onPayment={handlePayment}
          />
        )}
      </section>

      <section>
        <ul className="total_items">
          {/* Display the cart items and their quantities */}

          {cartItems.map((item) => (
            <li key={item.id}>
              {item.quantity} x ${item.price.toFixed(2)}
              <span> ${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
          {/* Display the total amount to be paid */}
          <h3>Total: <span>${calculateTotal()}</span></h3>
        </ul>
      </section>
    </div>
  );
};

export default Checkout;
