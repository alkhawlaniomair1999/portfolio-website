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
      description:
        "Lorem ipsum dolor sit amet consectetur elit adipisicing. Ex tempore dolor in, accusantium laudantium accusamus.",
      category: "Laravel & PHP",
    },
    {
      id: 2,
      title: "concrete company system",
      image: "/assets/conc.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur elit adipisicing. Ex tempore dolor in, accusantium laudantium accusamus.",
      category: "Laravel & PHP",
    },
    {
      id: 3,
      title: "support system",
      image: "/assets/support.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur elit adipisicing. Ex tempore dolor in, accusantium laudantium accusamus.",
      category: "HTML & CSS & JavaScript",
    },
    {
      id: 4,
      title: "portfolio website",
      image: "/assets/port.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur elit adipisicing. Ex tempore dolor in, accusantium laudantium accusamus.",
      category: "HTML & CSS & JavaScript",
    },
    {
      id: 5,
      title: "task management system",
      image: "/assets/task.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur elit adipisicing. Ex tempore dolor in, accusantium laudantium accusamus.",
      category: "HTML & CSS & JavaScript",
    },
    
  ];

  // حالة لتتبع الفئة المحددة من قبل المستخدم
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
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ rotate: -5,zoom: 1.1, transition: { duration: 0.3 } }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-actions">
                <a href="#" className="more-link">
                  More
                </a>
                {/* أيقونات إضافية قابلة للتخصيص */}
                <span className="icon edit-icon">✎</span>
                <span className="icon details-icon">ℹ️</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
