import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-200 p-4 pt-16 h-full fixed top-0 left-0 overflow-y-auto md:relative z-40">
      <nav className="flex flex-col space-y-1">
        <h2 className="font-bold mb-4 mt-8 md:mt-0 text-xl">Learn OS</h2>

        <NavLink
          to="/os/intro"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
          Introduction
        </NavLink>

                <NavLink
          to="/os/processmanagment"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
         Process Management
        </NavLink>

            <NavLink
          to="/os/cpuscheduling"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
         CPU Scheduling
        </NavLink>

          <NavLink
          to="/os/cpuv"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
         CPU Scheduling Visualizer
        </NavLink>
                  <NavLink
          to="/os/syn"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
         Synchronization & Deadlocks
        </NavLink>
                    <NavLink
          to="/os/synv"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
         Synchronization & Deadlocks V
        </NavLink>
                      <NavLink
          to="/os/mm"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
          MemoryManagement
        </NavLink>

          <NavLink
          to="/os/fs"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
         File Ststem
        
        </NavLink>

        
          <NavLink
          to="/os/osw"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
         Bonus
        
        </NavLink>
          <NavLink
          to="/os/Aos"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
         Topics
        
        </NavLink>
          <NavLink
          to="/os/sm"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
        Storage and Secondary Memory Management
        
        </NavLink>
          <NavLink
          to="/os/ios"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
         I/O Systems
        
        </NavLink>
            <NavLink
          to="/os/aaos"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
      OS Architecture
        
        </NavLink>


        
    
        <hr className="my-4" />

        <a
          href="https://craft-byte-hq.vercel.app/"
          className="block py-2 px-3 rounded hover:bg-gray-300 text-sm font-semibold"
        >
          ← Back to All Topics
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
