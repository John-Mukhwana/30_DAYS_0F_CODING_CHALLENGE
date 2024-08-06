import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-full flex items-center justify-center">
        
      <div className="container mx-auto p-4 md:p-8">
        <div className='items-center justify-center pt-4 pb-8'>
      <p className=" text-center text-3xl md:text-4xl font-bold mb-4 text-yellow-400"> {'About Me { }'} </p>
      </div>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Card Section */}
          <div className="relative mb-8 md:mb-0 md:mr-8">
            <div className="absolute inset-0 bg-yellow-400 rounded-lg blur-lg opacity-50"></div>
            <div className="absolute inset-0 bg-gray-700 rounded-lg transform rotate-3"></div>
            <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">AFRiTeQ_ORG</h1>
            </div>
          </div>
          {/* About Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-12 w-full md:w-2/3">
            <p className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400"> {'About Me '} </p>
            <div className="border-b-2 border-yellow-400 w-24 mb-6"></div>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Hello! I'm John Bradill Mukhwana, a passionate Teach2Give trained Fullstack Developer  with a keen interest in creating dynamic and responsive web applications. With a background in both front-end and back-end development, I thrive on building projects that make a difference. I love exploring new technologies and continuously learning to improve my skills.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              My journey in web development started from a fascination with how websites work and evolved into a career where I get to solve real-world problems through code. I enjoy collaborating with others and believe that teamwork is essential for creating impactful solutions. When I'm not coding, you can find me exploring new places, reading tech blogs, or indulging in a good book.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              I'm proficient in a variety of technologies including React, Node.js, Express, and Python. My goal is to continue growing as a developer and to contribute to meaningful projects that have a positive impact on people's lives.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition duration-300">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
