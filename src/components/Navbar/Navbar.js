import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../CartContext/index";
import { auth } from "../../Firebase/index.js";
import { LiaShippingFastSolid } from "react-icons/lia";
import Logo from "../../assets/logo.webp";
import { BiShoppingBag } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const [user, setUser] = useState(null);

  // ===============================> User Loged OR not
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // ============================> SignOut
  const handleLogout = () => {
    auth.signOut();
  };

  // ============================> Add products in Cart
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="headers-parent">
      {/* top Navbar  */}
      <section className="child1-parent">
        <div className="child1 flex max-width">
          <div className="child-right-text flex">
            <LiaShippingFastSolid className="icon" />
            <p>Enjoy Free Shipping on orders over 30$ </p>
          </div>
          <div className="child-left-btn flex">
            {!user ? (
              <div className="auth-links flex">
                <Link to="/login" className="auth-Btn">
                  Login
                </Link>
                <Link to="/signup" className="auth-Btn">
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="signOut-btn flex">
                <Link to="/profile" className="profile-icon flex">
                  <LuUser className="icon" />
                </Link>
                <button onClick={handleLogout} className="auth-Btn">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Header  */}
      <header className="Navbar max-width flex">
        <div className="logo">
          <Link to="/"><img src={Logo} alt="Shop Logo" /></Link>
        </div>
        <nav className="nav flex">
          <div className={`nav-Links ${menuActive ? "active" : ""}`}>
            <RxCross2 className="navClose" onClick={toggleMenu} />
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/shop" activeClassName="active">
              Products
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
            <NavLink to="/blogs" activeClassName="active">
              Blogs
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </div>
          <div className="cart-Icon flex">
            <Link to="/cart" className="cart">
              <BiShoppingBag className="icon" />{" "}
              <span className="totalItems">{totalItems}</span>
            </Link>
            <RiMenu3Line className="humberger-Menu" onClick={toggleMenu} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
