"use client";
import React from "react";
import Image from "next/image";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import '../globals.css';
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import styles from "../components/Styles/herosection.module.css"; // Import the CSS module

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div className={styles.heroText}>
          <h1>
            <span className={styles.howdy}>H</span> <span className={styles.howdyText}>owdy,</span>  <br />
            <span className={styles.nameText}>I&apos;m</span>
            <span className={`${styles.nameText} ${styles.spacing}`}>Imansi</span>
            <span className={`${styles.nameText} ${styles.spacing}`}>Kulathunga</span>
          </h1>

          {/* Typing Animation for Role */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                3000,
                "Web Developer",
                2000,
                "Android Developer",
                2000,
              ]}
              wrapper="span"
              className={styles.animationText}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <p>
            I am a proactive and detail-oriented undergraduate specializing in
            Information Technology.
          </p>
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
        <a href="/images/cv.pdf" className={styles.glowingButton} download>
    Download CV
         </a>

         <Link href="/#contact" className={styles.glowingButton} >
   Hire me
         </Link>
         

         
          
        </div>
      </div>

      {/* Profile Image and Animated Dashed Frame */}
      <div className="relative w-[360px] h-[320px] mt-10 md:mt-0">
        <Image
          src="/images/profile.png"
          alt="Imansi Kulathunga"
          className="rounded-full object-cover"
          width={360}
          height={320}
        />
        <div className="absolute inset-0 w-full h-full rounded-full animate-spin-slow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6ec7" />
                <stop offset="50%" stopColor="#6eafff" />
                <stop offset="100%" stopColor="#ff6ec7" />
              </linearGradient>
            </defs>
            <circle
              cx="60"
              cy="55"
              r="58"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1"
              strokeDasharray="1, 5, 3, 25, 7"
              strokeDashoffset="0"
            />
          </svg>
        </div>
      </div>

      <div className="bg-[radial-gradient(circle,_rgba(128,0,128,0.7)_0%,_rgba(0,0,0,0)_60%)] 
    rounded-full 
    h-[500px] w-[300px] 
    z-0 blur-lg 
    absolute top-[600px] right-1">
  </div>
      
    </div>
    
  );
};

export default HeroSection;
