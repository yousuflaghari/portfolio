const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 50 },
      { name: "TypeScript", level: 65 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Material UI", level: 80 },
      { name: "UI/UX", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", level: 80 },
      { name: "Redux Toolkit", level: 75 },
      { name: "Redux Thunk", level: 70 },
      { name: "Context API", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 85 },
      { name: "NPM", level: 80 },
      { name: "Yarn", level: 75 },
      { name: "ESLint", level: 70 },
      { name: "Prettier", level: 80 },
      { name: "VScode", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen p-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Skills & Expertise
        </h2>

        <div className="space-y-12">
          {skills.map((category, index) => (
            <div
              key={category.category}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-700">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
