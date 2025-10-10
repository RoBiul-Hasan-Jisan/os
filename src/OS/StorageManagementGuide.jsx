import React from "react";

const StorageManagementGuide = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600">
        Storage and Secondary Memory Management 
      </h1>

      {/* A. Disk Structure and Management */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">
          A. Disk Structure and Management
        </h2>

        {/* 1. Disk Structure */}
        <h3 className="font-semibold">1. Disk Structure</h3>
        <p>Disks are organized into platters, tracks, and sectors.</p>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Term</th>
              <th className="border border-gray-400 px-2 py-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Platter</td>
              <td className="border border-gray-400 px-2 py-1">
                Circular disk coated with magnetic material
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Track</td>
              <td className="border border-gray-400 px-2 py-1">Circular path on platter surface</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Sector</td>
              <td className="border border-gray-400 px-2 py-1">Smallest storage unit (e.g., 512B or 4KB)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Cylinder</td>
              <td className="border border-gray-400 px-2 py-1">
                Set of tracks vertically aligned across platters
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Disk Arm & Head:</strong> Move to access desired track and read/write data.
          <br />
          <strong>Disk Controller:</strong> Manages disk operations and communication with CPU.
        </p>

        {/* 2. Disk Management Tasks */}
        <h3 className="font-semibold mt-4">2. Disk Management Tasks</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Partitioning:</strong> Divide physical disk into logical sections (e.g., C:, D:).
          </li>
          <li>
            <strong>Formatting:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Low-level formatting: Defines sectors/tracks (by manufacturer)</li>
              <li>High-level formatting: Creates file system (FAT, NTFS, ext4, etc.)</li>
            </ul>
          </li>
          <li><strong>Boot Block:</strong> Holds code to load the OS</li>
          <li><strong>Bad Block Management:</strong> Detect and replace defective sectors</li>
        </ul>
      </section>

      {/* B. Disk Performance Parameters */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">
          B. Disk Performance Parameters
        </h2>
        <p>Performance depends on several factors:</p>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Parameter</th>
              <th className="border border-gray-400 px-2 py-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Seek Time</td>
              <td className="border border-gray-400 px-2 py-1">Time for disk head to move to the correct track</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Rotational Latency</td>
              <td className="border border-gray-400 px-2 py-1">Time for desired sector to rotate under head</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Transfer Time</td>
              <td className="border border-gray-400 px-2 py-1">Time to read/write data after positioning</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Access Time</td>
              <td className="border border-gray-400 px-2 py-1">
                Seek Time + Rotational Latency + Transfer Time
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Disk Bandwidth</td>
              <td className="border border-gray-400 px-2 py-1">Total bytes transferred ÷ total transfer time</td>
            </tr>
          </tbody>
        </table>
        <p>Goal: Minimize seek + rotational delay to improve disk performance.</p>
      </section>

      {/* C. Disk Scheduling and Optimization */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">
          C. Disk Scheduling and Optimization
        </h2>
        <p>When multiple I/O requests are pending, disk scheduling algorithms optimize head movement:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>FCFS:</strong> Serve in order of arrival. Simple but high seek time if scattered.</li>
          <li><strong>SSTF:</strong> Closest request first. Lower average seek time; may starve far requests.</li>
          <li><strong>SCAN (Elevator):</strong> Head moves in one direction, then reverses. Reduces starvation.</li>
          <li><strong>C-SCAN:</strong> Moves in one direction only, jumps back. Uniform wait times.</li>
          <li><strong>LOOK / C-LOOK:</strong> Similar to SCAN/C-SCAN but only to last request. More efficient.</li>
        </ul>
      </section>

      {/* D. Disk Optimization Techniques */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">
          D. Disk Optimization Techniques
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Disk Caching:</strong> Store frequently accessed data in cache to reduce access time.</li>
          <li><strong>Prefetching (Read Ahead):</strong> Load adjacent sectors anticipating sequential access.</li>
          <li><strong>Disk Defragmentation:</strong> Rearranges file blocks contiguously → reduces seek/rotational delays.</li>
          <li><strong>RAID:</strong> Multiple disks for parallel access & fault tolerance.</li>
          <li><strong>SSD Optimization:</strong> Wear-leveling, TRIM commands to prolong SSD life.</li>
        </ul>
      </section>

      {/* E. Swap Space Management */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">
          E. Swap Space Management
        </h2>
        <p>
          <strong>Swap Space:</strong> Area on disk used as temporary extension of main memory (virtual memory).
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Swap Space Location:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Dedicated partition (faster)</li>
              <li>Swap file within file system (slower)</li>
            </ul>
          </li>
          <li><strong>Swap Management Techniques:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Paging: Swap individual pages between RAM and disk.</li>
              <li>Swapping Entire Processes: Rare in modern OS.</li>
              <li>Space Allocation: Preallocated or dynamically expanded.</li>
              <li>Replacement Policies: FIFO, LRU, Clock.</li>
            </ul>
          </li>
          <li><strong>Optimization:</strong> Keep swap on fastest disk; use multiple swap areas for parallel access.</li>
        </ul>
      </section>

      {/* Key Takeaways */}
      <section className="bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-yellow-800"> Key Takeaways</h2>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Concept</th>
              <th className="border border-gray-400 px-2 py-1">Key Idea</th>
              <th className="border border-gray-400 px-2 py-1">Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Disk Structure</td>
              <td className="border border-gray-400 px-2 py-1">Tracks, sectors, cylinders</td>
              <td className="border border-gray-400 px-2 py-1">Organized storage layout</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Disk Management</td>
              <td className="border border-gray-400 px-2 py-1">Partitioning, formatting, bad-block handling</td>
              <td className="border border-gray-400 px-2 py-1">Reliable access</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Performance Parameters</td>
              <td className="border border-gray-400 px-2 py-1">Seek, latency, transfer</td>
              <td className="border border-gray-400 px-2 py-1">Measure access speed</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Scheduling Algorithms</td>
              <td className="border border-gray-400 px-2 py-1">FCFS, SSTF, SCAN, C-SCAN, LOOK</td>
              <td className="border border-gray-400 px-2 py-1">Reduce seek time</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Disk Optimization</td>
              <td className="border border-gray-400 px-2 py-1">Caching, prefetching, defragmentation</td>
              <td className="border border-gray-400 px-2 py-1">Faster access</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Swap Space</td>
              <td className="border border-gray-400 px-2 py-1">Disk as temporary RAM</td>
              <td className="border border-gray-400 px-2 py-1">Extends virtual memory capacity</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StorageManagementGuide;
