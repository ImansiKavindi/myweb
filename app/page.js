"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import GetInTouch from "./components/contact";
import Footer from "./components/Footer";
import Bg from "./components/bg"; // Bg for mobile
import ParticlesContainer from "./components/ParticlesContainer"; // Particles for desktop

import "./globals.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="overflow-x-hidden relative">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Conditional Rendering */}
      {isMobile ? <Bg /> : <ParticlesContainer />}

      <Navbar />

      <section
        id="hero"
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12"
      >
        <HeroSection />
      </section>

      <section
        id="about"
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12"
      >
        <AboutSection />
      </section>

      <section
        id="skills"
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12"
      >
        <ProjectSection />
      </section>

      <section
        id="contact"
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12"
      >
        <GetInTouch />
      </section>

      <section
        id="footer"
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12"
      >
        <Footer />
      </section>
    </div>
  );
}
