'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

export default function ParticlesContainer() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load the full tsParticles library
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-[-1]" // Ensure it stays behind content
      options={{
        background: {
          color: {
            value: 'transparent', // Transparent background
          },
        },
        fpsLimit: 60, // Frame rate limit
        interactivity: {
          events: {
            onClick: {
              enable: true, // Enable click interaction
              mode: 'push', // Push new particles on click
            },
            onHover: {
              enable: true, // Enable hover interaction
              mode: 'repulse', // Repulse particles when hovered
            },
            resize: true, // Resize particles based on window size
          },
          modes: {
            push: {
              quantity: 4, // Number of particles pushed on click
            },
            repulse: {
              distance: 200, // Repulse distance when hovered
              duration: 0.4, // Repulse effect duration
            },
          },
        },
        particles: {
          color: {
            value: ['#552586'],  // Gradient effect (transition between two colors)
           
          },
          links: {
            color: {
              value: [ '#804FB3'], // Links will transition between these colors
            },
            distance: 150, // Distance at which links appear
            enable: true, // Enable links
            opacity: 0.5, // Link opacity
            width: 1, // Link width
          },
          move: {
            direction: 'none', // No specific direction for particle movement
            enable: true, // Enable movement
            outModes: {
              default: 'bounce', // Particles will bounce when they reach the edge
            },
            random: false, // No random movement
            speed: 1, // Particle speed
            straight: false, // Particles don't move in a straight line
          },
          number: {
            density: {
              enable: true, // Enable density control
              area: 500, // Density area
            },
            value: 80, // Number of particles
          },
          opacity: {
            value: 0.5, // Opacity of particles
          },
          shape: {
            type: 'circle', // Circular particles
          },
          size: {
            value: { min: 1, max: 3 }, // Size range for particles
          },
        },
        detectRetina: true, // Retina support for high DPI screens
      }}
    />
  );
}
