import Head from "next/head";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import GetInTouch from "./components/contact";
import Footer from "./components/Footer";
import Bg from "./components/bg"; // Bg is imported correctly
import ParticlesContainer from './components/ParticlesContainer';

import "./globals.css";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Particles background */}
      <ParticlesContainer />

      {/* Bg Component as the first item */}
      {/* This will make Bg component render the background */}

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
