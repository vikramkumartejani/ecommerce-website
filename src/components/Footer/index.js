import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.webp";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiLogoFacebook, BiTimeFive } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import PaymentsLogo from "../../assets/payments.webp"

const Footer = () => {
  return (
    <div className="footer-Container">
      <footer>
        <div className="box">
          <div className="logo">
            <img src={Logo} alt="Store Logo" />
          </div>
          <p className="sub-Heading">
            A major key, never panic. Don’t panic, when it gets crazy and rough,
            don’t panic, stay calm. They will try to close the door on you, just
            open it.
          </p>
          <div className="share">
            <h2>Follow Us</h2>
            <div className="share-icons flex">
              <Link to="#">
                <AiOutlineTwitter className="icon" />
              </Link>
              <Link to="#">
                <AiFillLinkedin className="icon" />
              </Link>
              <Link to="#">
                <BiLogoFacebook className="icon" />
              </Link>
              <Link to="#">
                <AiOutlineInstagram className="icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="box">
          <h3 className="f-title">OUR COMPANY</h3>
          <ul>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Delivery Information</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="box">
          <h3 className="f-title">Shop</h3>
          <ul>
            <li>Electronics</li>
            <li>MEN'S CLOTHING</li>
            <li>WOMEN'S CLOTHING</li>
            <li>JEWELERY</li>
          </ul>
        </div>
        <div className="box">
          <h3 className="f-title">Contact Us</h3>
          <div className="li-contact">
            <IoMdCall /> <span>+92.000.888.32</span>
          </div>
          <div className="li-contact">
            <BiTimeFive /> <span>9:00-18:00</span>
          </div>
          <div className="li-contact">
            <HiOutlineMail /> <span>company11@gmail.com</span>
          </div>
          <div className="li-contact">
            <CiLocationOn />
            <span>685 Market karachi, Pakistan</span>
          </div>
        </div>
      </footer>

      <section className="copyright-container flex">
        <p>© Copyright 2023-Amrani Store. All rights reversed</p>
        <img src={PaymentsLogo} alt="Payment Logos" />
      </section>
    </div>
  );
};

export default Footer;
