import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "SASS/SCSS", level: 88 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 92 },
        { name: "Django", level: 80 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 95 }
      ]
    }
  ];

  const techStack = [
    { name: "React", bg: "bg-blue-500" },
    { name: "Vue", bg: "bg-green-500" },
    { name: "Node", bg: "bg-lime-600" },
    { name: "Python", bg: "bg-yellow-500" },
    { name: "Docker", bg: "bg-sky-600" },
    { name: "AWS", bg: "bg-orange-500" },
    { name: "Git", bg: "bg-red-500" },
    { name: "MongoDB", bg: "bg-emerald-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 mx-auto bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Technologies I Use</h3>
          <div className="w-24 h-1 mx-auto bg-blue-600 rounded-full mb-8"></div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
              >
                <div
                  className={`w-12 h-12 ${tech.bg} text-white font-bold text-lg rounded-full flex items-center justify-center mb-2 shadow-inner`}
                >
                  {tech.name[0]}
                </div>
                <p className="text-sm font-medium text-gray-800">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
