import React, { useState } from "react";

export default function OSArchitecture() {
  const [activeOS, setActiveOS] = useState("linux");

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
        Operating System Architectures
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Comparative analysis of Linux, Windows, and Android architectures
      </p>

      {/* OS Selection Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {[
          { id: "linux", label: "🐧 Linux", color: "orange" },
          { id: "windows", label: "🪟 Windows", color: "blue" },
          { id: "android", label: "🤖 Android", color: "green" },
          { id: "comparison", label: "📊 Comparison", color: "purple" }
        ].map((os) => (
          <button
            key={os.id}
            onClick={() => setActiveOS(os.id)}
            className={`px-6 py-3 rounded-lg font-bold text-lg transition-all ${
              activeOS === os.id
                ? `bg-${os.color}-600 text-white shadow-lg`
                : `bg-gray-200 text-gray-700 hover:bg-gray-300`
            }`}
          >
            {os.label}
          </button>
        ))}
      </div>

      {/* Linux Architecture */}
      {activeOS === "linux" && (
        <section className="animate-fadeIn">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-orange-800 mb-2">Linux Architecture</h2>
              <p className="text-xl text-orange-600">
                A modular, monolithic kernel-based operating system — open-source and UNIX-like
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Architecture Diagram */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-orange-700 mb-4 text-center">
                  A. Layered Architecture Overview
                </h3>
                <div className="space-y-1 font-mono text-sm">
                  <div className="bg-gray-800 text-white p-4 text-center rounded-t-lg">
                    User Applications (Shell, GUI)
                  </div>
                  <div className="bg-gray-700 text-white p-4 text-center">
                    System Libraries (glibc, etc.)
                  </div>
                  <div className="bg-gray-600 text-white p-4 text-center">
                    System Call Interface (SCI)
                  </div>
                  <div className="bg-orange-500 text-white p-4 rounded-b-lg">
                    <div className="text-center font-bold mb-2">Kernel (Monolithic Core)</div>
                    <div className="space-y-1 text-left pl-8">
                      <div>├── Process Management</div>
                      <div>├── Memory Management</div>
                      <div>├── File System Management</div>
                      <div>├── Device Drivers</div>
                      <div>└── Network Stack</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 text-white p-4 text-center rounded-lg mt-2">
                    Hardware
                  </div>
                </div>
              </div>

              {/* Key Components */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">B. Key Components</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-orange-100">
                        <tr>
                          <th className="p-3 text-left font-bold">Component</th>
                          <th className="p-3 text-left font-bold">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["User Space", "Includes user applications and system utilities"],
                          ["System Call Interface (SCI)", "Gateway between user and kernel mode"],
                          ["Kernel Space", "Manages hardware and critical system resources"],
                          ["Process Management", "Scheduling, creation (fork()), IPC"],
                          ["Memory Management", "Virtual memory, paging, swapping"],
                          ["File System", "Ext2/Ext3/Ext4, VFS abstraction"],
                          ["Device Drivers", "Kernel modules (.ko files)"],
                          ["Networking Stack", "Implements TCP/IP, sockets"],
                          ["Shells", "Bash, Zsh — command interpreters"]
                        ].map(([component, description], index) => (
                          <tr key={index} className="border-b hover:bg-orange-50">
                            <td className="p-3 font-semibold">{component}</td>
                            <td className="p-3 text-gray-700">{description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Features and Workflow */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Features */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">C. Features</h3>
                <ul className="space-y-3">
                  {[
                    "Open source (GNU GPL)",
                    "Multitasking and Multiuser",
                    "Monolithic kernel with modular design",
                    "Supports many file systems (ext4, FAT, NTFS, etc.)",
                    "Strong security (permissions, ownership, SELinux)"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">D. Example Workflow</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div className="flex-1">
                      <p className="font-semibold">User runs command</p>
                      <p className="text-sm text-gray-600">Shell sends system call (e.g., open())</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div className="flex-1">
                      <p className="font-semibold">Kernel handles request</p>
                      <p className="text-sm text-gray-600">Interacts with driver and hardware</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div className="flex-1">
                      <p className="font-semibold">Data returned</p>
                      <p className="text-sm text-gray-600">Results sent back to user-space program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Windows Architecture */}
      {activeOS === "windows" && (
        <section className="animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-blue-800 mb-2">Windows Architecture</h2>
              <p className="text-xl text-blue-600">
                Hybrid kernel architecture — combining microkernel and monolithic kernel features
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Architecture Diagram */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
                  A. Architecture Layers
                </h3>
                <div className="space-y-1 font-mono text-sm">
                  <div className="bg-gray-800 text-white p-4 text-center rounded-t-lg">
                    User Applications (Office, etc.)
                  </div>
                  <div className="bg-blue-600 text-white p-4 rounded-lg">
                    <div className="text-center font-bold mb-2">User Mode</div>
                    <div className="space-y-1 text-left pl-8">
                      <div>├── System Libraries (Win32 API)</div>
                      <div>└── Subsystems (POSIX, .NET, etc.)</div>
                    </div>
                  </div>
                  <div className="bg-blue-800 text-white p-4 rounded-lg">
                    <div className="text-center font-bold mb-2">Kernel Mode</div>
                    <div className="space-y-1 text-left pl-8">
                      <div>├── Executive</div>
                      <div>├── Kernel</div>
                      <div>├── HAL (Hardware Abstraction)</div>
                      <div>└── Device Drivers</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 text-white p-4 text-center rounded-b-lg">
                    Hardware
                  </div>
                </div>
              </div>

              {/* Components Explained */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">B. Components Explained</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="p-3 text-left font-bold">Layer</th>
                          <th className="p-3 text-left font-bold">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["User Mode", "Contains subsystems providing application interfaces"],
                          ["Kernel Mode", "Core of OS — manages hardware, memory, processes"],
                          ["Executive", "High-level OS services (object manager, memory manager)"],
                          ["Kernel", "Low-level thread scheduling, interrupt handling"],
                          ["HAL", "Insulates kernel from hardware differences"],
                          ["Device Drivers", "Communicate with hardware devices"]
                        ].map(([layer, description], index) => (
                          <tr key={index} className="border-b hover:bg-blue-50">
                            <td className="p-3 font-semibold">{layer}</td>
                            <td className="p-3 text-gray-700">{description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Features and Workflow */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Features */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">C. Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Hybrid Kernel: combines stability with modularity",
                    "Preemptive Multitasking",
                    "Security Model: ACLs and user tokens",
                    "NTFS File System: journaling and compression",
                    "Plug-and-Play (PnP): automatic hardware detection",
                    "Registry System: centralized configuration"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">D. Example Workflow</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div className="flex-1">
                      <p className="font-semibold">User opens Word</p>
                      <p className="text-sm text-gray-600">API call to Win32 subsystem</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div className="flex-1">
                      <p className="font-semibold">Request to Executive</p>
                      <p className="text-sm text-gray-600">Memory Manager allocates resources</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div className="flex-1">
                      <p className="font-semibold">HAL interaction</p>
                      <p className="text-sm text-gray-600">Handles hardware-level operations</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div className="flex-1">
                      <p className="font-semibold">Output via driver</p>
                      <p className="text-sm text-gray-600">Data sent to device</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Android Architecture */}
      {activeOS === "android" && (
        <section className="animate-fadeIn">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-green-800 mb-2">Android OS Architecture</h2>
              <p className="text-xl text-green-600">
                Linux-based mobile OS with specialized layers for apps and hardware abstraction
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Architecture Diagram */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
                  A. Android Architecture
                </h3>
                <div className="space-y-1 font-mono text-sm">
                  <div className="bg-gray-800 text-white p-4 text-center rounded-t-lg">
                    Applications (Apps, Widgets)
                  </div>
                  <div className="bg-green-600 text-white p-4 rounded-lg">
                    <div className="text-center font-bold mb-2">Application Framework</div>
                    <div className="space-y-1 text-left pl-8">
                      <div>├── Activity Manager</div>
                      <div>├── Window Manager</div>
                      <div>├── Content Providers</div>
                      <div>├── View System</div>
                      <div>└── Package Manager</div>
                    </div>
                  </div>
                  <div className="bg-green-700 text-white p-4 text-center">
                    Android Runtime (ART) + Core Libraries
                  </div>
                  <div className="bg-green-800 text-white p-4 rounded-lg">
                    <div className="text-center font-bold mb-2">Native Libraries (C/C++)</div>
                    <div className="space-y-1 text-left pl-8">
                      <div>├── SQLite, WebKit, OpenGL, SSL</div>
                      <div>└── Media, Surface Manager</div>
                    </div>
                  </div>
                  <div className="bg-green-900 text-white p-4 rounded-b-lg">
                    <div className="text-center font-bold">Linux Kernel (modified)</div>
                    <div className="space-y-1 text-left pl-8 mt-2">
                      <div>├── Drivers, Memory, Power Mgmt</div>
                      <div>└── Binder IPC mechanism</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Components */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">B. Key Components</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-green-100">
                        <tr>
                          <th className="p-3 text-left font-bold">Component</th>
                          <th className="p-3 text-left font-bold">Function</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Linux Kernel", "Handles low-level drivers, memory, process management"],
                          ["Native Libraries", "Provide core functionality (graphics, media, database)"],
                          ["Android Runtime (ART)", "Executes apps compiled to bytecode (.dex)"],
                          ["Application Framework", "Provides reusable classes (Activities, Services)"],
                          ["Applications", "User apps (dialer, messages, games, etc.)"]
                        ].map(([component, function_], index) => (
                          <tr key={index} className="border-b hover:bg-green-50">
                            <td className="p-3 font-semibold">{component}</td>
                            <td className="p-3 text-gray-700">{function_}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Features and Workflow */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Features */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-4">C. Important Features</h3>
                <ul className="space-y-3">
                  {[
                    "Sandboxing: Each app runs in its own process/user ID",
                    "Inter-Process Communication (Binder): Efficient, secure IPC",
                    "Permission-based security: Apps request specific permissions",
                    "Battery and resource management: Optimized via wakelocks",
                    "Play Store Integration: App distribution and updates"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-4">D. Example Execution Flow</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div className="flex-1">
                      <p className="font-semibold">User opens app</p>
                      <p className="text-sm text-gray-600">Launcher sends Intent</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div className="flex-1">
                      <p className="font-semibold">Activity Manager starts process</p>
                      <p className="text-sm text-gray-600">App runs in ART runtime</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div className="flex-1">
                      <p className="font-semibold">App interacts via framework</p>
                      <p className="text-sm text-gray-600">Uses framework APIs</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div className="flex-1">
                      <p className="font-semibold">Binder IPC and Kernel</p>
                      <p className="text-sm text-gray-600">Handle underlying hardware</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      {activeOS === "comparison" && (
        <section className="animate-fadeIn">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-purple-800 mb-2">OS Architecture Comparison</h2>
              <p className="text-xl text-purple-600">
                Comparative analysis of Linux, Windows, and Android architectures
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-left font-bold">Linux</th>
                    <th className="p-4 text-left font-bold">Windows</th>
                    <th className="p-4 text-left font-bold">Android</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Kernel Type", "Monolithic (modular)", "Hybrid", "Modified Linux kernel"],
                    ["Source Model", "Open-source (GPL)", "Closed-source (Microsoft)", "Open-source (AOSP)"],
                    ["Primary Use", "Servers, desktops", "Desktops, enterprise", "Mobile, embedded"],
                    ["File System", "ext4, xfs", "NTFS, FAT32", "ext4, f2fs"],
                    ["Security", "User/Group permissions", "ACLs & tokens", "App sandbox + permissions"],
                    ["Architecture Style", "UNIX-like layered", "Hybrid with HAL", "Layered (framework + runtime)"],
                    ["Example Interface", "Bash shell", "Win32 API", "Android SDK"]
                  ].map(([feature, linux, windows, android], index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-purple-50`}>
                      <td className="p-4 font-semibold border-r">{feature}</td>
                      <td className="p-4 border-r">
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                          {linux}
                        </div>
                      </td>
                      <td className="p-4 border-r">
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                          {windows}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                          {android}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Section */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-700 mb-3"> Linux</h3>
                <p className="text-gray-700">
                  Open, modular, high control for servers/developers. Excellent for customization and enterprise use.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-3">🪟 Windows</h3>
                <p className="text-gray-700">
                  Hybrid, user-friendly, extensive GUI & device support. Dominant in desktop and enterprise markets.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-3"> Android</h3>
                <p className="text-gray-700">
                  Linux-based, optimized for mobile hardware, app sandboxing for security. Leading mobile OS worldwide.
                </p>
              </div>
            </div>

            {/* Architecture Insights */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Architecture Insights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Common Patterns:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• All use layered architectures for abstraction</li>
                    <li>• Separation between user space and kernel space</li>
                    <li>• Hardware abstraction layers for portability</li>
                    <li>• Modular design for extensibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Key Differences:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Kernel design philosophy varies significantly</li>
                    <li>• Security models tailored to use cases</li>
                    <li>• Application ecosystems and APIs differ</li>
                    <li>• Target hardware platforms influence design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}