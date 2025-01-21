"use client"; // Ensure this component runs on the client-side

import React, { useState, useEffect } from 'react';

const Footer = () => {
  // State to detect window size for responsiveness
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile breakpoint at 768px
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Inline CSS styles for the footer
  const styles = {
    smallFooter: {
      borderTop: '1px solid #ccc', // Line above the footer
      padding: '10px',
      textAlign: 'left',
      position: 'relative', // Position relative to its container
      bottom: 0, // Ensures it sticks at the bottom when content is short
      width: '100%', // Full width of the screen
    },
    footerContent: {
      margin: 0,
      fontSize: '14px',
      color: '#fff',
    },
    brand: {
      fontWeight: 'bold',
      color: '#007bff',
    },
    scrollToTopButton: {
      position: 'absolute', // Position button inside the footer
      bottom: isMobile ? '0px' : '1px', // Adjust for mobile and desktop
      right: isMobile ? '10px' : '20px', // Adjust position for mobile and desktop
      color: '#fff',
      border: 'none',
      borderRadius: '30%',
      padding: isMobile ? '4px 8px' : '4px 10px',// Adjust padding for mobile and desktop
      fontSize: isMobile ? '14px' : '18px', // Adjust font size for mobile and desktop
      cursor: 'pointer',
      boxShadow: '0 0 4px #ff00ff',
      zIndex: 10, // Ensure the button stays on top
      
    },
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer style={styles.smallFooter}>
      <div style={styles.footerContent}>
        <p>
          Copyright &copy; 2024 by <span style={styles.brand}>@EmnC❤️</span> | All Rights Reserved.
        </p>
      </div>

      {/* Scroll to Top Button inside the footer */}
      <button
        style={styles.scrollToTopButton}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
