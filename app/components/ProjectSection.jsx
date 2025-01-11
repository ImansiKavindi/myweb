"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../components/Styles/project.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

const ProjectSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      title: "Tractor Parts Distribution System",
      description: "A system designed to optimize the import, inventory, and distribution processes for tractor parts, ensuring efficient order management and seamless operations for AGS Agro Asia (PVT) Ltd.",
      technologies: ["MongoDB", "Express.js", "React","Node.js"],
      video: null, // No video, uses poster
      image: "/images/mern.jpg",
      github: "https://github.com/ImansiKavindi/Order-Management-System",
    },
    {
      title: "Online Shopping Store",
      description: " An e-commerce platform providing users with a seamless online shopping experience, including product browsing, order placement, and account management features..",
      technologies: ["HTML","CSS","PHP","JS","Mysql"],
      video: "/images/valentino.mp4",
      image: "/images/shop.png",
      github: "https://github.com/ImansiKavindi/Online-Shopping-Store",
    },
    {
      title: "Bliss - Calming App",
      description: "A relaxation app focused on enhancing mental well-being through features like soothing sounds, guided meditations, and positive affirmations to help users reduce stress and improve focus.",
      technologies: ["Kotlin"],
      video: "/images/Bliss.mp4",
      image: "/images/5.png",
      github: "https://github.com/username/ecommerce-app",
    },

    {
        title: "School Management System",
        description: "Developed a comprehensive system to manage school operations, including maintaining student records, managing classes, and performing search and data handling tasks with ease.",
        technologies: ["Java", "MySQL", "JS"],
        image: "/images/1.png", // Thumbnail image
        github: "https://github.com/ImansiKavindi/Student-Management-System",
       
      },

      {
        title: "Portfolio",
        description: "A personal portfolio showcasing a collection of projects, skills, and achievements. Designed to highlight expertise and creativity, it provides an engaging and professional platform for visitors to explore and learn more.",
        technologies: ["TypeScript", "Next.js", "JS","CSS"],
        image: "/images/porfolio.png", // Thumbnail image
        github: "https://github.com/ImansiKavindi/portfolio",
        
      },


      {
        title: "Task management application",
        description: "A mobile application designed to help users organize tasks efficiently, featuring the ability to create, update, and delete tasks, along with notifications to keep users on track.",
        technologies: ["Kotlin"],
        image: "/images/ticked.jpg", // Thumbnail image
        github: "https://github.com/ImansiKavindi/Task-Management-App",
        
      },








  ];

  return (
    <section id="projects" className={styles.projectsSection}>
       <div
  className="bg-[radial-gradient(circle,_rgba(128,0,128,0.7)_0%,_rgba(0,0,0,0)_60%)] 
    rounded-full 
    h-[500px] w-[700px] 
    z-0 blur-lg 
    absolute top-[2000px] right-[300px]"
>
</div>

      <h1>
        <span className={styles.howdy}>P</span>
        <span className={styles.howdyText}>rojects</span>
      </h1>

      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCard} glass-effect`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              className={styles.cardContent}
              onClick={() => setActiveModal(index)}
            >
              <h2>{project.title}</h2>
              <motion.img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className={styles.projectImage}
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Section */}
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
             
              
              {/* Render video or poster */}
              {projects[activeModal]?.video ? (
                <motion.video
                  controls
                  autoPlay
                  className={styles.modalVideo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            <div className={styles.des}>
              <p>{projects[activeModal]?.description}</p>
              </div>

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
                     <FaGithub size={36}/>
                 </a>
              
               
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
  className="bg-[radial-gradient(circle,_rgba(128,0,128,0.7)_0%,_rgba(0,0,0,0)_50%)] 
    rounded-full 
    h-[500px] w-[500px] 
    z-0 blur-lg 
    absolute top-[3100px] right-[0px]"
>
</div>

    </section>
  );
};

export default ProjectSection;
