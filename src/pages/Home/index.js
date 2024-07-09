// src/pages/ProductsPage.js
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/CartContext";
import CustomOffer from "../../components/CustomOffer";
import { FaStar } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineEye } from "react-icons/ai";
import { FaShippingFast, FaRegClock } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { BsShieldLock } from "react-icons/bs";
import "./Home.css";
import AutoSlider from "../../components/AutoSlider";
import Banners from "../../components/Banners";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  const handleAddToCart = (product) => {
    addToCart(product);
  };
  

  return (
    <div>
      {/* ===================================================== Top Auto Slider Banner  */}
      <AutoSlider />

      {/* =============================================================== Shipping Container  */}
      <section className="shipping-container max-width">
        <div className="shipping-box">
          <FaShippingFast className="shipping-Icon" />
          <div>
            <h2>Free Delivery</h2>
            <span>On All Orders</span>
          </div>
        </div>
        <div className="shipping-box">
          <IoIosRefresh className="shipping-Icon" />
          <div>
            <h2>30 DAYS RETURN</h2>
            <span>Moneyback Guarantee</span>
          </div>
        </div>
        <div className="shipping-box">
          <FaRegClock className="shipping-Icon" />
          <div>
            <h2>SUPPORT 24/7</h2>
            <span>24/7 day Support</span>
          </div>
        </div>
        <div className="shipping-box">
          <BsShieldLock className="shipping-Icon" />
          <div>
            <h2>Secure Paymens</h2>
            <span>Protected By Paypal</span>
          </div>
        </div>
      </section>

      {/* =========================================================== Products Conatiner  */}
      <section className="container max-width">
        <h2 className="heading">See Our Products</h2>
        {categories.map((category) => (
          <div className="products-Container" key={category}>
            <h2 className="subHeading">{category}</h2>
            <div className="products">
              {products
                .filter((product) => product.category === category)
                .slice(0, 4)
                .map((product) => (
                  <div className="product" key={product.id}>
                    <div className="image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="porduct-details">
                      <div>
                        <h3 className="title">
                          {product.title.slice(0, 20)}...
                        </h3>
                        <div className="price-rating flex">
                          <p className="price">${product.price.toFixed(2)}</p>
                          <p className="rating flex">
                            <FaStar className="star" />
                            <span>{product.rating.rate}</span>
                          </p>
                        </div>
                      </div>
                      <div className="icons flex">
                        <Link to="#" onClick={() => handleAddToCart(product)}>
                          <AiOutlineShopping className="icon" />
                        </Link>
                        <Link to={`/products/${product.id}`}>
                          <AiOutlineEye className="icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* ==================================================================  Banners  */}
      <Banners />

      {/* ========================================================== Custom Offer Banner  */}
      <CustomOffer />
    </div>
  );
};

export default Home;
