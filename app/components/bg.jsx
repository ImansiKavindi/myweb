'use client';

import React from 'react';

const Bg = () => {
  const [stars, setStars] = React.useState([]);

  React.useEffect(() => {
    const generatedStars = [...Array(50)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 5 + 3,
      animationDelay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="starry-background">
      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className={`star ${i % 2 === 0 ? 'big-star' : 'small-star'}`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        ></div>
      ))}

      <style jsx>{`
        .starry-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
          background-color: black;
        }

        .star {
          position: absolute;
          border-radius: 50%;
          background-color: white;
          opacity: 0;
          animation: twinkle infinite;
        }

        .big-star {
          width: 5px;
          height: 5px;
        }

        .small-star {
          width: 3px;
          height: 3px;
        }

        @keyframes twinkle {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Bg;
