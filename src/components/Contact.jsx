import React from "react";
import Navbar from "./Navbar";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F2C] to-[#051538] text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-20 p-10 rounded-3xl shadow-2xl 
                      backdrop-blur-xl bg-white/10 border border-white/20
                      animate-[fadeIn_0.6s_ease]">

        {/* Header */}
        <h1 className="text-5xl font-extrabold mb-4 
                       bg-gradient-to-r from-blue-300 to-purple-400 
                       text-transparent bg-clip-text">
          Contact Me
        </h1>

        <p className="text-lg text-gray-300 mb-10">
          I’d love to hear from you! Whether it's about collaboration, feedback,
          or just saying hello — feel free to reach out.
        </p>

        {/* Contact Cards */}
        <div className="flex flex-col gap-8">

          {/* EMAIL CARD */}
          <a
            href="mailto:mvikash1630@gmail.com"
            className="flex items-center gap-4 p-6 rounded-2xl 
                       bg-white/10 hover:bg-white/20 
                       border border-white/20 hover:border-white/40
                       backdrop-blur-xl shadow-lg hover:shadow-2xl
                       transition-all duration-300 group"
          >
            <FaEnvelope className="text-4xl text-blue-300 group-hover:scale-110 transition" />
            <div>
              <h2 className="text-2xl font-bold">Email Me</h2>
              <p className="text-gray-300">mvikash1630@gmail.com</p>
            </div>
          </a>

          {/*ALTERNATE EMAIL CARD */}
          <a
            href="mailto:mvikash1630@gmail.com"
            className="flex items-center gap-4 p-6 rounded-2xl 
                       bg-white/10 hover:bg-white/20 
                       border border-white/20 hover:border-white/40
                       backdrop-blur-xl shadow-lg hover:shadow-2xl
                       transition-all duration-300 group"
          >
            <FaEnvelope className="text-4xl text-blue-300 group-hover:scale-110 transition" />
            <div>
              <h2 className="text-2xl font-bold">ALTERNATE Email</h2>
              <p className="text-gray-300">mvikash1630@gmail.com</p>
            </div>
          </a>

          {/* GITHUB CARD */}
          <a
            href="https://github.com/vikash1630"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl 
                       bg-white/10 hover:bg-white/20 
                       border border-white/20 hover:border-white/40
                       backdrop-blur-xl shadow-lg hover:shadow-2xl
                       transition-all duration-300 group"
          >
            <FaGithub className="text-4xl text-purple-300 group-hover:scale-110 transition" />
            <div>
              <h2 className="text-2xl font-bold">GitHub</h2>
              <p className="text-gray-300">github.com/vikash1630</p>
            </div>
          </a>
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-gray-400 text-sm">
          Built with ❤️ using React + Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Contact;
