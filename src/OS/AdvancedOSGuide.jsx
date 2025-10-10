import React from "react";

const AdvancedOSGuide = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600">
        Advanced Topics in Operating Systems
      </h1>

      {/* A. Distributed Systems Basics */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">
          A. Distributed Systems Basics
        </h2>

        <h3 className="font-semibold">1. What is a Distributed System?</h3>
        <p>
          A Distributed System is a collection of independent computers that appear
          to the user as a single coherent system.
        </p>

        <h3 className="font-semibold">2. Characteristics</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Resource Sharing: CPU, files, printers, etc.</li>
          <li>Concurrency: Multiple processes run in parallel.</li>
          <li>Scalability: Easy to add/remove nodes.</li>
          <li>Fault Tolerance: Handles node failures gracefully.</li>
          <li>Transparency:
            <ul className="list-disc list-inside ml-4">
              <li>Access Transparency: same access method for local/remote</li>
              <li>Location Transparency: user doesn’t need to know resource location</li>
              <li>Replication Transparency: multiple copies behave as one</li>
            </ul>
          </li>
        </ul>

        <h3 className="font-semibold">3. Examples</h3>
        <ul className="list-disc list-inside">
          <li>Google File System (GFS)</li>
          <li>Hadoop Distributed File System (HDFS)</li>
          <li>Distributed Databases, Microservices Architecture</li>
        </ul>
      </section>

      {/* B. Client–Server Model */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">B. Client–Server Model</h2>
        <p>
          <strong>Client:</strong> Requests service (e.g., browser)
          <br />
          <strong>Server:</strong> Provides service (e.g., web server)
        </p>

        <h3 className="font-semibold">2. Types</h3>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Type</th>
              <th className="border border-gray-400 px-2 py-1">Description</th>
              <th className="border border-gray-400 px-2 py-1">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">File Server</td>
              <td className="border border-gray-400 px-2 py-1">Provides file access to clients</td>
              <td className="border border-gray-400 px-2 py-1">Network file sharing</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Database Server</td>
              <td className="border border-gray-400 px-2 py-1">Manages data queries</td>
              <td className="border border-gray-400 px-2 py-1">MySQL server</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Application Server</td>
              <td className="border border-gray-400 px-2 py-1">Runs business logic</td>
              <td className="border border-gray-400 px-2 py-1">Web app backend</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Proxy Server</td>
              <td className="border border-gray-400 px-2 py-1">Acts as intermediary</td>
              <td className="border border-gray-400 px-2 py-1">Caching proxy</td>
            </tr>
          </tbody>
        </table>

        <h3 className="font-semibold mt-2">3. Communication Methods</h3>
        <ul className="list-disc list-inside">
          <li>Sockets (TCP/UDP)</li>
          <li>Remote Procedure Calls (RPC)</li>
          <li>Message Passing</li>
        </ul>
      </section>

      {/* C. Remote Procedure Calls (RPC) */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">C. Remote Procedure Calls (RPC)</h2>
        <p>RPC allows a program to execute a procedure on a remote system as if it were local.</p>
        <h3 className="font-semibold">Working Steps</h3>
        <ol className="list-decimal list-inside">
          <li>Client Stub: Packs parameters (marshalling)</li>
          <li>Request Sent across network</li>
          <li>Server Stub: Unpacks and executes the function</li>
          <li>Result Sent Back to client</li>
        </ol>

        <h3 className="font-semibold">Advantages</h3>
        <ul className="list-disc list-inside">
          <li>Transparency (location + execution)</li>
          <li>Simplifies distributed programming</li>
        </ul>

        <h3 className="font-semibold">Disadvantages</h3>
        <ul className="list-disc list-inside">
          <li>Harder error handling (network failures)</li>
          <li>Slower than local calls due to network latency</li>
        </ul>
      </section>

      {/* D. Virtualization & Cloud OS Concepts */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">
          D. Virtualization & Cloud OS Concepts
        </h2>

        <h3 className="font-semibold">1. Virtualization Types</h3>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Type</th>
              <th className="border border-gray-400 px-2 py-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Hardware Virtualization</td>
              <td className="border border-gray-400 px-2 py-1">Multiple OSs share same physical machine via hypervisor</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">OS-Level Virtualization</td>
              <td className="border border-gray-400 px-2 py-1">Containers share one OS kernel (e.g., Docker)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Storage Virtualization</td>
              <td className="border border-gray-400 px-2 py-1">Multiple disks → one logical storage unit</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Network Virtualization</td>
              <td className="border border-gray-400 px-2 py-1">Virtual networks independent of hardware (e.g., SDN)</td>
            </tr>
          </tbody>
        </table>

        <h3 className="font-semibold mt-2">2. Hypervisors</h3>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Type</th>
              <th className="border border-gray-400 px-2 py-1">Example</th>
              <th className="border border-gray-400 px-2 py-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Type 1 (Bare Metal)</td>
              <td className="border border-gray-400 px-2 py-1">VMware ESXi, Hyper-V</td>
              <td className="border border-gray-400 px-2 py-1">Runs directly on hardware</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Type 2 (Hosted)</td>
              <td className="border border-gray-400 px-2 py-1">VirtualBox, VMware Workstation</td>
              <td className="border border-gray-400 px-2 py-1">Runs on top of an OS</td>
            </tr>
          </tbody>
        </table>

        <h3 className="font-semibold mt-2">3. Cloud OS Concepts</h3>
        <ul className="list-disc list-inside">
          <li>IaaS: Infrastructure as a Service (AWS EC2, Google Compute Engine)</li>
          <li>PaaS: Platform as a Service (Heroku, Google App Engine)</li>
          <li>SaaS: Software as a Service (Gmail, Google Docs)</li>
        </ul>

        <h3 className="font-semibold mt-2">4. Cloud Management</h3>
        <ul className="list-disc list-inside">
          <li>Virtual machine scheduling</li>
          <li>Resource allocation & load balancing</li>
          <li>Security & multi-tenancy isolation</li>
        </ul>
      </section>

      {/* E. Security and Protection Mechanisms */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">
          E. Security and Protection Mechanisms
        </h2>

        <h3 className="font-semibold">1. Goals of OS Security</h3>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Goal</th>
              <th className="border border-gray-400 px-2 py-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Confidentiality</td>
              <td className="border border-gray-400 px-2 py-1">Prevent unauthorized access</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Integrity</td>
              <td className="border border-gray-400 px-2 py-1">Prevent data modification</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Availability</td>
              <td className="border border-gray-400 px-2 py-1">Ensure services are always accessible</td>
            </tr>
          </tbody>
        </table>

        <h3 className="font-semibold mt-2">2. Protection Mechanisms</h3>
        <ul className="list-disc list-inside">
          <li>Authentication: Verify user identity (password, biometrics)</li>
          <li>Authorization: Define permissions</li>
          <li>ACLs: File-level permissions</li>
          <li>Encryption: Protect data in storage & transit</li>
          <li>Firewalls/Sandboxing: Isolate processes & block attacks</li>
          <li>Auditing & Logging: Record access/activity</li>
        </ul>

        <h3 className="font-semibold mt-2">3. Security Threats</h3>
        <ul className="list-disc list-inside">
          <li>Malware: Virus, Worm, Trojan</li>
          <li>Privilege Escalation: Unauthorized rights</li>
          <li>Phishing, Spoofing, Denial of Service (DoS)</li>
        </ul>

        <h3 className="font-semibold mt-2">4. Secure OS Design Principles</h3>
        <ul className="list-disc list-inside">
          <li>Least privilege</li>
          <li>Layered defense</li>
          <li>Secure defaults</li>
          <li>Regular patching and updates</li>
        </ul>
      </section>

      {/* F. System Boot Process */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">F. System Boot Process</h2>
        <p><strong>Booting:</strong> Starting the computer</p>

        <h3 className="font-semibold">1. Boot Steps</h3>
        <ol className="list-decimal list-inside">
          <li>Power On → POST (checks RAM, keyboard, etc.)</li>
          <li>BIOS/UEFI Execution → Searches for bootable device</li>
          <li>Boot Loader (GRUB, LILO) → Loads OS kernel into memory</li>
          <li>Kernel Initialization → Initializes components & drivers</li>
          <li>User Space Initialization → Starts services & daemons</li>
          <li>Login Prompt Appears</li>
        </ol>

        <h3 className="font-semibold mt-2">2. Boot Loaders</h3>
        <ul className="list-disc list-inside">
          <li>Windows Boot Manager (BOOTMGR)</li>
          <li>GRUB (Linux)</li>
          <li>LILO (Legacy Linux)</li>
        </ul>

        <h3 className="font-semibold mt-2">3. Dual Boot Example</h3>
        <p>User can choose between OSes (Windows or Linux) during boot.</p>
      </section>

      {/* Summary Table */}
      <section className="bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-yellow-800"> Summary Table</h2>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Topic</th>
              <th className="border border-gray-400 px-2 py-1">Key Concept</th>
              <th className="border border-gray-400 px-2 py-1">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Distributed Systems</td>
              <td className="border border-gray-400 px-2 py-1">Independent systems act as one</td>
              <td className="border border-gray-400 px-2 py-1">Google Cloud, Hadoop</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Client-Server</td>
              <td className="border border-gray-400 px-2 py-1">Server provides, client requests</td>
              <td className="border border-gray-400 px-2 py-1">Web, database</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">RPC</td>
              <td className="border border-gray-400 px-2 py-1">Remote function call</td>
              <td className="border border-gray-400 px-2 py-1">gRPC, XML-RPC</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Virtualization</td>
              <td className="border border-gray-400 px-2 py-1">Multiple virtual OSs</td>
              <td className="border border-gray-400 px-2 py-1">VMware, Docker</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Cloud OS</td>
              <td className="border border-gray-400 px-2 py-1">Internet-based computing</td>
              <td className="border border-gray-400 px-2 py-1">AWS, Azure</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Security</td>
              <td className="border border-gray-400 px-2 py-1">Protect data & processes</td>
              <td className="border border-gray-400 px-2 py-1">Authentication, ACLs</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-2 py-1">Boot Process</td>
              <td className="border border-gray-400 px-2 py-1">OS startup steps</td>
              <td className="border border-gray-400 px-2 py-1">BIOS → Bootloader → Kernel</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdvancedOSGuide;
