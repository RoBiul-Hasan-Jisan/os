import React, { useState } from "react";

export default function ProcessSyn() {
  const [activeTab, setActiveTab] = useState("critical");

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-800">
        Process Synchronization & Deadlocks
      </h1>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b pb-4">
        {[
          { id: "critical", label: "Critical Section" },
          { id: "software", label: "Software Solutions" },
          { id: "semaphores", label: "Semaphores" },
          { id: "monitors", label: "Monitors" },
          { id: "deadlocks", label: "Deadlocks" },
          { id: "handling", label: "Handling Techniques" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Critical Section Problem */}
      {activeTab === "critical" && (
        <section className="space-y-4 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800">A. Critical Section Problem</h2>
          
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg font-semibold mb-3">
              <strong>Critical Section (CS):</strong> The part of a program where shared resources 
              (variables, files, printers) are accessed.
            </p>
            <p className="mb-4">Only one process should execute in the CS at a time to avoid data inconsistency or race conditions.</p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                <h3 className="font-bold text-green-800 mb-2">1. Mutual Exclusion</h3>
                <p>Only one process can be in the CS at a time.</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                <h3 className="font-bold text-yellow-800 mb-2">2. Progress</h3>
                <p>If no process is in CS, system must allow a process to enter.</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                <h3 className="font-bold text-red-800 mb-2">3. Bounded Waiting</h3>
                <p>No process should wait indefinitely (prevents starvation).</p>
              </div>
            </div>

            {/* Visualization */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h4 className="font-bold mb-3"> Race Condition Example:</h4>
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    P1
                  </div>
                  <p>Process 1: x = x + 1</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    P2
                  </div>
                  <p>Process 2: x = x + 1</p>
                </div>
              </div>
              <p className="text-center mt-3 text-sm">
                Without synchronization: Final value of x might be inconsistent!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Software Solutions */}
      {activeTab === "software" && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">B. Software Solutions</h2>

          {/* Peterson's Solution */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-800">1. Peterson's Solution</h3>
            <p className="mb-3">Classical software algorithm for <strong>two processes</strong> ensuring mutual exclusion.</p>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">Variables Used:</h4>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li><code>flag[i]</code> → process i wants to enter CS</li>
                <li><code>turn</code> → indicates whose turn it is to enter CS</li>
              </ul>

              <h4 className="font-bold mb-2">Algorithm:</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// For Process i
flag[i] = true;
turn = j;
while (flag[j] && turn == j);
// Critical Section
flag[i] = false;
// Remainder Section`}
              </pre>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-green-100 p-3 rounded">
                <h4 className="font-bold"> Guarantees:</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Mutual Exclusion</li>
                  <li>Progress</li>
                  <li>Bounded Waiting</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-3 rounded">
                <h4 className="font-bold"> Limitation:</h4>
                <p>Works only for <strong>two processes</strong></p>
              </div>
            </div>
          </div>

          {/* Bakery Algorithm */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-800">2. Bakery Algorithm</h3>
            <p className="mb-3">General solution for <strong>n processes</strong> (like taking numbered tickets at a bakery).</p>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">How it works:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Each process takes a number ticket</li>
                <li>Process with the <strong>smallest number</strong> enters CS first</li>
                <li>If same number, process with lower ID goes first</li>
              </ol>
            </div>

            <div className="mt-4 bg-purple-100 p-3 rounded">
              <h4 className="font-bold"> Guarantees:</h4>
              <ul className="list-disc list-inside">
                <li>Mutual Exclusion</li>
                <li>Progress</li>
                <li>Bounded Waiting</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Semaphores */}
      {activeTab === "semaphores" && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">C. Semaphores</h2>

          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <p className="text-lg mb-4">
              A <strong>semaphore</strong> is an integer variable used for process synchronization.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Operations */}
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Operations:</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded border">
                    <h4 className="font-bold">wait(S) or P(S)</h4>
                    <p>Decrement S; if S {'<'} 0, block the process</p>
                    <pre className="bg-gray-800 text-green-400 p-2 rounded mt-2 text-sm">
{`wait(S) {
  S--;
  if (S < 0) block();
}`}
                    </pre>
                  </div>
                  <div className="bg-green-50 p-3 rounded border">
                    <h4 className="font-bold">signal(S) or V(S)</h4>
                    <p>Increment S; wake up a waiting process</p>
                    <pre className="bg-gray-800 text-green-400 p-2 rounded mt-2 text-sm">
{`signal(S) {
  S++;
  if (S <= 0) wakeup();
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Types */}
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Types:</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded border">
                    <h4 className="font-bold">1. Binary Semaphore (Mutex)</h4>
                    <p>Value: 0 or 1</p>
                    <p><strong>Used for:</strong> Mutual exclusion</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border">
                    <h4 className="font-bold">2. Counting Semaphore</h4>
                    <p>Value: ≥ 0</p>
                    <p><strong>Used for:</strong> Control access to limited resources</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Use Cases */}
            <div className="mt-6 bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-3">Example Use Cases:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Prevent race conditions</li>
                <li>Producer-Consumer problem</li>
                <li>Reader-Writer problem</li>
                <li>Bounded buffer synchronization</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Monitors */}
      {activeTab === "monitors" && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">D. Monitors</h2>

          <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
            <p className="text-lg mb-4">
              A <strong>monitor</strong> is a high-level synchronization construct that encapsulates 
              shared variables, procedures, and condition variables.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Properties */}
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Properties:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Automatically ensures <strong>mutual exclusion</strong></li>
                  <li>Provides <strong>condition variables</strong> for waiting and signaling</li>
                  <li>Easier and safer than semaphores</li>
                </ul>
              </div>

              {/* Operations */}
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Operations:</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded border">
                    <h4 className="font-bold">wait(cond)</h4>
                    <p>Process waits on a condition</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border">
                    <h4 className="font-bold">signal(cond)</h4>
                    <p>Wakes up a waiting process</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="mt-6 bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-3"> Advantages over Semaphores:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Easier to use correctly</li>
                <li>Less error-prone</li>
                <li>Automatic mutual exclusion</li>
                <li>Better abstraction</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Deadlocks */}
      {activeTab === "deadlocks" && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">E. Deadlocks</h2>

          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            {/* Definition */}
            <div className="bg-white p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">1. Definition</h3>
              <p className="text-lg">
                A <strong>deadlock</strong> occurs when two or more processes wait indefinitely 
                for resources held by each other.
              </p>
            </div>

            {/* Coffman Conditions */}
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">2. Coffman Conditions (Necessary for Deadlock)</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                  <h4 className="font-bold text-red-800 mb-2">1. Mutual Exclusion</h4>
                  <p>At least one resource must be non-shareable</p>
                </div>
                <div className="bg-orange-100 p-4 rounded-lg border border-orange-300">
                  <h4 className="font-bold text-orange-800 mb-2">2. Hold and Wait</h4>
                  <p>A process holds one resource while waiting for another</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                  <h4 className="font-bold text-yellow-800 mb-2">3. No Preemption</h4>
                  <p>A resource cannot be forcibly taken away</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h4 className="font-bold text-green-800 mb-2">4. Circular Wait</h4>
                  <p>A circular chain of processes exists, each waiting for a resource held by the next</p>
                </div>
              </div>

              {/* Deadlock Visualization */}
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-bold mb-4 text-center">🔄 Circular Wait Example</h4>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Circular diagram */}
                    <div className="w-64 h-64 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-red-600 font-bold">DEADLOCK</div>
                        <div className="text-sm text-gray-600">All processes blocked</div>
                      </div>
                    </div>
                    
                    {/* Process nodes */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        P1
                      </div>
                      <div className="text-xs text-center mt-1">Holds R1<br />Waits for R2</div>
                    </div>
                    <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        P2
                      </div>
                      <div className="text-xs text-center mt-1">Holds R2<br />Waits for R1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Handling Techniques */}
      {activeTab === "handling" && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">F. Deadlock Handling Techniques</h2>

          <div className="space-y-6">
            {/* Deadlock Prevention */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-3">1. Deadlock Prevention</h3>
              <p className="mb-4">Eliminate at least one Coffman condition:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border">
                  <h4 className="font-bold">Mutual Exclusion</h4>
                  <p className="text-sm">Make resources shareable if possible</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h4 className="font-bold">Hold and Wait</h4>
                  <p className="text-sm">Require all resources to be requested at once</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h4 className="font-bold">No Preemption</h4>
                  <p className="text-sm">Allow resource preemption</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h4 className="font-bold">Circular Wait</h4>
                  <p className="text-sm">Impose strict order on resource acquisition</p>
                </div>
              </div>
            </div>

            {/* Deadlock Avoidance */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">2. Deadlock Avoidance</h3>
              
              <div className="bg-white p-4 rounded-lg mb-4">
                <h4 className="font-bold text-lg mb-2">Banker's Algorithm</h4>
                <p className="mb-3">Checks whether granting a resource request keeps the system in a <strong>safe state</strong>.</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-100 p-3 rounded">
                    <h5 className="font-bold">Safe State</h5>
                    <p className="text-sm">There exists an execution order where all processes can complete without deadlock</p>
                  </div>
                  <div className="bg-red-100 p-3 rounded">
                    <h5 className="font-bold">Unsafe State</h5>
                    <p className="text-sm">Potential for deadlock exists</p>
                  </div>
                </div>
              </div>

              <p className="font-semibold">Idea: Only allocate resources if doing so doesn't lead to potential deadlock</p>
            </div>

            {/* Deadlock Detection & Recovery */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">3. Deadlock Detection</h3>
                <p className="mb-3">Allow deadlocks to occur, then detect them.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Use a <strong>Resource Allocation Graph</strong></li>
                  <li>Detect cycles → processes in cycle are deadlocked</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">4. Deadlock Recovery</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-bold">Terminate Processes</h4>
                    <p className="text-sm">Kill all or one process at a time</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-bold">Preempt Resources</h4>
                    <p className="text-sm">Take resources from some processes and reassign them</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center"> Key Takeaways</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ["Critical Section", "Protects shared resources to prevent conflicts"],
            ["Peterson & Bakery", "Software algorithms for mutual exclusion"],
            ["Semaphores", "Integer variables for synchronization"],
            ["Monitors", "High-level, safer synchronization construct"],
            ["Deadlocks", "System state where processes wait forever"],
            ["Banker's Algorithm", "Predictive method to avoid unsafe states"]
          ].map(([concept, desc], index) => (
            <div key={index} className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold">{concept}</h3>
              <p className="text-sm opacity-90">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}