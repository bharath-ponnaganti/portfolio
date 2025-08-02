import React from 'react';
import { Code, Coffee, Heart, MapPin } from 'lucide-react';

const About = () => {
  const internships = [
    {
      title: 'Flutter App Development Intern',
      company: 'Revamp Academy',
      project: 'Flutter Frontend – AJIO',
      certificate: '2022',
      description: 'Developed Flutter frontend application with modern UI/UX principles.',
    },
    {
      title: 'Android Developer Intern',
      company: 'NSIC',
      certificate: '2023',
      description: 'Built native Android applications with Java and Kotlin.',
    },
    {
      title: 'Tester Intern',
      company: 'VRARRI (Japanese Company)',
      duration: '15/12/2024 – 30/05/2025',
      description: 'Worked as a VR tester and contributed to 3 key projects in virtual environments.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 mx-auto bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-200 to-teal-200 rounded-2xl p-8 h-96 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <img
                  src="https://i.postimg.cc/sDP67cJ7/1000067687.jpg"
                  alt="Profile"
                  className="w-80 h-60 mx-auto mb-4 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* About Text and Features */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer eager to start my career by building digital solutions that make a difference. I enjoy turning complex problems into simple, user-friendly, and visually appealing designs. I’m enthusiastic about learning, growing, and contributing to impactful projects.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-blue-100 rounded-xl shadow-md">
                <Code className="text-blue-700" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Clean Code</p>
                  <p className="text-sm text-gray-700">Quality focused</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-orange-100 rounded-xl shadow-md">
                <Coffee className="text-orange-700" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Always Learning</p>
                  <p className="text-sm text-gray-700">Growth mindset</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-red-100 rounded-xl shadow-md">
                <Heart className="text-red-700" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">User Focused</p>
                  <p className="text-sm text-gray-700">UX driven</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-green-100 rounded-xl shadow-md">
                <MapPin className="text-green-700" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Remote Ready</p>
                  <p className="text-sm text-gray-700">Global mindset</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internships Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Internship Experience
          </h2>
          <div className="space-y-8">
            {internships.map((intern, idx) => (
              <div
                key={idx}
                className="border-l-4 border-blue-600 bg-blue-50 hover:bg-blue-100 transition-all pl-6 pr-4 py-4 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {intern.title}
                </h3>
                <p className="text-blue-700 font-semibold">{intern.company}</p>
                {intern.project && (
                  <p className="text-gray-700">Project: {intern.project}</p>
                )}
                {intern.certificate && (
                  <p className="text-gray-700">Certificate: {intern.certificate}</p>
                )}
                {intern.duration && (
                  <p className="text-gray-700">Duration: {intern.duration}</p>
                )}
                <p className="text-gray-600 mt-2">{intern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
