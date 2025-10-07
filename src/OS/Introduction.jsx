import React from "react";

export default function Introduction() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-center">
         Learn Operating System (OS)
      </h1>

      {/* 1. Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">1. Introduction to Operating Systems (OS)</h2>
        <p className="mb-2">
          An <strong>Operating System (OS)</strong> is system software that acts as an interface between the user and the computer hardware. 
          It manages hardware resources and provides a platform for running application programs.
        </p>
        <p className="mb-2">
          <strong>Definition:</strong> The Operating System is software that manages the computer hardware, software resources, and provides common services for computer programs.
        </p>
        <p className="mb-2"><strong>Examples:</strong> Windows, Linux, macOS, Android, iOS, Unix.</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Main Goals of an OS:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Convenience – Make the computer system easier to use.</li>
          <li>Efficiency – Manage hardware resources efficiently.</li>
          <li>Security – Protect data and programs from unauthorized access.</li>
          <li>Resource Management – Allocate and deallocate CPU, memory, I/O devices, etc.</li>
          <li>Error Detection – Detect and handle hardware/software errors.</li>
        </ul>
      </section>

      {/* 2. Functions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3"> 2. Functions of an Operating System</h2>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Function</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Process Management", "Handles creation, scheduling, and termination of processes."],
              ["Memory Management", "Allocates and deallocates memory space as needed."],
              ["File Management", "Organizes and controls access to data files on storage devices."],
              ["I/O Management", "Manages input/output devices like keyboard, mouse, and printers."],
              ["Security and Protection", "Ensures unauthorized users cannot access system resources."],
              ["Error Detection and Handling", "Monitors the system and takes corrective actions."],
              ["Resource Allocation", "Assigns CPU time, memory, or devices to multiple users/processes."],
              ["User Interface", "Provides CLI (Command Line Interface) or GUI (Graphical User Interface)."],
            ].map(([func, desc], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{func}</td>
                <td className="border p-2">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 3. Components */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3"> 3. Components of an OS</h2>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Component</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Kernel", "The core part of the OS; manages CPU, memory, devices, and system calls."],
              ["File System", "Organizes and stores files and directories."],
              ["Device Drivers", "Allow the OS to communicate with hardware devices."],
              ["System Libraries", "Provide basic functions for application programs."],
              ["Shell", "User interface to interact with the kernel (CLI or GUI)."],
            ].map(([comp, desc], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{comp}</td>
                <td className="border p-2">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 4. Types */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3"> 4. Types of Operating Systems</h2>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Type</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Examples</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Batch OS", "Jobs are collected and executed in batches without user interaction.", "Early IBM systems"],
              ["Time-Sharing OS", "Allows multiple users simultaneously; each gets CPU time in turn.", "UNIX, Linux"],
              ["Real-Time OS (RTOS)", "Responds immediately; used in embedded systems.", "VxWorks, RTLinux"],
              ["Distributed OS", "Controls multiple computers and makes them appear as one system.", "LOCUS, Amoeba"],
              ["Network OS", "Manages network resources and provides services.", "Novell NetWare, Windows Server"],
              ["Mobile OS", "Designed for smartphones and tablets.", "Android, iOS"],
            ].map(([type, desc, ex], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{type}</td>
                <td className="border p-2">{desc}</td>
                <td className="border p-2">{ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 5. System Calls */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3"> 5. System Calls</h2>
        <p className="mb-2">
          A <strong>system call</strong> is a programmatic way for a process to request a service from the operating system’s kernel.
        </p>
        <p className="mb-2">
          Example: When a program wants to read a file, it cannot access hardware directly — it makes a system call to the OS.
        </p>
        <h3 className="font-semibold mt-3 mb-1">Categories of System Calls:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Process control – create, end, or wait for a process.</li>
          <li>File management – open, read, write, close files.</li>
          <li>Device management – request/release devices.</li>
          <li>Information maintenance – get system data, time, etc.</li>
          <li>Communication – send/receive messages between processes.</li>
        </ul>

        <div className="bg-gray-900 text-green-400 p-3 mt-3 rounded text-sm font-mono">
{`#include <unistd.h>
write(1, "Hello OS\\n", 9);`}
        </div>
        <p className="text-sm text-gray-600 mt-1">Here, <code>write()</code> is a system call to write text to the output device.</p>
      </section>

      {/* 6. Kernel and Shell */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3"> 6. Kernel and Shell</h2>
        <table className="w-full border border-gray-300 text-left mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Component</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Kernel</td>
              <td className="border p-2">The core of the OS. Controls all system operations like process scheduling, memory management, and device handling.</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Shell</td>
              <td className="border p-2">Interface between the user and the kernel. Takes user commands and executes them.</td>
            </tr>
          </tbody>
        </table>

        <h3 className="font-semibold mb-1">Types of Shells:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Command-line shell: Bash, sh, csh (text-based).</li>
          <li>Graphical shell: Windows Explorer, GNOME (GUI-based).</li>
        </ul>
      </section>

      {/* 7. OS Structure */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3"> 7. OS Structure</h2>
        <table className="w-full border border-gray-300 text-left mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Structure Type</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Monolithic OS", "All system services run in kernel mode; large single layer.", "MS-DOS, UNIX"],
              ["Layered OS", "Divided into layers, each built on top of the lower one.", "THE OS, Windows NT"],
              ["Microkernel", "Only minimal services in kernel; rest in user mode.", "macOS, QNX"],
              ["Modular OS", "Combines microkernel flexibility with monolithic performance.", "Linux, Solaris"],
            ].map(([struct, desc, ex], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{struct}</td>
                <td className="border p-2">{desc}</td>
                <td className="border p-2">{ex}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="font-semibold mb-2">Comparison Summary</h3>
        <table className="w-full border border-gray-300 text-left mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Aspect</th>
              <th className="border p-2">Monolithic</th>
              <th className="border p-2">Layered</th>
              <th className="border p-2">Microkernel</th>
              <th className="border p-2">Modular</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Speed", "Fast", "Moderate", "Slower", "Fast"],
              ["Security", "Low", "Better", "High", "High"],
              ["Flexibility", "Low", "Medium", "High", "High"],
              ["Maintenance", "Difficult", "Easier", "Easier", "Easier"],
            ].map(([aspect, m, l, mi, mo], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{aspect}</td>
                <td className="border p-2">{m}</td>
                <td className="border p-2">{l}</td>
                <td className="border p-2">{mi}</td>
                <td className="border p-2">{mo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-gray-100 p-4 rounded text-sm font-mono leading-6 whitespace-pre">
{`User
│
├── Application Programs
│
├── System Calls (Interface)
│
├── Operating System
│   ├── Shell
│   ├── Kernel
│   │   ├── Process Management
│   │   ├── Memory Management
│   │   ├── File System
│   │   ├── Device Management
│   │   └── Security
│
└── Hardware`}
        </div>
      </section>
    </div>
  );
}
