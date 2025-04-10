import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";
import Lottie from "lottie-react";
import doneAnimation from "./animation/email.json"; // تأكد من أن المسار صحيح
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من تعبئة جميع الحقول
    if (!email || !message) {
      setError("Please fill out this field.");
      return;
    }
    setError("");

    // إعداد معايير الإرسال عبر EmailJS
    const serviceId = "your_service_id";        // استبدل بقيمة الخدمة من EmailJS
    const templateId = "your_template_id";        // استبدل بمعرف القالب من EmailJS
    const userId = "your_user_id";                // استبدل بمعرف المستخدم الخاص بك

    // إعداد المعطيات المرسلة للقالب
    const templateParams = {
      from_email: email,
      message: message,
      to_email: "alkhawlaniomair@gmil.com", // عنوان البريد الذي سيتم إرسال الرسالة إليه
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMsg("Your message has been sent successfully!");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
          setError("Something went wrong, please try again later.");
        }
      );
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact us for more information</h2>
          <p>Get notified when I publish something new.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            {error && <p className="error-message">{error}</p>}
            {successMsg && <p className="success-message">{successMsg}</p>}
            <button type="submit" className="submit-btn">
              Confirm
            </button>
          </form>
          <div className="social-icons">
                    <a href="https://x.com/AlkhawlaniOmair" target="_blank" rel="noreferrer"><FaTwitter size={30} /></a>
                    <a href="https://github.com/alkhawlaniomair1999" target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
                    <a href="https://linkedin.com/in/omair-alkhawlani-78b035338" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
                    <a href="https://www.facebook.com/omair.alkhawlani" target="_blank" rel="noreferrer"><FaFacebook size={30} /></a>
                    <a href="https://www.instagram.com/alkhawlaniomair/" target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
                  </div>
        </div>
        <div className="contact-right">
                  <Lottie style={{ height:400 }} animationData={doneAnimation} />
                  </div>
      </div>
    </motion.div>
  );
};

export default Contact;



                