"use client";
import React from "react";
import styles from "../components/Styles/skills.module.css"; // Import CSS module

const SkillsSection = () => {
  return (
    <section id="skills" className={styles.skillsSection}>

<h1>
              <span className={styles.howdy}>S</span>
              <span className={styles.howdyText}>kills</span>
             
            </h1>
      <div className={styles.skillsContainer}>
        {/* Left Side - Categories */}
        
        
        <div className={styles.leftSide}>

      

          <div className={styles.category}>
            <h2>Languages</h2>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="Python"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="Java"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                alt="PHP"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg"
                alt="Kotlin"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className={styles.category}>
            <h2>Frameworks & Libraries</h2>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg"
                alt="Android"
                width={50}
                height={50}
              />
              <img
                src="/images/ex.png"
                alt="Express.js"
                width={50}
                height={50}
              />
             
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain-wordmark.svg"
                alt="HTML"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                alt="CSS"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain-wordmark.svg"
                alt="Node.js"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className={styles.category}>
            <h2>Databases</h2>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="MySQL"
                width={100}
                height={100}
              />
             
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original-wordmark.svg"
                alt="SQLite"
                width={100}
                height={100}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-plain-wordmark.svg"
                alt="MongoDB"
                width={70}
                height={70}
              />
            </div>
          </div>

          <div className={styles.category}>
            <h2>Tools</h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              <img
                src="/images/github.png"
                alt="GitHub"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg"
                alt="Android Studio"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg"
                alt="Postman"
                width={50}
                height={50}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
                alt="Figma"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className={styles.rightSide}>
          <img
            src="/images/tech.gif" // Replace with your actual image
            alt="Tech Stack Illustration"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
