import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import resume from '../assets/resume.pdf';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['FULL-STACK DEVELOPER', '3D DESIGNER'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full z-10">
        {/* Profile Image */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full animate-glowPulse">
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-70"></div>
  <img
    src={profileImage}
    alt="Bharath Ponnaganti"
    className="relative w-full h-full rounded-full object-cover border-[6px] border-white shadow-xl outline outline-2 outline-gray-300"
  />
</div>


        {/* Text Section */}
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              BHARATH PONNAGANTI
            </span>
          </h1>

          {/* Animated Role Title */}
          <div className="relative h-24 md:h-28 mb-6 flex items-center justify-center w-[300px] md:w-[500px]">
            {titles.map((title, index) => (
              <h2
                key={index}
                className={`absolute text-center w-full text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent transition-opacity duration-1000 ${
                  index === titleIndex
                    ? index % 2 === 0
                      ? 'animate-fadeSlideFromTop'
                      : 'animate-fadeSlideFromBottom'
                    : 'opacity-0'
                }`}
              >
                {title}
              </h2>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Mail size={18} />
              Get In Touch
            </button>

            <a
              href={resume}
              download="Bharath_Ponnaganti_Resume.pdf"
              className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button onClick={scrollToAbout} className="mt-6 animate-bounce z-10">
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
