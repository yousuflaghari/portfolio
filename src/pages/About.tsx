export default function About() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          About Me
        </h2>

        <div
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          data-aos="fade-up"
        >
          <p className="text-lg text-gray-700 mb-6">
            I'm a frontend developer, building modern web applications. My
            journey in web development started with a passion for creating
            beautiful user interfaces and has evolved into a deep understanding
            of modern frontend technologies.
          </p>

          <p className="text-lg text-gray-700">
            I specialize in React.js and its ecosystem, with a strong focus on
            building scalable and maintainable applications. I'm passionate
            about user experience, accessibility, and writing clean, efficient
            code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="bg-white rounded-lg shadow-lg p-6"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Bachelor in Computer Science</h4>
                <p className="text-gray-600">
                  COMSATS Institute of Information Technology{" "}
                </p>
                <p className="text-gray-500">2018 - 2022</p>
              </li>
            </ul>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Full Stack Developer</h4>
                <p className="text-gray-600">INVEXTECH</p>
                <p className="text-gray-500">Sept-2023 to Nov-2024</p>
              </li>
              <li>
                {/*  <h4 className="font-semibold">Frontend Developer</h4>
                <p className="text-gray-600">Digital Agency XYZ</p>
                <p className="text-gray-500">2017 - 2019</p> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
