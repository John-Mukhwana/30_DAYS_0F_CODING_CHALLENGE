import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Dashboard: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div><Navbar toggleSidebar={toggleSidebar} /></div>
            <div className="flex min-h-screen ">
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <main className="flex-1 p-4 dark:bg-gray-800">
                    <Outlet />
                </main>
            </div>
            <div><Footer /></div>
        </>
    );
};

export default Dashboard;
