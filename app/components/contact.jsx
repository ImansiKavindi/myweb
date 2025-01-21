"use client";
import React, { useState } from "react";
import styles from "../components/Styles/email.module.css";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com"; // Import EmailJS SDK

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data
    const data = {
      from_name: e.target.email.value,  // Get the email as sender's name
      to_email: "kavindikulathunga203@gmail.com", // Replace with your email
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      // Send the form data using EmailJS
      const response = await emailjs.send(
        "service_iwn4u4s", // Your EmailJS service ID
        "template_1c88vm5", // Your EmailJS template ID
        data,
        "GRz9_ssmxtH3cQCE0" // Your EmailJS user ID
      );
      
      if (response.status === 200) {
        setEmailSubmitted(true);
        // Hide the "Thank You" message after 3 seconds
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 3000); // The message will disappear after 3 seconds
      }
    } catch (error) {
      console.error("EmailJS Error: ", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-1 relative">
      {/* Background Blur */}
      
      {/* Left Section */}
      <div className="z-5">
        <h1>
          <span className={styles.howdy}>G</span>
          <span className={styles.howdyText}>et in touch</span>
        </h1>
        <p className="text-[#ffff] mb-5 max-w-md text-lg">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://wa.me/94786177789" target="_blank" rel="noopener noreferrer">
            <Image src="/images/whtap.png" alt="Whatsapp Icon" width={60} height={60} />
          </Link>
          <Link href="https://github.com/ImansiKavindi" target="_blank" rel="noopener noreferrer">
            <Image src="/images/github..png" alt="Github Icon" width={57} height={60} style={{ objectFit: "contain", transform: "scale(1.5)" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/imansi-kulathung/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/link.png" alt="LinkedIn Icon" width={60} height={60} />
          </Link>
        </div>
        
      </div>
 

      {/* Right Section */}
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Thank you! Your message has been sent.</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-lg font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>

            {/* Subject Input */}
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-lg mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-lg mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                cols="30"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let&apos;s talk about..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.btn}>
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className="bg-[radial-gradient(circle,_rgba(128,0,128,0.7)_0%,_rgba(0,0,0,0)_60%)] 
    rounded-full 
    h-[200px] w-[200px] 
    z-0 blur-lg 
    absolute top-[500px] left-[300px]">
  </div>
    </section>
  );
};

export default EmailSection;
