"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../components/Styles/email.module.css";

const GetInTouch = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h1>
        <span className={styles.howdy}>G</span>
        <span className={styles.howdyText}>et In Touch</span>
      </h1>
      <div className={styles.contactContainer}>
        {/* Email Section */}
        <motion.a
          href="mailto:kavindikulathunga203@gmail.com"
          className={`${styles.contactCard} ${styles.emailCard}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/images/gmail.png"
            alt="Gmail Icon"
            className={styles.iconImage}
          />
          <h3>Email Me</h3>
          <p>Send an email to discuss opportunities or projects.</p>
        </motion.a>

        {/* WhatsApp Section */}
        <motion.a
          href="https://wa.me/94786177789"
          className={`${styles.contactCard} ${styles.whatsappCard}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/images/whtap.png"
            alt="WhatsApp Icon"
            className={styles.iconImage}
          />
          <h3>WhatsApp</h3>
          <p>Message me directly for quick communication.</p>
        </motion.a>

        {/* LinkedIn Section */}
        <motion.a
          href="https://www.linkedin.com/in/imansi-kulathunga-677865281/"
          className={`${styles.contactCard} ${styles.linkedinCard}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/images/link.png"
            alt="LinkedIn Icon"
            className={styles.iconImage}
          />
          <h3>LinkedIn</h3>
          <p>Connect with me on LinkedIn for professional inquiries.</p>
        </motion.a>
      </div>
    </section>
  );
};

export default GetInTouch;
