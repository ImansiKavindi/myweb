'use client';

import React from 'react';

const Bg = () => {
  return (
    <div className="starry-background">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`, // Randomize duration
            animationDelay: `${Math.random() * 2}s`, // Randomize delay
          }}
        ></div>
      ))}

      {/* Internal CSS */}
      <style jsx>{`
        .starry-background {
          position: fixed;  /* Ensure stars stay fixed in the background */
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;  /* Let clicks pass through */
          z-index: -1;  /* Ensure it's behind the content */
        }

        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: white;
          border-radius: 50%;
          opacity: 0.5;
          animation: twinkle infinite;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Bg;
