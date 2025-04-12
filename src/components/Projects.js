import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  // قائمة الفئات المستخدمة للتصفية
  const categories = [
    "All Projects",
    "HTML & CSS & JavaScript",
    "Laravel & PHP",
    "React",
  ];

  // بيانات المشاريع مع فئة (category) لكل مشروع
  const projectsData = [
    {
      id: 1,
      title: "resturant pruchesing system",
      image: "/assets/concrete.jpg",
      description: "A Laravel-based restaurant purchasing system streamlines inventory and purchasing management. It enables real-time inventory tracking, supplier management, and efficient purchase order creation. With a user-friendly interface and secure access, it optimizes restaurant operations by leveraging Laravel's robust framework for high performance and security.",
      category: "Laravel & PHP",
      s: 'https://github.com/alkhawlaniomair1999/pruchesing-system',
    },
    {
      id: 2,
      title: "concrete company system",
      image: "/assets/conc.jpg",
      description:"A concrete company system built with Laravel manages orders, inventory, and deliveries efficiently. It tracks raw materials, schedules production, and coordinates deliveries to construction sites. The system offers real-time updates, supplier management, and detailed reporting. With a user-friendly interface and secure access, it enhances operational efficiency by utilizing Laravel's framework.",
      category: "Laravel & PHP",
      s: 'https://github.com/alkhawlaniomair1999/concrete-system-laravel',
    },
    {
      id: 3,
      title: "support system",
      image: "/assets/support.jpg",
      description:"A support system built with HTML, CSS, and JavaScript manages customer service efficiently. It handles tickets, tracks inquiries, and assigns tasks to support agents. The system offers real-time updates and a knowledge base. With an intuitive interface, it enhances customer satisfaction by providing reliable and efficient support operations, ultimately improving response times.",
      category: "HTML & CSS & JavaScript",
      s:'https://github.com/alkhawlaniomair1999/support-system',
    },
    {
      id: 4,
      title: "portfolio website",
      image: "/assets/port.jpg",
      description:"A portfolio website built with HTML, CSS, and JavaScript showcases an individual's work and skills. It features project galleries, an about section, and contact information. The site offers a visually appealing and responsive design, providing visitors with an engaging experience to explore the creator's professional achievements and capabilities.",
      category: "HTML & CSS & JavaScript",
      s: 'https://alkhawlaniomair1999.github.io/omair-site/',
    },
    {
      id: 5,
      title: "task management system",
      image: "/assets/task.jpg",
      description:"A task management system built with HTML, CSS, and JavaScript helps organize and track tasks efficiently. It allows users to create, update, and prioritize tasks, set deadlines, and monitor progress. With a clean and responsive interface, the system enhances productivity by providing a clear overview of tasks and facilitating effective time management.",
      category: "HTML & CSS & JavaScript",
      s: 'https://alkhawlaniomair1999.github.io/task-manager/',
    },
  ];

  // حالة تتبع الفئة المحددة من قبل المستخدم
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <div className="projects-section">
      {/* الشريط الجانبي للفئات */}
      <div className="sidebar">
        <ul className="categories">
          {categories.map((cat, index) => (
            <li
              key={index}
              className={cat === selectedCategory ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* المحتوى الرئيسي: شبكة بطاقات المشاريع */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <a href={project.s} target="_blank" className="">
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              rotate: -3,
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={process.env.PUBLIC_URL + project.image}
              alt={project.title}
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
             
            </div>
          </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
