import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { ImArrowLeft2 } from "react-icons/im";
import { Link } from "react-router-dom";
import "./confirmation.css";

const Confirmationpage = () => {
  return (
    <div className="confirmation_container max-width flex">
      <section>
        <LiaShoppingBagSolid className="cartIcon" />
        <h1>Your order is confirmed</h1>
        <p>
          Thank you for shopping with us. your order will reach you on your
          address
        </p>
        <Link to="/">
          <ImArrowLeft2 />
          <span>Continue Shopping</span>
        </Link>
      </section>
    </div>
  );
};

export default Confirmationpage;
