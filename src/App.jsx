import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";


import Header from "./Header";
import Introduction from "./OS/Introduction";
import ProcessManagement from "./OS/ProcessManagement";
import CPUScheduling from "./OS/CPUScheduling";
import CpuV from "./OS/CpuV";
import ProcessSyn from "./OS/ProcessSyn";
import ProcessSynV from "./OS/ProcessSynV";
import MemoryManagement from "./OS/MemoryManagement";
import FileSystemsGuide from "./OS/FileSystemsGuide";
import AdvancedOSGuide from "./OS/AdvancedOSGuide";
import OSWorkedExamples from "./OS/OSWorkedExamples";
import StorageManagementGuide from "./OS/StorageManagementGuide";
import IOSystemsGuide from "./OS/IOSystemsGuide";
import OSArchitecture from "./OS/OSArchitecture";

import OSInterviewGuide from "./OS/OSInterviewGuide";
const topics = [
  { name: "Introduction", path: "/intro" },
  { name: "Process Management", path: "/processmanagment" },
  { name: "CPU Scheduling", path: "/cpuscheduling" },
  { name: "CPU Scheduling Visualizer", path: "/cpuv" },
   { name: "Synchronization & Deadlocks", path: "/syn" },
   { name: "Synchronization & Deadlocks Visualizer ", path: "/synv" },
   { name: "File Systems", path: "/fs" },
   { name: "Storage Management", path: "/sm" },
   { name: "I/O Systems", path: "/ios" },
  
   { name: "OS Worked Examples", path: "/osw" },
   { name: "Advanced OS", path: "/Aos" },
   { name: "OS Architecture", path: "/aaos" },
   {/*{ name: "OS Interview", path: "/os_In" },*/}


 
];

const ResponsiveSidebarWrapper = ({ showSidebar, toggleSidebar }) => {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${
          showSidebar ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        role="navigation"
        aria-label="Sidebar navigation"
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 overflow-y-auto z-30 transform transition-transform duration-300 ease-in-out
          ${showSidebar ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">OS Topics</h2>
          <ul>
            {topics.map((topic) => (
              <li key={topic.path} className="mb-4">
                <NavLink
                  to={topic.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded hover:bg-blue-200 ${
                      isActive ? "bg-blue-400 text-white font-semibold" : ""
                    }`
                  }
                >
                  {topic.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Back to All Topics link */}
          <hr className="my-4" />
          <a
            href="https://craft-byte-hq.vercel.app/"
            className="block px-3 py-2 rounded hover:bg-gray-300 text-sm font-semibold"
          >
            ← Back to All Topics
          </a>
        </div>
      </aside>
    </>
  );
};

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <Router>
      {/* Header */}
      <Header />

      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-16 left-4 z-50 bg-transparent p-1 rounded-md md:hidden"
        style={{ width: "24px", height: "24px" }}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Main layout wrapper */}
      <div
        className="p-6 flex space-x-6 min-h-[calc(100vh-64px)] relative"
        style={{ paddingTop: "64px" }}
      >
        {/* Sidebar */}
        <ResponsiveSidebarWrapper
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />

        {/* Main Content */}
        <main
          role="main"
          aria-label="Main content"
          className={`flex-1 w-full min-h-screen ${!showSidebar ? "" : "md:ml-64"}`}
        >
          <Routes>
            <Route path="/intro" element={<Introduction />} />
            <Route path="/processmanagment" element={<ProcessManagement />} />
            <Route path="/cpuscheduling" element={<CPUScheduling />} />
            <Route path="/cpuv" element={<CpuV />} />
            <Route path="/syn" element={<ProcessSyn/>} />
            <Route path="/synv" element={<ProcessSynV/>} />
            <Route path="/mm" element={<MemoryManagement/>} />
             <Route path="/fs" element={<FileSystemsGuide/>} />
            <Route path="/ios" element={<IOSystemsGuide/>} /> 
            <Route path="/sm" element={<StorageManagementGuide/>} />
            <Route path="/osw" element={<OSWorkedExamples/>} />
            <Route path="/Aos" element={<AdvancedOSGuide/>} />
            <Route path="/aaos" element={<OSArchitecture/>} />
              {/* <Route path="/os_in" element={<OSInterviewGuide/>} />*/}
            
        

            
            
            <Route
              path="/"
              element={
                <div className="text-lg font-medium">
                  Please select a OS topic from the sidebar.
                </div>
              }
            />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
