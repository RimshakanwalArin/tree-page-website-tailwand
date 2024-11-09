import React from 'react';

const About = () => {
  return (
    <div className="about-container bg-gary-950 min-h-screen flex items-center justify-center p-6">
      <div className="about-card bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 md:p-10">
        <div className="about-header text-center mb-8">
          <h1 className="about-title text-4xl font-bold text-gray-800">Rimsha Kanwal</h1>
          <p className="about-subtitle text-lg text-gray-600">Web Developer</p>
          <p className="about-subtitle text-lg text-gray-600">arinrimshakanwal@gmail.com</p>
        </div>
        <div className="about-section space-y-8">
          <div>
            <h2 className="section-title text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h2>
            <p className="section-text text-gray-700 leading-relaxed">
              A passionate Web Developer with over 2 years of experience in building and maintaining responsive websites using Python and Django. Skilled in creating dynamic web applications, implementing RESTful APIs, and integrating third-party services. Proficient in both front-end and back-end development, with a keen eye for detail and a commitment to delivering high-quality solutions.
            </p>
          </div>
          <div>
            <h2 className="section-title text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
            <ul className="list list-disc pl-5 text-gray-700">
              <li>
                <strong>Languages:</strong> Python, JavaScript, TypeScript, HTML, CSS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
