import React, { useState } from "react";

export default function MemoryManagement() {
  const [activeSection, setActiveSection] = useState("hierarchy");

  const sections = [
    { id: "hierarchy", label: "Memory Hierarchy" },
    { id: "allocation", label: "Memory Allocation" },
    { id: "partitioning", label: "Partitioning" },
    { id: "paging", label: "Paging & Segmentation" },
    { id: "virtual", label: "Virtual Memory" },
    { id: "replacement", label: "Page Replacement" },
    { id: "thrashing", label: "Thrashing" },
    { id: "summary", label: "Key Takeaways" }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
        Memory Management 
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Understanding how operating systems manage memory efficiently
      </p>

      {/* Navigation */}
      <nav className="flex flex-wrap gap-2 justify-center border-b pb-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeSection === section.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* A. Memory Hierarchy */}
      {activeSection === "hierarchy" && (
        <section className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">A. Memory Hierarchy</h2>
            <p className="text-lg text-gray-700 mb-6">
              Memory is organized by speed, size, and cost in a hierarchical structure
            </p>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="p-4 text-left">Level</th>
                    <th className="p-4 text-left">Speed</th>
                    <th className="p-4 text-left">Size</th>
                    <th className="p-4 text-left">Cost</th>
                    <th className="p-4 text-left">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Registers", "Fastest", "Very Small", "Very High", "CPU registers"],
                    ["Cache (L1/L2)", "Fast", "Small", "High", "CPU cache"],
                    ["Main Memory (RAM)", "Medium", "Medium", "Medium", "DRAM"],
                    ["Secondary Storage", "Slow", "Large", "Low", "HDD, SSD"]
                  ].map(([level, speed, size, cost, examples], index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold">{level}</td>
                      <td className="p-4">{speed}</td>
                      <td className="p-4">{size}</td>
                      <td className="p-4">{cost}</td>
                      <td className="p-4 text-blue-600">{examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">🎯</div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Goal:</strong> Keep frequently used data in faster memory to reduce CPU waiting time
                  </p>
                </div>
              </div>
            </div>

            {/* Visualization */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Memory Pyramid Visualization</h3>
              <div className="flex flex-col items-center space-y-2">
                {/* CPU Registers */}
                <div className="w-16 h-8 bg-red-500 rounded-t-lg flex items-center justify-center text-white text-xs font-bold">
                  Registers
                </div>
                {/* Cache */}
                <div className="w-32 h-12 bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
                  Cache
                </div>
                {/* Main Memory */}
                <div className="w-48 h-16 bg-green-500 flex items-center justify-center text-white font-bold">
                  Main Memory
                </div>
                {/* Secondary Storage */}
                <div className="w-64 h-20 bg-blue-500 rounded-b-lg flex items-center justify-center text-white font-bold">
                  Secondary Storage
                </div>
              </div>
              <div className="text-center mt-4 text-gray-600">
                <p>↑ Faster, Smaller, More Expensive</p>
                <p>↓ Slower, Larger, Cheaper</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* B. Memory Allocation */}
      {activeSection === "allocation" && (
        <section className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h2 className="text-3xl font-bold text-green-800 mb-6">B. Memory Allocation</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Contiguous Allocation */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Contiguous Memory Allocation</h3>
                <p className="text-gray-700 mb-4">
                  Single continuous block per process
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <div>
                      <strong>Pros:</strong> Simple, fast address calculation
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <div>
                      <strong>Cons:</strong> External fragmentation
                    </div>
                  </div>
                </div>

                {/* Visualization */}
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-bold mb-2">Memory Layout:</h4>
                  <div className="flex space-x-1">
                    {[
                      { label: "P1", color: "bg-blue-400", size: "w-16" },
                      { label: "Free", color: "bg-gray-300", size: "w-8" },
                      { label: "P2", color: "bg-green-400", size: "w-20" },
                      { label: "Free", color: "bg-gray-300", size: "w-12" },
                      { label: "P3", color: "bg-purple-400", size: "w-24" }
                    ].map((block, index) => (
                      <div key={index} className={`${block.size} h-8 ${block.color} rounded flex items-center justify-center text-white text-xs font-bold`}>
                        {block.label}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-2">External fragmentation visible as scattered free space</p>
                </div>
              </div>

              {/* Non-Contiguous Allocation */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-700 mb-4">Non-Contiguous Memory Allocation</h3>
                <p className="text-gray-700 mb-4">
                  Process split across multiple blocks
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <div>
                      <strong>Pros:</strong> Reduces external fragmentation
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <div>
                      <strong>Cons:</strong> Needs mapping (page tables, segment tables)
                    </div>
                  </div>
                </div>

                {/* Visualization */}
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-bold mb-2">Memory Layout:</h4>
                  <div className="flex flex-wrap gap-1">
                    {[
                      { label: "P1-A", color: "bg-blue-400" },
                      { label: "P2-A", color: "bg-green-400" },
                      { label: "P1-B", color: "bg-blue-400" },
                      { label: "P3-A", color: "bg-purple-400" },
                      { label: "P2-B", color: "bg-green-400" },
                      { label: "P1-C", color: "bg-blue-400" }
                    ].map((block, index) => (
                      <div key={index} className="w-12 h-8 rounded flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: block.color }}>
                        {block.label}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Process parts scattered but no external fragmentation</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* C. Partitioning */}
      {activeSection === "partitioning" && (
        <section className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">C. Partitioning</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Fixed Partitioning */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4">Fixed Partitioning</h3>
                <p className="text-gray-700 mb-4">
                  Memory divided into fixed-size blocks
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-700 mb-2">Problem: Internal Fragmentation</h4>
                  <p className="text-sm text-red-600">
                    Wasted space within partitions when process is smaller than partition size
                  </p>
                </div>

                {/* Visualization */}
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-bold mb-2">Fixed Partitions:</h4>
                  <div className="space-y-2">
                    {[
                      { partition: "Partition 1 (4KB)", process: "P1 (3KB)", wasted: "1KB wasted" },
                      { partition: "Partition 2 (4KB)", process: "P2 (2KB)", wasted: "2KB wasted" },
                      { partition: "Partition 3 (4KB)", process: "Free", wasted: "4KB unused" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                        <span className="text-sm font-medium">{item.partition}</span>
                        <span className="text-sm">{item.process}</span>
                        <span className="text-xs text-red-500">{item.wasted}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Partitioning */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-600 mb-4">Dynamic Partitioning</h3>
                <p className="text-gray-700 mb-4">
                  Memory allocated exactly as needed
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-700 mb-2">Problem: External Fragmentation</h4>
                  <p className="text-sm text-green-600">
                    Free memory becomes divided into small, scattered blocks
                  </p>
                </div>

                {/* Visualization */}
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-bold mb-2">Dynamic Allocation:</h4>
                  <div className="flex space-x-1">
                    {[
                      { label: "P1", color: "bg-blue-400", size: "w-20" },
                      { label: "Free", color: "bg-gray-300", size: "w-8" },
                      { label: "P2", color: "bg-green-400", size: "w-16" },
                      { label: "Free", color: "bg-gray-300", size: "w-12" },
                      { label: "P3", color: "bg-purple-400", size: "w-24" }
                    ].map((block, index) => (
                      <div key={index} className={`${block.size} h-8 ${block.color} rounded flex items-center justify-center text-white text-xs font-bold`}>
                        {block.label}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Free space scattered → external fragmentation</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* D. Paging & Segmentation */}
      {activeSection === "paging" && (
        <section className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">D. Paging & Segmentation</h2>

            <div className="space-y-8">
              {/* Paging */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">Paging</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Key Concepts:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Process → <strong>pages</strong> (logical memory)</li>
                      <li>• Memory → <strong>frames</strong> (physical memory)</li>
                      <li>• <strong>Page Table</strong> maps page → frame</li>
                      <li>• Eliminates external fragmentation</li>
                      <li>• Internal fragmentation possible in last page</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Page Table Example:</h4>
                    <div className="space-y-2">
                      {[
                        ["Page 0", "Frame 3"],
                        ["Page 1", "Frame 7"],
                        ["Page 2", "Frame 2"],
                        ["Page 3", "Frame 8"]
                      ].map(([page, frame], index) => (
                        <div key={index} className="flex justify-between bg-white p-2 rounded border">
                          <span className="font-medium">{page}</span>
                          <span className="text-blue-600 font-bold">{frame}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Segmentation */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Segmentation</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Key Concepts:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Process → logical segments (code, stack, heap)</li>
                      <li>• <strong>Segment Table</strong> maps segment → memory</li>
                      <li>• External fragmentation possible</li>
                      <li>• Matches programmer's logical view</li>
                    </ul>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Segment Table Example:</h4>
                    <div className="space-y-2">
                      {[
                        ["Code Segment", "Base: 0x4000", "Limit: 2KB"],
                        ["Data Segment", "Base: 0x6000", "Limit: 1KB"],
                        ["Stack Segment", "Base: 0x7000", "Limit: 512B"]
                      ].map(([segment, base, limit], index) => (
                        <div key={index} className="bg-white p-2 rounded border">
                          <div className="font-medium">{segment}</div>
                          <div className="text-sm text-gray-600">{base} | {limit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Segmentation with Paging */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Segmentation with Paging</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Segments divided into pages — combines benefits of both approaches
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-3">Benefits Combined:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-700">✅ From Segmentation:</h5>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• Logical program structure</li>
                        <li>• Protection per segment</li>
                        <li>• Easy sharing</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700">✅ From Paging:</h5>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• No external fragmentation</li>
                        <li>• Efficient memory use</li>
                        <li>• Simplified allocation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* E. Virtual Memory */}
      {activeSection === "virtual" && (
        <section className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
            <h2 className="text-3xl font-bold text-teal-800 mb-6">E. Virtual Memory</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-teal-700 mb-3">Definition</h3>
                  <p className="text-lg text-gray-700">
                    Memory larger than physical RAM using disk storage
                  </p>
                  <div className="mt-4 bg-teal-50 p-4 rounded-lg border border-teal-200">
                    <p className="text-teal-700 font-semibold">
                      Creates illusion of infinite memory space for processes
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-teal-700 mb-3">Demand Paging</h3>
                  <p className="text-gray-700 mb-4">
                    Load pages only when needed (on demand)
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-bold text-yellow-700 mb-2">Page Fault</h4>
                    <p className="text-sm text-yellow-600">
                      Occurs when page not in RAM → OS loads it from disk
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-teal-700 mb-4">Virtual Memory Visualization</h3>
                
                <div className="space-y-4">
                  {/* Virtual Memory */}
                  <div className="border-2 border-dashed border-teal-300 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-700 text-center mb-2">Virtual Memory (Disk)</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 16 }, (_, i) => (
                        <div key={i} className="h-6 bg-teal-100 rounded flex items-center justify-center text-xs">
                          Page {i}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Physical Memory */}
                  <div className="border-2 border-green-500 p-4 rounded-lg bg-green-50">
                    <h4 className="font-bold text-green-700 text-center mb-2">Physical Memory (RAM)</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[0, 1, 2, 3].map((frame) => (
                        <div key={frame} className="h-8 bg-green-200 rounded flex items-center justify-center text-sm font-bold border border-green-300">
                          Frame {frame}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Page Table */}
                  <div className="border-2 border-blue-300 p-4 rounded-lg bg-blue-50">
                    <h4 className="font-bold text-blue-700 text-center mb-2">Page Table</h4>
                    <div className="space-y-1 text-sm">
                      {[
                        ["Page 0", "Frame 2", "✓"],
                        ["Page 1", "Frame 0", "✓"],
                        ["Page 2", "Disk", "✗"],
                        ["Page 3", "Frame 1", "✓"]
                      ].map(([page, location, status], index) => (
                        <div key={index} className="flex justify-between bg-white p-2 rounded border">
                          <span>{page}</span>
                          <span className={location === 'Disk' ? 'text-red-500' : 'text-green-500'}>
                            {location} {status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* F. Page Replacement Algorithms */}
      {activeSection === "replacement" && (
        <section className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
            <h2 className="text-3xl font-bold text-red-800 mb-6">F. Page Replacement Algorithms</h2>
            <p className="text-lg text-gray-700 mb-8">
              When memory is full, which page should be replaced?
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "FIFO (First In First Out)",
                  description: "Remove oldest page",
                  pros: "Simple to implement",
                  cons: "Belady's anomaly possible",
                  color: "blue"
                },
                {
                  name: "LRU (Least Recently Used)",
                  description: "Remove page not used longest",
                  pros: "Good performance",
                  cons: "High overhead to track usage",
                  color: "green"
                },
                {
                  name: "Optimal (Belady's)",
                  description: "Remove page used farthest in future",
                  pros: "Theoretical best",
                  cons: "Requires future knowledge (impossible)",
                  color: "purple"
                },
                {
                  name: "Clock (Second Chance)",
                  description: "Approximate LRU using circular queue",
                  pros: "Good balance of performance/overhead",
                  cons: "Approximation may not be perfect",
                  color: "orange"
                }
              ].map((algo, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${algo.color}-500`}>
                  <h3 className={`text-xl font-bold text-${algo.color}-700 mb-3`}>{algo.name}</h3>
                  <p className="text-gray-700 mb-4">{algo.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✅</span>
                      <span className="text-sm"><strong>Pros:</strong> {algo.pros}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2">❌</span>
                      <span className="text-sm"><strong>Cons:</strong> {algo.cons}</span>
                    </div>
                  </div>

                  {/* Mini visualization */}
                  <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span>Pages: 1, 2, 3, 4</span>
                      <span>Frames: 3</span>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map(num => (
                        <div key={num} className="w-8 h-6 bg-blue-300 rounded flex items-center justify-center text-xs font-bold">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* G. Thrashing & Working Set */}
      {activeSection === "thrashing" && (
        <section className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
            <h2 className="text-3xl font-bold text-yellow-800 mb-6">G. Thrashing & Working Set</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Thrashing</h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-red-700 font-semibold">
                    Excessive paging → CPU spends more time swapping than executing
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-700">Causes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Too many processes competing for memory</li>
                    <li>Insufficient RAM for working sets</li>
                    <li>Poor page replacement algorithm</li>
                  </ul>
                  
                  <h4 className="font-bold text-gray-700 mt-4">Symptoms:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>High disk I/O activity</li>
                    <li>Low CPU utilization</li>
                    <li>System becomes unresponsive</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Working Set Model</h3>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                  <p className="text-green-700 font-semibold">
                    Keep active pages of a process in memory → prevent thrashing
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Working Set Definition:</h4>
                    <p className="text-gray-600 text-sm">
                      Set of pages a process is actively using within a time window
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">How it works:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Monitor pages accessed in recent time window</li>
                      <li>Keep working set in memory</li>
                      <li>Suspend processes if total working sets exceed available memory</li>
                    </ul>
                  </div>

                  {/* Working Set Visualization */}
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold mb-2">Working Set Example:</h4>
                    <div className="flex flex-wrap gap-1">
                      {[
                        { page: "P1", active: true },
                        { page: "P2", active: true },
                        { page: "P3", active: false },
                        { page: "P4", active: true },
                        { page: "P5", active: false },
                        { page: "P6", active: true }
                      ].map((item, index) => (
                        <div key={index} className={`w-10 h-6 rounded flex items-center justify-center text-xs font-bold ${
                          item.active ? 'bg-green-400 text-white' : 'bg-gray-300 text-gray-600'
                        }`}>
                          {item.page}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Green pages are in the working set</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* H. Key Takeaways */}
      {activeSection === "summary" && (
        <section className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">H. Key Takeaways</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Memory Hierarchy",
                  description: "Speed vs cost tradeoff",
                  icon: "",
                  points: ["Registers → Cache → RAM → Disk", "Faster = smaller & more expensive"]
                },
                {
                  title: "Memory Allocation",
                  description: "Contiguous vs Non-contiguous",
                  icon: "",
                  points: ["Contiguous: simple but fragments", "Non-contiguous: flexible but complex"]
                },
                {
                  title: "Paging",
                  description: "No external fragmentation",
                  icon: "",
                  points: ["Fixed-size pages/frames", "Page tables for mapping"]
                },
                {
                  title: "Segmentation",
                  description: "Logical program view",
                  icon: "",
                  points: ["Variable-size segments", "Matches program structure"]
                },
                {
                  title: "Virtual Memory",
                  description: "Illusion of large memory",
                  icon: "",
                  points: ["Demand paging", "Page faults handled by OS"]
                },
                {
                  title: "Thrashing Prevention",
                  description: "Working set model",
                  icon:"",
                  points: ["Monitor active pages", "Balance memory allocation"]
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {item.points.map((point, idx) => (
                      <li key={idx}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Memory Management Success</h3>
              <p className="text-blue-700">
                Effective memory management balances performance, efficiency, and cost while 
                providing processes with the illusion of abundant, fast memory through clever 
                algorithms and hierarchical organization.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}