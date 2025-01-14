"use client";
import React from "react";
import Image from "next/image";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center mt-[-200px] p-4">
      {/* Text Content */}
      <div className="flex-1 md:ml-[100px] md:mt-0 text-center md:text-left">
        <h1>
          <span className="text-[150px] md:mt-[-50px] font-[cursive] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 tracking-wide">
            H
          </span>
          <span className="ml-2 text-[80px] text-white font-[cursive]">owdy,</span>
          <br />
          <span className="text-3xl text-white font-sans">I&apos;m</span>
          <span className="text-3xl text-white font-sans ml-4">Imansi</span>
          <span className="text-3xl text-white font-sans ml-4">Kulathunga</span>
        </h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Developer",
              3000,
              "Web Developer",
              2000,
              "Android Developer",
              2000,
            ]}
            wrapper="span"
            className="block mt-5 text-[1.8rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400"
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <p className="text-[1.3rem] text-gray-300 mt-5 leading-[1.8] mb-8">
          I am a proactive and detail-oriented undergraduate specializing in
          Information Technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/images/cv.pdf"
            className="text-[1rem] px-6 py-2 bg-transparent border border-white text-pink-500 rounded-full shadow-lg hover:shadow-pink-500/50 transition-transform duration-300 transform hover:scale-105"
            download
          >
            Download CV
          </a>
          <Link
            href="/#contact"
            className="text-[1rem] px-6 py-2 bg-transparent border border-white text-pink-500 rounded-full shadow-lg hover:shadow-pink-500/50 transition-transform duration-300 transform hover:scale-105"
          >
            Hire me
          </Link>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative w-[360px] h-[320px] mt-10 md:mt-0">
        <Image
          src="/images/profile.png"
          alt="Imansi Kulathunga"
          className="rounded-full object-cover transition-transform duration-300 transform hover:scale-110"
          width={360}
          height={320}
        />
        <div className="absolute inset-0 w-full h-full rounded-full animate-spin-slow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6ec7" />
                <stop offset="50%" stopColor="#6eafff" />
                <stop offset="100%" stopColor="#ff6ec7" />
              </linearGradient>
            </defs>
            <circle
              cx="60"
              cy="60"
              r="58"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1"
              strokeDasharray="1, 5, 3, 25, 7"
              strokeDashoffset="0"
            />
          </svg>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-[600px] right-1 bg-[radial-gradient(circle,_rgba(128,0,128,0.7)_0%,_rgba(0,0,0,0)_60%)] rounded-full h-[500px] w-[300px] z-0 blur-lg"></div>
    </div>
  );
};

export default HeroSection;
