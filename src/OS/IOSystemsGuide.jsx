import React from "react";

const IOSystemsGuide = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600">I/O Systems</h1>

      {/* A. I/O Hardware Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">A. I/O Hardware Overview</h2>
        <p><strong>Purpose:</strong> Facilitate communication between CPU and peripheral devices.</p>

        <h3 className="font-semibold">Components:</h3>
        <ul className="list-disc list-inside">
          <li>Input Devices: Keyboard, mouse, scanner</li>
          <li>Output Devices: Monitor, printer</li>
          <li>Storage Devices: HDD, SSD, CD-ROM</li>
          <li>I/O Ports & Controllers: Interface between CPU and devices</li>
        </ul>

        <h3 className="font-semibold">Characteristics of I/O Devices:</h3>
        <ul className="list-disc list-inside">
          <li>Data rate (slow vs fast devices)</li>
          <li>Volatility (temporary or permanent storage)</li>
          <li>Access method (sequential vs random)</li>
        </ul>
      </section>

      {/* B. I/O Software Layers */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">B. I/O Software Layers</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>User-Level I/O Library:</strong> Provides high-level functions: read(), write(), open(), close().
          </li>
          <li>
            <strong>Device-Independent I/O Software:</strong> Hides differences between devices and provides uniform API.
          </li>
          <li>
            <strong>Device Drivers:</strong> Device-specific software converting generic requests into device commands. 
            <br />Example: printer driver, disk driver.
          </li>
          <li>
            <strong>Interrupt Handlers / Kernel I/O Subsystem:</strong> Handles hardware interrupts when device is ready or completed.
          </li>
        </ul>
      </section>

      {/* C. Interrupt Handling */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">C. Interrupt Handling</h2>
        <p>
          <strong>Concept:</strong> Device signals CPU that it’s ready instead of CPU waiting (polling).
        </p>
        <h3 className="font-semibold">Types:</h3>
        <ul className="list-disc list-inside">
          <li>Maskable Interrupts – Can be ignored or delayed</li>
          <li>Non-Maskable Interrupts (NMI) – Cannot be ignored (critical events)</li>
        </ul>
        <h3 className="font-semibold">Advantages:</h3>
        <ul className="list-disc list-inside">
          <li>CPU can execute other tasks while waiting for I/O</li>
          <li>Reduces wasted CPU cycles</li>
        </ul>
      </section>

      {/* D. Direct Memory Access (DMA) */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">D. Direct Memory Access (DMA)</h2>
        <p><strong>Purpose:</strong> Transfer data directly between I/O device and memory without CPU intervention.</p>
        <h3 className="font-semibold">Benefits:</h3>
        <ul className="list-disc list-inside">
          <li>Faster than programmed I/O</li>
          <li>Reduces CPU load</li>
        </ul>
        <h3 className="font-semibold">Process:</h3>
        <ol className="list-decimal list-inside">
          <li>CPU initiates transfer → DMA controller</li>
          <li>DMA moves data to memory</li>
          <li>DMA sends interrupt to CPU when done</li>
        </ol>
      </section>

      {/* E. Disk Scheduling Algorithms */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">E. Disk Scheduling Algorithms</h2>
        <p>Optimizes disk head movement to reduce seek time when multiple I/O requests arrive:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>FCFS (First Come First Serve):</strong> Serve requests in arrival order. Simple but may cause convoy effect.</li>
          <li><strong>SSTF (Shortest Seek Time First):</strong> Select request closest to current head position. Reduces seek time but may cause starvation.</li>
          <li><strong>SCAN (Elevator Algorithm):</strong> Disk head moves in one direction serving requests until end, then reverses. Reduces starvation.</li>
          <li><strong>C-SCAN (Circular SCAN):</strong> Disk head moves in one direction only, jumps back after reaching end. Provides uniform wait times.</li>
          <li><strong>LOOK / C-LOOK:</strong> Like SCAN/C-SCAN but only goes as far as the furthest request. More efficient.</li>
        </ul>
      </section>

      {/* F. RAID Levels */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">F. RAID Levels (Redundant Array of Independent Disks)</h2>
        <p>Purpose: Improve reliability and/or performance of disk storage.</p>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Level</th>
              <th className="border border-gray-400 px-2 py-1">Description</th>
              <th className="border border-gray-400 px-2 py-1">Pros</th>
              <th className="border border-gray-400 px-2 py-1">Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">RAID 0</td>
              <td className="border border-gray-400 px-2 py-1">Striping (no redundancy)</td>
              <td className="border border-gray-400 px-2 py-1">High performance</td>
              <td className="border border-gray-400 px-2 py-1">No fault tolerance</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">RAID 1</td>
              <td className="border border-gray-400 px-2 py-1">Mirroring</td>
              <td className="border border-gray-400 px-2 py-1">Fault tolerance</td>
              <td className="border border-gray-400 px-2 py-1">Double storage needed</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">RAID 5</td>
              <td className="border border-gray-400 px-2 py-1">Block-level striping + distributed parity</td>
              <td className="border border-gray-400 px-2 py-1">Fault tolerance + performance</td>
              <td className="border border-gray-400 px-2 py-1">Slower writes</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">RAID 6</td>
              <td className="border border-gray-400 px-2 py-1">Like RAID 5 + extra parity</td>
              <td className="border border-gray-400 px-2 py-1">Can tolerate 2 disk failures</td>
              <td className="border border-gray-400 px-2 py-1">More parity overhead</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">RAID 10</td>
              <td className="border border-gray-400 px-2 py-1">Mirror + stripe</td>
              <td className="border border-gray-400 px-2 py-1">High performance + redundancy</td>
              <td className="border border-gray-400 px-2 py-1">High cost (50% usable)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Key Takeaways */}
      <section className="bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-yellow-800"> Key Takeaways</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>I/O Hardware: Devices + controllers</li>
          <li>Software Layers: User library → Device-independent layer → Device driver → Kernel/interrupts</li>
          <li>Interrupts: Efficient CPU-device communication</li>
          <li>DMA: CPU-free data transfer</li>
          <li>Disk Scheduling: Reduces seek time, improves throughput</li>
          <li>RAID: Combines multiple disks for performance and/or fault tolerance</li>
        </ul>
      </section>
    </div>
  );
};

export default IOSystemsGuide;
