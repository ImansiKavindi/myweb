"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../components/Styles/project.module.css";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectSection = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [deviceType, setDeviceType] = useState("desktop"); // "desktop", "tablet", or "mobile"

  const projectsPerPage = 6;

  const projects = [
    {
      title: "Bliss - Calming App",
      description: "A relaxation app focused on enhancing mental well-being through features like soothing sounds, guided meditations, and positive affirmations to help users reduce stress and improve focus.",
      technologies: ["Kotlin"],
      video: "/images/Bliss.mp4",
      image: "/images/5.png",
      github: "https://github.com/username/ecommerce-app",
    },
    {
      title: "Online Shopping Store",
      description: "An e-commerce platform providing users with a seamless online shopping experience, including product browsing, order placement, and account management features.",
      technologies: ["HTML", "CSS", "PHP", "JS", "MySQL"],
      video: "/images/valentino.mp4",
      image: "/images/shop.png",
      github: "https://github.com/ImansiKavindi/Online-Shopping-Store",
    },
    {
      title: "Tractor Parts Distribution System",
      description: "A system designed to optimize the import, inventory, and distribution processes for tractor parts, ensuring efficient order management and seamless operations.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      image: "/images/mern.jpg",
      github: "https://github.com/ImansiKavindi/Order-Management-System",
    },
    {
      title: "School Management System",
      description: "Developed a comprehensive system to manage school operations, including maintaining student records, managing classes, and performing search and data handling tasks with ease.",
      technologies: ["Java", "MySQL", "JS"],
      image: "/images/1.png",
      github: "https://github.com/ImansiKavindi/Student-Management-System",
    },
   
     {
      title: "Yummly",
      description: " The Social Platform for Food Lovers.Yummly is a unique social media space made just for home cooks, foodies, and culinary explorers.",
      technologies: ["Spring Boot"],
      image: "/images/Yummly.png",
      github: "https://github.com/ImansiKavindi/Yummly-Backend",
    },
    
    {
      title: "Task Management App",
      description: "A mobile application designed to help users organize tasks efficiently, featuring the ability to create, update, and delete tasks.",
      technologies: ["Kotlin"],
      image: "/images/ticked.jpg",
      github: "https://github.com/ImansiKavindi/Task-Management-App",
    },

    {
      title: "Tic Tac Toe - Game",
      description: "This project demonstrates the core principles of game logic and user interaction through a simple Tic Tac Toe game,providing a fun and engaging experience.",
      technologies: ["HTML", "CSS", "JS" ],
      image: "/images/game.png",
      video:"/images/game.mp4",
      github: "https://github.com/ImansiKavindi/Tic-Tac-Toe-game",
    },
    {
      title: "EmoCare - Simple Chatbot",
      description: "EmoCare is a chatbot designed to provide emotional support through comforting, personalized responses. It helps users navigate their emotions with empathy and understanding.",
      technologies: ["Python" ],
      image: "/images/chatbot.png",
      github: "https://github.com/ImansiKavindi/Simple-Chatbot",
    },

{
      title: "HomeStock",
      description: "HomeStock is a user-friendly web platform that helps you effortlessly manage your home inventory, groceries, and household items.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      image: "/images/HomeStock.png",
      github: "https://github.com/ImansiKavindi/HomeStock",
    },
     {
      title: "Portfolio",
      description: "A personal portfolio showcasing a collection of projects, skills, and achievements.",
      technologies: ["TypeScript", "Next.js", "JS", "CSS"],
      image: "/images/porfolio.png",
      github: "https://github.com/ImansiKavindi/myweb",
    },

   


  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Detect device type on mount and window resize
  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 768) setDeviceType("mobile");
      else if (width <= 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  // Slice projects for desktop/tablet pagination
  const currentProjects =
    deviceType === "desktop" || deviceType === "tablet"
      ? projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)
      : projects; // mobile shows all

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h1>
        <span className={styles.howdy}>P</span>
        <span className={styles.howdyText}>rojects</span>
      </h1>

      <div style={{ position: "relative", width: "100%" }}>
        {/* Show arrows ONLY on desktop */}
        {deviceType === "desktop" && (
          <>
           <button
      onClick={handlePrev}
      style={{
        position: "absolute",
        left: -20,
        top: "45%",
        fontSize: "3rem",
        color:" #ff49b7",
        border: "none",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      &lt;
    </button>
    <button
      onClick={handleNext}
      style={{
        position: "absolute",
        right: 0,
        top: "45%",
        color:" #ff49b7",
        fontSize: "3rem",
        border: "none",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      &gt;
    </button>
          </>
        )}

        <div
          className={`${styles.projectContainer} ${
            deviceType === "mobile"
              ? styles.mobileSwipe
              : deviceType === "tablet"
              ? styles.tabletScroll
              : ""
          }`}
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index + (deviceType !== "mobile" ? currentPage * projectsPerPage : 0)}
              className={`${styles.projectCard} glass-effect`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                setActiveModal(index + (deviceType !== "mobile" ? currentPage * projectsPerPage : 0))
              }
              style={deviceType !== "desktop" ? { minWidth: "250px" } : {}}
            >
              <div className={styles.cardContent}>
                <h2>{project.title}</h2>
                <motion.img
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className={styles.projectImage}
                  whileHover={{ scale: 1.1 }}
                />
                <div className={styles.overlay}>Click to View Details</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className={`${styles.modalContent} glass-effect`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setActiveModal(null)}
              >
                ✖
              </button>
              {projects[activeModal]?.video ? (
                <motion.video controls autoPlay className={styles.modalVideo}>
                  <source
                    src={projects[activeModal]?.video}
                    type="video/mp4"
                  />
                </motion.video>
              ) : (
                <motion.img
                  src={projects[activeModal]?.image}
                  alt={`${projects[activeModal]?.title} poster`}
                  className={styles.modalPoster}
                />
              )}
              <p className={styles.description}>
                {projects[activeModal]?.description}
              </p>
              <div className={styles.techList}>
                {projects[activeModal]?.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={projects[activeModal]?.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubButton}
              >
                <FaGithub size={36} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;
