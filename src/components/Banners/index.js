import React from "react";
import "./Banners.css";
import Banner1 from "../../assets/banner1.webp";
import Banner2 from "../../assets/banner2.webp";
import Banner3 from "../../assets/banner3.webp";
import Banner4 from "../../assets/banner4.webp";

const Banners = () => {
  return (
    <div className="banners-parrent max-width">
      <section className="parent-child1">
        <img src={Banner1} alt="" />
        <div className="content">
          <span>NEW STYLE DESIGN</span>
          <h2>Trendy Fashion</h2>
          <p>30% OFF</p>
        </div>
      </section>

      <section className="parent-child2">
        <section className="banner2">
          <img src={Banner2} alt="" />
          <div className="content">
            <h2>Galaxy Buds Plus</h2>
            <span>Wireless Earbuds</span>
          </div>
        </section>

        <section className="child2-child1">
          <div className="banner2">
            <img src={Banner3} alt="" />
            <div className="content">
              <h2>Galaxy Buds Plus</h2>
              <span>Wireless Earbuds</span>
            </div>
          </div>
          <div className="banner2">
            <img src={Banner4} alt="" />
            <div className="content">
              <span>SALE 20%</span>
              <h2>Tablet Pro 2023</h2>
              <span>Top Quality Products</span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Banners;
