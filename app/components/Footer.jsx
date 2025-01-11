"use client"; // Ensure this component runs on the client-side

import React from 'react';

const Footer = () => {
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
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      
      color: '#fff',
      border: 'none',
      borderRadius: '30%',
      padding: '10px 15px',
      fontSize: '18px',
      cursor: 'pointer',
      boxShadow: '0 0 10px #ff00ff',
      // Make sure the button stays on top
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
      {/* Scroll to Top Button */}
      <button
        style={styles.scrollToTopButton}
        onClick={scrollToTop}
        onMouseOver={(e) => (e.target)}
        onMouseOut={(e) => (e.target)}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
