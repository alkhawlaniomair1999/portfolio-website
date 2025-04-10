import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="page about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>
      An entry-level IT support professional with a growing portfolio in web development and system integration, seeking a full-time role in Information Technology. I recently completed the intensive eight-month Google IT Support Professional Certificate, which provided hands-on experience in troubleshooting, customer service, networking, operating systems, system administration, and security. In parallel, I have advanced my skills as a professional web developer by working on both front-end and back-end projects—developing dynamic web systems and ensuring secure, efficient integrations.

I am dedicated to automating processes, embracing continuous learning, and fostering innovation across IT and web technologies. My goal is to leverage my multifaceted expertise to transition into a senior IT role where I can guide junior staff while architecting robust web solutions and further optimizing IT operations.      </p>
    </motion.div>
  );
};

export default About;
