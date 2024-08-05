

import React, { useState, useEffect } from 'react';
import { FaFileAlt, FaUserCircle, FaHome, FaProjectDiagram, FaGithub } from 'react-icons/fa';
import { MdSchool, MdMenu, MdStar, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [userName] = useState<string>('John Bradill Mukwana');

    useEffect(() => {
        const fetchProfilePicture = async () => {
            try {
                const response = await fetch('https://res.cloudinary.com/dbczn8b8l/image/upload/v1721572329/rxyxql96y331qpsgo20r.jpg'); // Replace with your Cloudinary URL
                if (response.ok) {
                    setProfilePicture(response.url);
                } else {
                    setProfilePicture('/path/to/placeholder.png'); // Fallback if the image can't be fetched
                }
            } catch (error) {
                console.error('Error fetching profile picture:', error);
                setProfilePicture('/path/to/placeholder.png'); // Fallback if there's an error
            }
        };

        fetchProfilePicture();
    }, []);

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            toggleSidebar();
        }
    };

    return (
        <aside className={`fixed z-40 bg-emerald-600 dark:bg-gray-900 shadow-2xl transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-64 md:flex md:flex-col`}>
            <div className="flex  flex-col h-full overflow-y-auto">
                <div className='flex justify-between items-center bg-black dark:bg-white w-full h-10 px-4'>
                    <h2 className="text-2xl font-semibold text-white dark:text-black">Admin Panel</h2>
                    <button className="md:hidden text-white dark:text-black" onClick={toggleSidebar}>
                        <MdMenu className="text-2xl" />
                    </button>
                </div>
                <div className="flex flex-col items-center mt-6">
                    <img
                        src={profilePicture || '/path/to/placeholder.png'}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-300"
                    />
                    <p className="mt-2   text-2xl font-bold text-yellow-400 dark:text-white">{userName}</p>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <ul className="space-y-2 pt-10 font-bold w-full">
                        <li>
                            <Link to="AdminHome" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-900 hover:text-white dark:hover:text-yellow-500" onClick={handleLinkClick}>
                                <FaHome className="text-white text-2xl" /><span className="ml-3 text-lg">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="Users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-900 hover:text-white dark:hover:text-yellow-500" onClick={handleLinkClick}>
                                <FaUserCircle className="text-white text-2xl " /><span className="ml-3 text-lg">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="bookings" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-900 hover:text-white dark:hover:text-yellow-500" onClick={handleLinkClick}>
                                <FaProjectDiagram className="text-white text-2xl" /><span className="ml-3 text-lg">Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="AdminVehicleTable" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-900 hover:text-white dark:hover:text-yellow-500" onClick={handleLinkClick}>
                                <MdStar className="text-white text-2xl" /><span className="ml-3 text-lg">Skills</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="LocationAndBranches" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-900 hover:text-white dark:hover:text-yellow-500" onClick={handleLinkClick}>
                                <MdSchool className="text-white text-2xl" /><span className="ml-3 text-lg">Education</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="ticketsPage" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-900 hover:text-white dark:hover:text-yellow-500" onClick={handleLinkClick}>
                                <FaFileAlt className="text-white text-2xl" /><span className="ml-3 text-lg">Resume</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="FleetsPage" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-900 hover:text-white dark:hover:text-yellow-500" onClick={handleLinkClick}>
                                <FaGithub className="text-white text-2xl" /><span className="ml-3 text-lg">Top Repositories</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="Reports" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-900 hover:text-white dark:hover:text-yellow-500" onClick={handleLinkClick}>
                                <MdPhone className="text-white text-2xl" /><span className="ml-3 text-lg ">Contact Me</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
