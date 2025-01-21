"use client";
import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you're using Next.js
import styles from "../components/Styles/about.module.css"; // Import CSS module
import "../globals.css";

const AboutSection = () => {
  const [tab, setTab] = useState(null); // No tab is selected initially
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab((prevTab) => (prevTab === id ? null : id)); // Toggle the same tab
    });
  };

  const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? styles.activeTab : styles.inactiveTab;
    const variants = {
      default: { width: 0 },
      active: { width: "calc(100% - 1rem)" },
    };

    return (
      <button onClick={selectTab} className={styles.tabButton}>
        <p className={buttonClasses}>{children}</p>
        <motion.div
          animate={active ? "active" : "default"}
          variants={variants}
          className={styles.underline}
        ></motion.div>
      </button>
    );
  };

  return (
    <section id="about" className={styles.section}>
   
   

      <div className={styles.about}>
    
        
        <div className={styles.contentContainer}>
        
          <div className={styles.aboutText}>
            <h1>
              <span className={styles.howdy}>A</span>
              <span className={styles.howdyText}>bout me</span>
              <br />
            </h1>
           {/* Background Blur */}
    
     
            <div>
              <p>
              I’m Imansi Kavindi, a second-year Information Technology student at SLIIT. 
              With expertise in full-stack web development and Android app development
                As a driven Information Technology undergraduate at SLIIT, I
                specialize in full-stack web and mobile development with a
                strong focus on crafting seamless, high-performance
                applications.
              </p>
              <p>
              I thrive in fast-paced, collaborative environments and enjoy tackling complex challenges.
               As a quick learner and problem-solver, I am passionate about using technology to create impactful solutions.
                Eager to contribute to impactful, forward-thinking teams, I am
                seeking opportunities that challenge my capabilities and drive
                me to deliver meaningful results.
              </p>
              
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>

            {/* Tab Content */}
            {tab === "education" && (
              <div className={styles.imageContainer}>
                <Image
                  src="/images/sliit.png" // Replace with your actual image path
                  alt="SLIIT LOGO"
                  className={styles.heroImage}
                  width={150}
                  height={150}
                />
                <ul>
                  <dl>BSc (Hons) Specializing in Information Technology</dl>
                  <li>Sri Lankan Institute of Information Technology (SLIIT)</li>
                  <li>Year 3 Semester 1</li>
                </ul>
              </div>
            )}

            {tab === "certifications" && (
              <div className={styles.cerfy}>
                <ol>
                  <li className={styles.certItem}>
                    <div className={styles.certContent}>
                      <div className={styles.certImageWrapper}>
                        <Image
                          src="/images/sliit1.jpg"
                          alt="AI/ML Engineer - Stage 1 Certificate"
                          className={styles.certImage}
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className={styles.certText}>
                        <strong>AI/ML Engineer - Stage 1</strong>
                        <p>
                          SLIIT Faculty of Computing <br/>Centre for Open and Distance Education
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className={styles.certItem}>
                    <div className={styles.certContent}>
                      <div className={styles.certImageWrapper}>
                        <Image
                          src="/images/sliit2.jpg"
                          alt="AI/ML Engineer - Stage 2 Certificate"
                          className={styles.certImage}
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className={styles.certText}>
                        <strong>AI/ML Engineer - Stage 2</strong>
                        <p>
                          SLIIT Faculty of Computing <br/> Centre for Open and Distance Education
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className={styles.certItem}>
                    <div className={styles.certContent}>
                      <div className={styles.certImageWrapper}>
                        <Image
                          src="/images/jp.jpg"
                          alt="Java Programming Certificate"
                          className={styles.certImage}
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className={styles.certText}>
                        <strong>Java Programming</strong>
                        <p>Great Learning</p>
                      </div>
                    </div>
                  </li>

                  <li className={styles.certItem}>
                    <div className={styles.certContent}>
                      <div className={styles.certImageWrapper}>
                        <Image
                          src="/images/oop.jpg"
                          alt="OOPs in Java Certificate"
                          className={styles.certImage}
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className={styles.certText}>
                        <strong>OOPs in Java</strong>
                        <p>Great Learning</p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
