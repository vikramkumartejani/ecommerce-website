import React, { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  // Extract cart data and functions from the CartContext
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };
  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  // Calculate subtotal, shipping, taxes, and total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const taxes = subtotal * 0.1;
  const total = subtotal + shipping + taxes;

  // Format values
  const formattedSubtotal = subtotal.toFixed(2);
  const formattedShipping = shipping.toFixed(2);
  const formattedTaxes = taxes.toFixed(2);
  const formattedTotal = total.toFixed(2);

  // Determine if the cart is empty
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="max-width">
      {isCartEmpty ? (
        // Displayed when cart is empty
        <section className="emptycart_container flex">
          <p>Your cart is empty.</p>
          <Link to="/">Continue Shopping</Link>
        </section>
      ) : (
        // Displayed when cart has items
        <section className="cart_container">
          <div className="cart_data">
            <table>
              <tbody id="cart_items">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <AiFillDelete
                        onClick={() => handleRemoveFromCart(item.id)}
                      />
                    </td>

                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart-image"
                      />
                    </td>

                    <td>{item.title}</td>

                    <td>
                      <span onClick={() => handleIncreaseQuantity(item.id)}>
                        +
                      </span>
                      <span>{item.quantity}</span>
                      <span onClick={() => handleDecreaseQuantity(item.id)}>
                        -
                      </span>
                    </td>

                    <td>$ {item.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5}>
                    {/* Clear Cart button */}
                    <button onClick={handleClearCart} className="clearcart-Btn">
                      Clear Cart
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Display subtotal, shipping, taxes, and total */}
          <div className="checkout">
            <p>
              <span>Subtotal:</span> {formattedSubtotal}
            </p>
            <p>
              <span>Shipping:</span> {formattedShipping}
            </p>
            <p>
              <span>Taxes:</span> {formattedTaxes}
            </p>
            <p>
              <span>Total:</span> {formattedTotal}
            </p>

            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default CartPage;
