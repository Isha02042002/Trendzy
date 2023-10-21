import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          "At Trendzy, we're more than just a clothing brand; we're a lifestyle. Our mission is to empower your self-expression through fashion. From trending styles to timeless classics, our curated collections cater to all tastes. We're dedicated to quality, crafting garments with precision for your comfort and style. Join us in making every day a runway with Trendzy."
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          "Get in touch with Trendzy! We'd love to hear from you. Whether you have questions, feedback, or simply want to chat about fashion, our team is here for you.Trendzy is ready to help you with all your fashion needs. Let's start this style journey together!"
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">TrendZy</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
