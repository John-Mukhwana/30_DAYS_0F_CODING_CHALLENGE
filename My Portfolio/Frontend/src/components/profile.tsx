
// import React from 'react'; // Ensure the correct path to your image
// import '../Styles/profile.css'; // Import the CSS file

// const Profile: React.FC = () => {
//   const icons = [
//     "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
//     "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
//     "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
//     "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
//     "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
//     "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
//     "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
//     "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
//   ];

//    const avatar = 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1721572329/rxyxql96y331qpsgo20r.jpg';

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
//       <div className="container mx-auto p-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center">
//           <div className="text-center md:text-left mb-8 md:mb-0">
//             <p className="text-lg mb-2">Hello, I am</p>
//             <h1 className="text-4xl md:text-6xl font-bold text-green-400">
//               {'< JOHN BRADILL MUKHWANA />'}
//             </h1>
//             <p className="text-2xl md:text-3xl font-semibold mt-2">Fullstack Developer</p>
//             <div className="flex justify-center md:justify-start mt-4">
//               <div className="mr-8">
//                 <p className="text-lg font-semibold">5</p>
//                 <p className="text-sm">YEARS OF EXPERIENCE</p>
//               </div>
//               <div>
//                 <p className="text-lg font-semibold">13</p>
                
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center md:justify-end relative">
//             <div className="profile-container">
//               <img
//                 src={avatar}
//                 alt="Avatar"
//                 className="profile-picture"
//               />
//               <div className="rotating-container">
//                 {icons.map((icon, index) => (
//                   <img
//                     key={index}
//                     src={icon}
//                     alt={`Icon ${index + 1}`}
//                     className={`icon icon-${index}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React from 'react'; // Ensure the correct path to your image
import '../Styles/profile.css'; // Import the CSS file

const Profile: React.FC = () => {
  const icons = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/aws/aws-original.svg",
  ];
const avatar = 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1721572329/rxyxql96y331qpsgo20r.jpg';

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <p className="text-lg mb-2">Hello, I am</p>
            <h1 className="text-4xl md:text-6xl font-bold text-green-400">
              {'< John Doe />'}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mt-2">Fullstack Developer</p>
            <div className="flex justify-center md:justify-start mt-4">
              <div className="mr-8">
                <p className="text-lg font-semibold">5</p>
                <p className="text-sm">YEARS OF EXPERIENCE</p>
              </div>
              <div>
                <p className="text-lg font-semibold">13</p>
                <p className="text-sm">PROJECTS COMPLETED AROUND THE WORLD</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end relative">
            <div className="profile-container">
              <img
                src={avatar}
                alt="Avatar"
                className="profile-picture"
              />
              <div className="rotating-container">
                {icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Icon ${index + 1}`}
                    className={`icon icon-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
