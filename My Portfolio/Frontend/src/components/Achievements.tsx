

import { useState } from 'react';
import '../Styles/Achievements.css';
import { FaChevronDown, FaChevronUp, FaJsSquare, FaReact, FaNodeJs, FaBuilding, FaShieldAlt, FaNetworkWired, FaCloud } from 'react-icons/fa';
import { SiDart, SiFlutter, SiMicrosoftexcel, SiTypescript } from 'react-icons/si';

const achievements = [
  {
    title: 'Fullstack Developer Certification',
    year: 'May 2024 - July 2024',
    description: 'Certified as a Fullstack Developer.Trained in both frontend and backend technologies.',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1723030477/ai45vvjuoxfb13ml1uyk.jpg',
    technologies: ['TypeScript','JavaScript', 'React', 'Node.js'],
    organization: 'Teach2Give'
  },
  {
    title: 'Data Analyst',
    year: '2023 - 2024',
    description: 'Certified as a Data Analyst. Trained in data analysis and visualization.',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1723031870/d7raympcskuqmfblkioe.png',
    technologies: ['Microsoft Excel'],
    organization: 'Ajira Digital'
  },
  {
    title: 'Network Security Specialist',
    year: 'May 2024- Present',
    description: 'Huawei Certified Network Security Specialist. Currently being trained in network security.',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1723398884/ftddhqhghqmjz7jpze0d.jpg',
    technologies: ['Huawei USG Series', 'Huawei eNSP ', 'Huawei CloudCampus'],
    organization: 'Huawei ICT Academy'
  },
  {
    title: 'Mobile App Developer',
    year: '2024 - Present',
    description: 'Training on Mobile App Development. Currently learning how to develop mobile applications uing Dart with With Flutter.',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1723401312/jdoshf6eorr7ckslijkw.jpg',
    technologies: ['Dart', 'Flutter'],
    organization: 'Self-taught'
  }
];

const techIcons: { [key: string]: JSX.Element } = {
  'JavaScript': <FaJsSquare className='text-yellow-600' />,
  'React': <FaReact className='text-blue-600' />,
  'Node.js': <FaNodeJs className='text-green-600'/>,
  'Redux': <FaReact />, // Assuming Redux uses the same icon as React
  'TypeScript': <SiTypescript className='text-blue-600'/>, // Placeholder, as there isn't a FontAwesome icon for TypeScript
  'Microsoft Excel':<SiMicrosoftexcel/>,
  'Huawei USG Series': <FaShieldAlt className='text-blue-300'/>,
  'Huawei eNSP ':<FaNetworkWired className='text-red-600'/>,
  'Huawei CloudCampus':<FaCloud className='text-blue-600'/>,
  'Dart': <SiDart className='text-blue-600'/>,
  'Flutter': <SiFlutter className='text-blue-600' />
};

const Achievements = () => {
  const [showDetails, setShowDetails] = useState(Array(achievements.length).fill(false));

  const toggleDetails = (index: number) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <div className=" text-white min-h-full p-8">
      <div className="container mx-auto">
        <div className="text-center items-center pb-8">
          <p className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-yellow-400">{'Achievements { }'}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-start">
              <div className="achievement-image-container w-full md:w-1/3 flex-shrink-0">
                <img src={achievement.image} alt={achievement.title} className="rounded-full achievement-image w-full md:w-auto" />
              </div>
              <div className="achievement-details ml-4 mt-4 md:mt-0 md:ml-8 flex-1">
                <h3 className="text-2xl font-bold text-green-400  dark:text-yellow-400">{achievement.title}</h3>
                <p className="text-sky-400 my-1">{achievement.year}</p>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                {showDetails[index] && (
                  <div className="additional-details mt-2">
                    <p className="text-green-400 dark:text-yellow-400 mb-1">Technologies:</p>
                    <ul className="list-disc list-inside flex flex-wrap mb-4">
                      {achievement.technologies.map((tech, idx) => (
                        <li key={idx} className=" flex items-center mr-4 mb-2">
                          {techIcons[tech as keyof typeof techIcons]}<span className="ml-2">{tech}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-green-400 dark:text-yellow-400 mt-2 flex items-center"><FaBuilding className="mr-2" />Organization:</p>
                    <p className="text-gray-300">{achievement.organization}</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => toggleDetails(index)}
                className="mt-4 bg-green-400 hover:bg-yellow-400 dark:hover:bg-green-500 dark:bg-yellow-400 text-black p-2 rounded-md flex items-center self-end md:self-auto"
              >
                {showDetails[index] ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
                {showDetails[index] ? 'Less Details' : 'More Details'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
