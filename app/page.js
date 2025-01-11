import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import GetInTouch from "./components/contact";
import Footer from "./components/Footer";
import "./globals.css"; // Ensure global styles are applied
import ThemeSwitcher from "./components/toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* Navbar */}
      <Navbar />
      <ThemeSwitcher /> 

      {/* Hero Section */}
      <section id="hero" className="container mt-24 mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
        <ProjectSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
        <GetInTouch />
      </section>

      {/* Footer Section */}
      <section id="footer" className="container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
        <Footer />
      </section>
    </main>
  );
}
