import React, { useState } from "react";

export default function OSInterviewGuide() {
  const [activeSection, setActiveSection] = useState("basic");

  const sections = [
    { id: "basic", label: "1. Basic Concepts", icon: "🧠" },
    { id: "process", label: "2. Process Management", icon: "⚙️" },
    { id: "scheduling", label: "3. CPU Scheduling", icon: "🕑" },
    { id: "sync", label: "4. Sync & Deadlocks", icon: "🔒" },
    { id: "memory", label: "5. Memory Management", icon: "💾" },
    { id: "file", label: "6. File System", icon: "📁" },
    { id: "io", label: "7. I/O & Disk", icon: "💽" },
    { id: "advanced", label: "8. Advanced Topics", icon: "☁️" },
    { id: "rapid", label: "9. Rapid Fire", icon: "⚔️" }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🎯 Operating System Interview Guide
        </h1>
        <p className="text-xl text-gray-600">
          Complete reference for CSE viva, job interviews, and MCQs
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap gap-2 justify-center border-b pb-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center px-4 py-3 rounded-lg font-semibold transition-all ${
              activeSection === section.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </nav>

      {/* 1. Basic OS Concepts */}
      {activeSection === "basic" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">🧠 Basic OS Concepts</h2>
            
            {/* Q1: What is OS */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Q1. What is an Operating System?</h3>
              <p className="text-gray-700 mb-4">
                An <strong>Operating System (OS)</strong> is system software that acts as an interface between user and hardware.
                It manages resources like CPU, memory, I/O devices, and provides an environment for program execution.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <strong>Examples:</strong> Windows, Linux, macOS, Android
              </div>
            </div>

            {/* Q2: Main Functions */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Q2. Main Functions of an OS</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Process Management – Create, schedule, and terminate processes",
                  "Memory Management – Allocate/deallocate memory",
                  "File Management – Handle file creation, reading, and storage",
                  "I/O Management – Coordinate input/output devices",
                  "Security & Protection – Prevent unauthorized access",
                  "Resource Allocation – Manage CPU, memory, and devices"
                ].map((func, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{func}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Q4: Kernel vs Shell */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🧠 Difference between Kernel and Shell</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-3 text-left">Component</th>
                      <th className="p-3 text-left">Description</th>
                      <th className="p-3 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-blue-50">
                      <td className="p-3 font-semibold">Kernel</td>
                      <td className="p-3">The core part that directly interacts with hardware. Manages CPU, memory, I/O</td>
                      <td className="p-3 text-blue-600">Linux kernel (vmlinuz)</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="p-3 font-semibold">Shell</td>
                      <td className="p-3">User interface for accessing OS services — takes user commands</td>
                      <td className="p-3 text-green-600">Bash, Zsh, PowerShell</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">
                  👉 In short: Kernel = "Heart of OS", Shell = "Face of OS"
                </p>
              </div>
            </div>

            {/* Q6: Monolithic vs Microkernel */}
            <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Q6. Monolithic Kernel vs Microkernel</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-3 text-left">Feature</th>
                      <th className="p-3 text-left">Monolithic Kernel</th>
                      <th className="p-3 text-left">Microkernel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Structure", "All OS services in one kernel", "Only core services in kernel"],
                      ["Speed", "Faster (less overhead)", "Slower (more context switches)"],
                      ["Stability", "Less secure", "More secure"],
                      ["Example", "Linux, Windows", "Minix, QNX"]
                    ].map(([feature, mono, micro], index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-semibold">{feature}</td>
                        <td className="p-3">{mono}</td>
                        <td className="p-3">{micro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. Process Management */}
      {activeSection === "process" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-green-800 mb-6">⚙️ Process Management</h2>

            {/* Q3: Process vs Thread */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Difference Between Process and Thread</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-3 text-left">Feature</th>
                      <th className="p-3 text-left">Process</th>
                      <th className="p-3 text-left">Thread</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Definition", "An independent program in execution", "A lightweight subprocess — part of a process"],
                      ["Memory", "Has its own address space", "Shares address space with other threads"],
                      ["Overhead", "High (context switching expensive)", "Low (threads share code/data)"],
                      ["Communication", "Through IPC (pipes, queues)", "Through shared memory within process"],
                      ["Example", "Chrome browser = multiple processes", "Each tab = separate thread"]
                    ].map(([feature, process, thread], index) => (
                      <tr key={index} className="border-b hover:bg-green-50">
                        <td className="p-3 font-semibold">{feature}</td>
                        <td className="p-3">{process}</td>
                        <td className="p-3">{thread}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Process States */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Q5. Process States</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { state: "New", color: "bg-blue-500" },
                  { state: "Ready", color: "bg-green-500" },
                  { state: "Running", color: "bg-yellow-500" },
                  { state: "Waiting", color: "bg-red-500" },
                  { state: "Terminated", color: "bg-gray-500" }
                ].map(({ state, color }, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center text-white font-bold mb-2`}>
                      {state.charAt(0)}
                    </div>
                    <span className="text-sm font-medium">{state}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* fork() Example */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Q11. Create Child Process (fork())</h3>
              <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
                {`pid_t pid = fork();
if (pid == 0) 
    printf("Child process");
else 
    printf("Parent process");`}
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-700 mb-2">Zombie Process</h4>
                  <p className="text-sm text-red-600">
                    Process finished but still in process table (waiting for parent to read exit status)
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-700 mb-2">Orphan Process</h4>
                  <p className="text-sm text-orange-600">
                    Child process whose parent terminated first → adopted by init/systemd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. CPU Scheduling */}
      {activeSection === "scheduling" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">🕑 CPU Scheduling</h2>

            {/* Scheduling Algorithms */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Q3. Scheduling Algorithms</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-3 text-left">Algorithm</th>
                      <th className="p-3 text-left">Type</th>
                      <th className="p-3 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["FCFS", "Non-preemptive", "Simple, causes convoy effect"],
                      ["SJF/SRTF", "SJF non-preemptive / SRTF preemptive", "Shortest job first, can starve long jobs"],
                      ["Priority", "Both", "Higher priority runs first"],
                      ["Round Robin", "Preemptive", "Time quantum based"],
                      ["Multilevel Queue", "Preemptive", "Separate queues for process types"]
                    ].map(([algo, type, notes], index) => (
                      <tr key={index} className="border-b hover:bg-purple-50">
                        <td className="p-3 font-semibold">{algo}</td>
                        <td className="p-3">{type}</td>
                        <td className="p-3">{notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scheduling Criteria */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Q2. Scheduling Criteria</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { criterion: "CPU utilization", desc: "Keep CPU busy" },
                  { criterion: "Throughput", desc: "Processes completed per time unit" },
                  { criterion: "Turnaround time", desc: "Completion time - arrival time" },
                  { criterion: "Waiting time", desc: "Time in ready queue" },
                  { criterion: "Response time", desc: "Time to first response" },
                  { criterion: "Fairness", desc: "Equal CPU access" }
                ].map(({ criterion, desc }, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-800">{criterion}</h4>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Sync & Deadlocks */}
      {activeSection === "sync" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-red-800 mb-6">🔒 Process Synchronization & Deadlocks</h2>

            {/* Deadlock */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ What is a Deadlock and Prevention</h3>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                <p className="text-red-700 font-semibold">
                  Deadlock: Situation where processes wait for resources held by each other — none can proceed.
                </p>
              </div>
              
              <h4 className="font-bold text-gray-700 mb-3">🧱 Necessary Conditions (Coffman):</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {[
                  "Mutual Exclusion",
                  "Hold and Wait", 
                  "No Preemption",
                  "Circular Wait"
                ].map((condition, index) => (
                  <div key={index} className="flex items-center bg-white p-3 rounded border">
                    <span className="text-red-500 mr-2">•</span>
                    {condition}
                  </div>
                ))}
              </div>

              <h4 className="font-bold text-gray-700 mb-3">🧩 Prevention Methods:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Break any of the four conditions</li>
                <li>• Avoid Hold and Wait → request all resources at once</li>
                <li>• No Circular Wait → impose resource ordering</li>
                <li>• Allow preemption → force resource release</li>
              </ul>
            </div>

            {/* Semaphore */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🧵 What is a Semaphore?</h3>
              <p className="text-gray-700 mb-4">
                Semaphore = integer variable used to control access to shared resource in concurrent systems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">Types:</h4>
                  <div className="space-y-2">
                    <div className="bg-blue-50 p-3 rounded border">
                      <strong>Binary Semaphore (Mutex)</strong> → 0 or 1 (Lock/Unlock)
                    </div>
                    <div className="bg-green-50 p-3 rounded border">
                      <strong>Counting Semaphore</strong> → integer count of available resources
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">Operations:</h4>
                  <div className="space-y-2">
                    <div className="bg-red-50 p-3 rounded border">
                      <strong>wait() / P()</strong> → Decrement; if {'<'} 0 → process waits
                    </div>
                    <div className="bg-green-50 p-3 rounded border">
                      <strong>signal() / V()</strong> → Increment; if ≤ 0 → wake one waiting process
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Memory Management */}
      {activeSection === "memory" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-teal-800 mb-6">💾 Memory Management</h2>

            {/* Virtual Memory */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🔐 Virtual Memory</h3>
              <p className="text-gray-700 mb-4">
                Virtual memory is a memory management technique that gives the illusion of a large main memory 
                by using a part of the hard disk as RAM.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">📘 Purpose:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Run large programs with limited RAM</li>
                    <li>• Provides memory isolation between processes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">🧩 Techniques:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Paging</li>
                    <li>• Segmentation</li>
                    <li>• Demand Paging</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paging vs Segmentation */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🧮 Paging vs Segmentation</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-3 text-left">Feature</th>
                      <th className="p-3 text-left">Paging</th>
                      <th className="p-3 text-left">Segmentation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Division", "Fixed-size blocks (pages)", "Variable-size blocks (segments)"],
                      ["Purpose", "Eliminate fragmentation", "Logical program division"],
                      ["Unit Size", "Equal", "Unequal"],
                      ["Example", "Page = 4 KB", "Segment = function, array"]
                    ].map(([feature, paging, segmentation], index) => (
                      <tr key={index} className="border-b hover:bg-teal-50">
                        <td className="p-3 font-semibold">{feature}</td>
                        <td className="p-3">{paging}</td>
                        <td className="p-3">{segmentation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Thrashing */}
            <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🧮 What is Thrashing?</h3>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                <p className="text-red-700 font-semibold">
                  Thrashing = condition where system spends more time swapping pages than executing processes
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">🧩 Cause:</h4>
                  <p className="text-gray-600">Overloaded memory (too many active processes)</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">🧠 Solution:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Increase RAM</li>
                    <li>• Use Working Set Model</li>
                    <li>• Adjust multiprogramming degree</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. File System */}
      {activeSection === "file" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-yellow-800 mb-6">📁 File System</h2>

            {/* File Operations */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">File Operations</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Create", "Read", "Write", "Delete", "Open", "Close"].map((op, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                    <span className="font-bold text-blue-700">{op}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hard Link vs Soft Link */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hard Link vs Soft Link</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-3 text-left">Feature</th>
                      <th className="p-3 text-left">Hard Link</th>
                      <th className="p-3 text-left">Soft Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Inode", "Same inode", "Different inode"],
                      ["Target Deleted", "Still works", "Broken link"],
                      ["File System", "Same FS only", "Cross FS possible"],
                      ["Directory", "Cannot link", "Can link"]
                    ].map(([feature, hard, soft], index) => (
                      <tr key={index} className="border-b hover:bg-yellow-50">
                        <td className="p-3 font-semibold">{feature}</td>
                        <td className="p-3">{hard}</td>
                        <td className="p-3">{soft}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. I/O & Disk */}
      {activeSection === "io" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-pink-800 mb-6">💽 I/O and Disk Management</h2>

            {/* Disk Scheduling */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Disk Scheduling Algorithms</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-3 text-left">Algorithm</th>
                      <th className="p-3 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["FCFS", "Serve in order of arrival"],
                      ["SSTF", "Closest request first"],
                      ["SCAN / C-SCAN", "Move head back/forth like elevator"],
                      ["LOOK / C-LOOK", "Same as SCAN but stops at last request"]
                    ].map(([algo, desc], index) => (
                      <tr key={index} className="border-b hover:bg-pink-50">
                        <td className="p-3 font-semibold">{algo}</td>
                        <td className="p-3">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* DMA */}
            <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">DMA (Direct Memory Access)</h3>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-green-700 font-semibold">
                  Transfers data directly between device and memory without CPU involvement
                </p>
              </div>
              <div className="mt-4 flex items-center justify-around">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                    CPU
                  </div>
                  <p className="text-sm">Minimal involvement</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                    DMA
                  </div>
                  <p className="text-sm">Direct transfer</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                    RAM
                  </div>
                  <p className="text-sm">Memory</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. Advanced Topics */}
      {activeSection === "advanced" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">☁️ Advanced / Modern Concepts</h2>

            {/* Virtualization */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Virtualization</h3>
                <p className="text-gray-700 mb-4">
                  Running multiple OS on same hardware using a hypervisor
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded border">
                    <strong>Type 1 (Bare-metal):</strong> VMware ESXi
                  </div>
                  <div className="bg-green-50 p-3 rounded border">
                    <strong>Type 2 (Hosted):</strong> VirtualBox, VMware Workstation
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Containers (Docker)</h3>
                <p className="text-gray-700 mb-4">
                  Lightweight virtualization using shared OS kernel
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <strong>Advantages:</strong> Lightweight, fast startup, efficient resource usage
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. Rapid Fire */}
      {activeSection === "rapid" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">⚔️ Rapid Fire Questions</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Press a key: What happens?",
                  a: "Interrupt → OS reads input → displayed via device driver"
                },
                {
                  q: "System Boot Process?",
                  a: "BIOS → Bootloader → Kernel → Init → Shell"
                },
                {
                  q: "How is a program loaded?",
                  a: "OS allocates memory, loads binary, starts process"
                },
                {
                  q: "Swap Space vs Virtual Memory?",
                  a: "Swap = disk space used by VM"
                },
                {
                  q: "Process vs Program?",
                  a: "Static code vs dynamic execution"
                },
                {
                  q: "Kernel's main role?",
                  a: "Scheduling, memory, and resource management"
                }
              ].map(({ q, a }, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-bold text-gray-800 mb-3">Q: {q}</h3>
                  <p className="text-gray-700 bg-blue-50 p-3 rounded-lg">A: {a}</p>
                </div>
              ))}
            </div>

            {/* Bonus Conceptual */}
            <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Bonus Conceptual</h3>
              <div className="space-y-3 text-gray-700">
                <p>• A process cannot be in more than one state at a time</p>
                <p>• A thread can deadlock itself via recursive locks</p>
                <p>• If all processes are waiting → deadlock or resource starvation</p>
                <p>• Paging + Segmentation = logical + physical flexibility</p>
                <p>• Context Switching reduces efficiency due to overhead</p>
                <p>• Thrashing = excessive paging; Paging = normal memory management</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}