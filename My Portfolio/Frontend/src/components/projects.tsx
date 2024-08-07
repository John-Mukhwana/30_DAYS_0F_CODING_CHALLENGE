

import '../Styles/Projects.css';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const projects = [
  {
    title: 'Vehicle Rental Management System',
    description: 'A vehicle rental management system developed with ReactJS and tailwind CSS,with Nodejs, Hono,Drizzle ORM ,Typescript, and PostgresSQL for the backend,supposed to enable user book a vehicle ,make payment and Rent it also enable the admin to manage the system .This was a Final assessment project for the Teach2Give Training program..',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1722981747/o0x5rno7apugukjrd2nx.jpg',
    codeLink: '',
    liveLink: 'https://exotravel.vercel.app/',
    status: 'Completed'
  },
  {
    title: 'Project 2',
    description: 'A blogging application developed with ReactJS and styled components, styled components is a CSS in JS technology that helps organize CSS..',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1721572329/rxyxql96y331qpsgo20r.jpg',
    codeLink: 'https://github.com/your-profile/project2',
    liveLink: 'https://your-live-project-link.com',
    status: 'In Progress'
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1721572329/rxyxql96y331qpsgo20r.jpg',
    codeLink: 'https://github.com/your-profile/project2',
    liveLink: 'https://your-live-project-link.com',
    status: 'In Progress'
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1721572329/rxyxql96y331qpsgo20r.jpg',
    codeLink: 'https://github.com/your-profile/project2',
    liveLink: 'https://your-live-project-link.com',
    status: 'In Progress'
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1721572329/rxyxql96y331qpsgo20r.jpg',
    codeLink: 'https://github.com/your-profile/project2',
    liveLink: 'https://your-live-project-link.com',
    status: 'In Progress'
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1721572329/rxyxql96y331qpsgo20r.jpg',
    codeLink: 'https://github.com/your-profile/project2',
    liveLink: 'https://your-live-project-link.com',
    status: 'In Progress'
  },
 
  // Add more projects here
];

const Projects = () => {
  return (
    <div className=" text-white min-h-full p-8">
      <div className="container grid mx-auto">
        <div className=' text-center items-center pb-8'>
         <p className="  text-3xl md:text-4xl font-bold mb-4 text-yellow-400"> {'Featured Projects { }'} </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative project-card bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <div className="project-card-overlay"></div>
              <div className="relative overflow-hidden">
                <div className="project-card-title">
                  {project.title}
                </div>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-sm" />
                <div className="project-card-hover absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className={`px-4 py-2 rounded-md m-2 flex items-center ${project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                    {project.status === 'Completed' ? <FaCheckCircle className="mr-2" /> : <FaSpinner className="mr-2" />}
                    {project.status}
                  </div>
                </div>
              </div>
              <div className="p-4  ">
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="btnm flex justify-between">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-black p-2 rounded-md flex items-center">
                    <FaGithub className="mr-2" /> Codebase
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-black p-2 rounded-md flex items-center">
                    <FaExternalLinkAlt className="mr-2" /> Live Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
