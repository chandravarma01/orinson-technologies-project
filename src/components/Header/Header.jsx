import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="logo-section">
        <h1>ShopEase</h1>
      </div>
      <ul className="header-options">
        <li>About Us</li>
        <li>Offers</li>
        <button>Login</button>
      </ul>
    </motion.div>
  );
};

export default Header;
