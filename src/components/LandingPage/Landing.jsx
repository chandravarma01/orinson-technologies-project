import React from "react";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing-main">
      <Header />
      <div className="second-section">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="text-container"
        >
          <p>
            Shop from wide range of products with exiting offers and discounts
          </p>
          <p>Sign up and never miss out the trends</p>
          <button>Explore</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="image-container"
        >
          <img
            src="https://i.pinimg.com/564x/6a/f1/ce/6af1ce15101aacb82f8023ffc43862e7.jpg"
            alt=""
            className="cart-image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
