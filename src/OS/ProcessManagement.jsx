import React from "react";

export default function ProcessManagement() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center"> Process Management</h1>

      {/* 1. Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">🔹 What is a Process?</h2>
        <p>A <strong>process</strong> is a program in execution. It’s active, unlike a program (which is just stored code).</p>
        <p>Each process has:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Program code (text section)</li>
          <li>Program counter (PC)</li>
          <li>Stack (for function calls)</li>
          <li>Data section (variables)</li>
          <li>Heap (for dynamic memory)</li>
        </ul>
        <p><strong>Example:</strong> Opening 3 Word files → 3 processes of Microsoft Word are created.</p>
      </section>

      {/* 2. Process States */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold"> Process States</h2>
        <p>A process changes its state as it executes. Main 5 states:</p>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">State</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["New", "Process is being created."],
              ["Ready", "Waiting to be assigned to CPU."],
              ["Running", "Instructions are being executed."],
              ["Waiting (Blocked)", "Waiting for an event (e.g., I/O completion)."],
              ["Terminated", "Process finished execution."],
            ].map(([state, desc], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{state}</td>
                <td className="border p-2">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="font-semibold mt-3"> State Transition Diagram</h3>
        <pre className="bg-gray-100 p-3 rounded font-mono whitespace-pre">
{`      +------+
      | New  |
      +------+
          |
          v
      +-------+
      | Ready |
      +-------+
       ^     |
       |     v
   +----------+
   | Running  |
   +----------+
    ^   |   \\
    |   |    v
    |   | +--------+
    |   | | Waiting|
    |   | +--------+
    |   |
    |   v
 +---------+
 | Terminate|
 +---------+`}
        </pre>
      </section>

      {/* 3. Process Control Block */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold"> Process Control Block (PCB)</h2>
        <p>The PCB stores all information about a process. Essential for context switching.</p>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Field</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Process ID (PID)", "Unique identifier for each process."],
              ["Process State", "Current state (new, ready, running, waiting, terminated)."],
              ["Program Counter (PC)", "Next instruction address."],
              ["CPU Registers", "Register values when process is suspended."],
              ["Memory Information", "Base/limit registers, memory map."],
              ["Accounting Info", "CPU usage, execution time."],
              ["I/O Status Info", "List of open files, I/O devices in use."],
            ].map(([field, desc], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{field}</td>
                <td className="border p-2">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 4. Process Lifecycle */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold"> Process Lifecycle</h2>
        <p>
          Creation → Ready → Running → Waiting → Ready again → Termination
        </p>
      </section>

      {/* 5. Process Scheduling */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold"> Process Scheduling</h2>
        <p>The scheduler decides which process runs next on the CPU:</p>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Scheduler</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">When Used</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Long-term (Job Scheduler)", "Decides which processes enter the ready queue.", "Controls degree of multiprogramming."],
              ["Short-term (CPU Scheduler)", "Chooses which ready process will run next on CPU.", "Executes frequently (ms)."],
              ["Medium-term Scheduler", "Suspends/resumes processes to control memory load.", "Used in swapping."],
            ].map(([name, desc, when], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{name}</td>
                <td className="border p-2">{desc}</td>
                <td className="border p-2">{when}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2"><strong>Example Flow:</strong> Job Queue → Long-term → Ready Queue → Short-term → CPU → (Waiting for I/O) → Device Queue</p>
      </section>

      {/* 6. Context Switching */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold"> Context Switching</h2>
        <p>When CPU switches processes, OS saves current PCB and loads next process PCB.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Save current process registers & PC to PCB</li>
          <li>Load next process PCB</li>
          <li>CPU executes new process</li>
        </ul>
        <p className="text-sm text-gray-600">Context switch time = CPU overhead (no useful work done)</p>
      </section>

      {/* 7. Threads and Multithreading */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold"> Threads and Multithreading</h2>
        <p>A <strong>thread</strong> is a lightweight process that shares resources within a process.</p>
        <p><strong>Example:</strong> Browser threads – one for images, one for audio, one for user input.</p>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Process</th>
              <th className="border p-2">Thread</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Heavyweight</td>
              <td className="border p-2 font-medium">Lightweight</td>
            </tr>
            <tr>
              <td className="border p-2">Own memory</td>
              <td className="border p-2">Shares memory</td>
            </tr>
            <tr>
              <td className="border p-2">Slow to create/switch</td>
              <td className="border p-2">Fast to create/switch</td>
            </tr>
          </tbody>
        </table>
        <p>Advantages: Faster context switching, resource sharing, better CPU utilization, simplified communication.</p>
      </section>

      {/* 8. Inter-Process Communication */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold"> Inter-Process Communication (IPC)</h2>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Mechanism</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Pipes", "Unidirectional communication channel", "pipe(fd) in UNIX"],
              ["Message Queues", "Send/receive messages through queues", "msgsnd(), msgrcv()"],
              ["Shared Memory", "Multiple processes access common memory", "Fastest IPC method"],
              ["Semaphores", "Used for synchronization", "sem_wait(), sem_post()"],
            ].map(([m, desc, ex], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{m}</td>
                <td className="border p-2">{desc}</td>
                <td className="border p-2">{ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 9. Process Synchronization */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold"> Process Synchronization</h2>
        <p>Ensures correctness when multiple processes access shared data.</p>
        <p><strong>Race Condition:</strong> Two processes access shared data simultaneously → inconsistent result.</p>
        <p><strong>Critical Section Problem:</strong> Only one process should enter critical section at a time.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Mutual Exclusion – Only one process inside critical section</li>
          <li>Progress – No process waits indefinitely</li>
          <li>Bounded Waiting – Limit waiting time to enter</li>
        </ul>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Tool</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Semaphores", "Integer variables used for signaling and mutual exclusion."],
              ["Mutex (Mutual Exclusion Lock)", "Binary lock allowing only one thread access."],
              ["Monitors", "High-level synchronization structure combining data and operations."],
            ].map(([tool, desc], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{tool}</td>
                <td className="border p-2">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-gray-900 text-green-400 p-3 rounded font-mono mt-2">
{`wait(S);   // P(S): if S>0, continue; else block
critical_section();
signal(S); // V(S): increments S, wakes waiting process`}
        </div>
      </section>

      {/* 10. Summary Diagram */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold"> Summary Diagram</h2>
        <pre className="bg-gray-100 p-3 rounded font-mono whitespace-pre">
{`+---------------------------+
|        Process A          |
|  ┌──────────────────────┐ |
|  |   Code, Data, Stack  | |
|  |   Heap, Registers    | |
|  └──────────────────────┘ |
+------------|--------------+
             |
   Inter-Process Communication
             |
+------------v--------------+
|        Process B          |
|  ┌──────────────────────┐ |
|  |   Code, Data, Stack  | |
|  └──────────────────────┘ |
+---------------------------+`}
        </pre>
      </section>
    </div>
  );
}
