import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import GetInTouch from "./components/contact";
import Footer from "./components/Footer";
import "./globals.css"; // Ensure global styles are applied

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-12 py-12">
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-12 py-12">
        <Skills />
      </section>


      <section id="projects" className="container mx-auto px-12 py-12">
        <ProjectSection />
      </section>

      <section id="contact" className="container mx-auto px-12 py-12">
        <GetInTouch/>
      </section>

      <section id="Footer" className="container mx-auto px-12 py-12">
        <Footer/>
      </section>

    </main>
  );
}
