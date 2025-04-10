import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // الوضع الافتراضي: dark
  const [theme, setTheme] = useState("dark");

  // عند تغيير الثيم نقوم بضبط خاصية data-theme في جذر المستند
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // دالة لتبديل الثيم
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  
  return (
      <div className="App">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <section id="home">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
          <Home />
          </motion.div>
        </section>
        <hr style={{ width: "95%", height: "0.5px", backgroundColor: "orange" }} />
        <section id="projects">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
          <Projects />
          </motion.div>
        </section>
        <hr style={{ width: "95%", height: "0.5px", backgroundColor: "orange" }} />
        <section id="about">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
          <About />
          </motion.div>
        </section>
        <hr style={{ width: "95%", height: "0.5px", backgroundColor: "orange" }} />
        <section id="contact">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
          <Contact />
         </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
