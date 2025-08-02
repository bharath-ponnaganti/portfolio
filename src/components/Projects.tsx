import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Key Logger Security System',
      description: 'A comprehensive security system for monitoring keystrokes with advanced analytics and reporting features.',
      technologies: ['Figma', 'Python', 'Excel'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Task Management App',
      description: 'A real-time collaborative task management application with instant updates and modern UI design.',
      technologies: ['Vue.js', 'Firebase', 'Socket.io', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Leaf Anatomy in VR',
      description: 'An immersive VR experience for studying leaf anatomy with interactive 3D models and educational content.',
      technologies: ['C#', 'Blender', 'Unity', 'Oculus'],
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Social Media Analytics Dashboard',
      description: 'A comprehensive dashboard for analyzing social media metrics with beautiful data visualizations.',
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Virtual Herbal Garden',
      description: 'An interactive VR application showcasing medicinal plants with detailed information and 3D models.',
      technologies: ['Unity', 'Blender', 'C#', 'Oculus'],
      image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 mx-auto bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden border border-gray-300 flex flex-col h-[430px] rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
