import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import doneAnimation from "./animation/lap.json"; // تأكد من أن المسار صحيح
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src="/assets/my_photo.JPG" alt="Profile" className="profile-img" />
        <div className="verified-badge">✓</div>
        <h1>Software Designer, Web Developer & IT Support</h1>
        <p>
          I’m Omair Alkhawlani, a software designer, Web Developer and IT Support based in Saudi Arabia.
          I can develop websites, systems and e-commerce websites effectlively and efficiently.
          I have a passion for technology and a strong desire to learn and grow in the field of software development.       
        </p>
        <div className="social-icons">
          <a href="https://x.com/AlkhawlaniOmair" target="_blank" rel="noreferrer"><FaTwitter size={30} /></a>
          <a href="https://github.com/alkhawlaniomair1999" target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
          <a href="https://linkedin.com/in/omair-alkhawlani-78b035338" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://www.facebook.com/omair.alkhawlani" target="_blank" rel="noreferrer"><FaFacebook size={30} /></a>
          <a href="https://www.instagram.com/alkhawlaniomair/" target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
        </div>
      </div>
      <div className="home-right">
        <Lottie animationData={doneAnimation} />
      </div>
    </div>
  );
};

export default Home;
