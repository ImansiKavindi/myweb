"use client";
import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../components/Styles/about.module.css";
import "../globals.css";

const AboutSection = () => {
  const [tab, setTab] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const certifications = [
    {
      src: "/images/sliit1.jpg",
      alt: "AI/ML Engineer - Stage 1",
      title: "AI/ML Engineer - Stage 1",
      org: "SLIIT Faculty of Computing",
    },
    {
      src: "/images/sliit2.jpg",
      alt: "AI/ML Engineer - Stage 2",
      title: "AI/ML Engineer - Stage 2",
      org: "SLIIT Faculty of Computing",
    },
    {
      src: "/images/jp.jpg",
      alt: "Java Programming",
      title: "Java Programming",
      org: "Great Learning",
    },
    {
      src: "/images/oop.jpg",
      alt: "OOPs in Java",
      title: "OOPs in Java",
      org: "Great Learning",
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab((prevTab) => (prevTab === id ? null : id));
      setCurrentCertIndex(0); // Reset index on tab change
    });
  };

  const handlePrev = () => {
    setCurrentCertIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentCertIndex((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
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

            <div>
              <p>
                I’m Imansi — a 22-year-old girl from the coastal city of Galle, now living closer to the heart of Sri Lanka in Kadawatha. My journey began not just in classrooms, but on volleyball courts, dance stages, and student leadership boards. School wasn’t just about books for me; it was about showing up, stepping up, and discovering who I was meant to be.
              </p>
              <p>
                That same energy now drives me as a third-year undergraduate specializing in Information Technology at SLIIT. I’ve always been curious about how things work — not just machines, but systems, ideas, and people. Technology, to me, isn’t just code and screens. It’s about solving problems, creating something that didn’t exist before, and making life easier, even in small ways.
              </p>
              <p>
                ’ve found a passion in web and mobile development, project coordination, and building digital experiences that matter. Whether I’m collaborating with a team, tackling a challenge, or organizing events with AIESEC, I bring my full self — eager to learn, contribute, and grow.
              </p>
              <p>
                Right now, I’m looking for an internship that feels like the next chapter — where I can gain real-world experience, be part of something exciting, and keep becoming the best version of myself. And when I’m not deep into code or planning something new, I’m probably dreaming up ideas, learning something unexpected, or just appreciating the little things that make this journey worth it.
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

            {/* Education */}
            {tab === "education" && (
              <div className={styles.imageContainer}>
                <Image
                  src="/images/sliit.png"
                  alt="SLIIT LOGO"
                  className={styles.heroImage}
                  width={150}
                  height={150}
                />
                <ul>
                  <dl>
                    BSc (Hons) Specializing in Information Technology
                  </dl>
                  <li>Sri Lankan Institute of Information Technology (SLIIT)</li>
                  <li>Year 3 Semester 1</li>
                </ul>
              </div>
            )}

            {/* Certifications - One at a Time */}
            {tab === "certifications" && (
              <div className={styles.imageContainer}>
              <div className={styles.certSliderWrapper}>
                <button className={styles.arrow} onClick={handlePrev}>
                  &lt;
                </button>

                <div className={styles.certCard}>
                  <Image
                    src={certifications[currentCertIndex].src}
                    alt={certifications[currentCertIndex].alt}
                    className={styles.certImage}
                    width={300}
                    height={300}
                  />
                  <div className={styles.certText}>
                    <strong>{certifications[currentCertIndex].title}</strong>
                    <p>{certifications[currentCertIndex].org}</p>
                  </div>
                </div>

                <button className={styles.arrow} onClick={handleNext}>
                  &gt;
                </button>
              </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
