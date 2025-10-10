import React from "react";

export default function CPUScheduling() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center">CPU Scheduling Algorithms</h1>

      {/* A. Scheduling Criteria */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">A. Scheduling Criteria</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>CPU Utilization:</strong> Keep CPU busy; aim for 90%.</li>
          <li><strong>Throughput:</strong> Number of processes completed per unit time.</li>
          <li><strong>Turnaround Time (TAT):</strong> Total time from arrival to completion.
            <pre className="bg-gray-100 p-2 rounded font-mono">TAT = Completion Time − Arrival Time</pre>
          </li>
          <li><strong>Waiting Time (WT):</strong> Time spent in the ready queue.
            <pre className="bg-gray-100 p-2 rounded font-mono">WT = Turnaround Time − Burst Time</pre>
          </li>
          <li><strong>Response Time:</strong> Time from request submission to first response.</li>
          <li><strong>Fairness:</strong> All processes get CPU time; avoid starvation.</li>
        </ul>
      </section>

      {/* B. Scheduling Algorithms */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">B. Scheduling Algorithms</h2>

        {/* FCFS */}
        <div className="space-y-2 p-4 border rounded-lg bg-blue-50">
          <h3 className="text-xl font-semibold">1. FCFS (First Come First Serve)</h3>
          <p><strong>Concept:</strong> Run processes in the order they arrive. Like a cafeteria line.</p>
          <p><strong>Type:</strong> Non-preemptive</p>
          <p><strong>Advantages:</strong> Simple; easy to implement</p>
          <p><strong>Disadvantages:</strong> Poor for short jobs if long job comes first (convoy effect)</p>
          <div className="mt-3">
            <p><strong>Example:</strong></p>
            <table className="w-1/2 border border-gray-300 text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Process</th>
                  <th className="border p-2">Burst Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["P1", "5"],
                  ["P2", "3"],
                  ["P3", "8"]
                ].map(([p, bt], i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-50">
                    <td className="border p-2 font-medium">{p}</td>
                    <td className="border p-2">{bt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2"><strong>Execution Order:</strong> P1 → P2 → P3</p>
            <p><strong>Average Waiting Time:</strong> (0 + 5 + 8)/3 = 4.33 ms</p>
          </div>
        </div>

        {/* SJF */}
        <div className="space-y-2 p-4 border rounded-lg bg-green-50">
          <h3 className="text-xl font-semibold">2. SJF (Shortest Job First)</h3>
          <p><strong>Concept:</strong> Pick the process with shortest CPU burst next</p>
          <p><strong>Type:</strong> Non-preemptive version</p>
          <p><strong>Advantages:</strong> Minimizes average waiting time</p>
          <p><strong>Disadvantages:</strong> Requires burst knowledge; long jobs may starve</p>
          <div className="mt-3">
            <p><strong>Example (Same processes):</strong></p>
            <p><strong>Execution Order:</strong> P2(3) → P1(5) → P3(8)</p>
            <p><strong>Average Waiting Time:</strong> (3 + 0 + 8)/3 = 3.67 ms</p>
          </div>
        </div>

        {/* SRTF */}
        <div className="space-y-2 p-4 border rounded-lg bg-purple-50">
          <h3 className="text-xl font-semibold">3. SRTF (Shortest Remaining Time First)</h3>
          <p><strong>Concept:</strong> Preemptive version of SJF. New shorter process can interrupt running process</p>
          <p><strong>Type:</strong> Preemptive</p>
          <p><strong>Advantages:</strong> Better response time than SJF</p>
          <p><strong>Disadvantages:</strong> More context switches; potential starvation</p>
          <div className="mt-3">
            <p><strong>How it works:</strong> Always run the job closest to completion</p>
          </div>
        </div>

        {/* Priority Scheduling */}
        <div className="space-y-2 p-4 border rounded-lg bg-yellow-50">
          <h3 className="text-xl font-semibold">4. Priority Scheduling</h3>
          <p><strong>Concept:</strong> Process with highest priority runs first (1 = highest)</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Non-preemptive:</strong> Current process continues until completion</li>
            <li><strong>Preemptive:</strong> Higher-priority process can interrupt running one</li>
          </ul>
          <p><strong>Disadvantages:</strong> Low-priority processes may starve</p>
          <p><strong>Solution:</strong> Aging - gradually increase priority of waiting processes</p>
          <div className="mt-3">
            <p><strong>Example:</strong></p>
            <table className="w-2/3 border border-gray-300 text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Process</th>
                  <th className="border p-2">Burst Time</th>
                  <th className="border p-2">Priority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["P1", "10", "3"],
                  ["P2", "1", "1"],
                  ["P3", "2", "4"],
                  ["P4", "1", "5"],
                  ["P5", "5", "2"]
                ].map(([p, bt, pr], i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-50">
                    <td className="border p-2 font-medium">{p}</td>
                    <td className="border p-2">{bt}</td>
                    <td className="border p-2">{pr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2"><strong>Execution Order:</strong> P2(1) → P5(5) → P1(10) → P3(2) → P4(1)</p>
          </div>
        </div>

        {/* Round Robin */}
        <div className="space-y-2 p-4 border rounded-lg bg-red-50">
          <h3 className="text-xl font-semibold">5. Round Robin (RR)</h3>
          <p><strong>Concept:</strong> Each process gets fixed time slice (quantum); if unfinished, goes back to queue</p>
          <p><strong>Type:</strong> Preemptive</p>
          <p><strong>Advantages:</strong> Fair, good for time-sharing systems</p>
          <p><strong>Disadvantages:</strong> Context switch overhead; performance depends on quantum size</p>
          <div className="mt-3">
            <p><strong>Example:</strong> Processes P1(5), P2(3), P3(8) with quantum = 4 ms</p>
            <p><strong>Execution:</strong> P1(4) → P2(3) → P3(4) → P1(1) → P3(4)</p>
            <p><strong>Key Point:</strong> No process waits more than (n-1) × quantum time units</p>
          </div>
        </div>

        {/* Multilevel Queue */}
        <div className="space-y-2 p-4 border rounded-lg bg-indigo-50">
          <h3 className="text-xl font-semibold">6. Multilevel Queue Scheduling</h3>
          <p><strong>Concept:</strong> Multiple queues based on process type</p>
          <div className="ml-4">
            <p><strong>• System Processes:</strong> Highest priority, Round Robin</p>
            <p><strong>• Interactive Processes:</strong> Medium priority, Round Robin</p>
            <p><strong>• Batch Processes:</strong> Lowest priority, FCFS</p>
          </div>
          <p><strong>Disadvantages:</strong> Inflexible; processes cannot move between queues</p>
        </div>

        {/* Multilevel Feedback Queue */}
        <div className="space-y-2 p-4 border rounded-lg bg-pink-50">
          <h3 className="text-xl font-semibold">7. Multilevel Feedback Queue Scheduling</h3>
          <p><strong>Concept:</strong> Like multilevel queue, but processes can move between queues</p>
          <p><strong>How it works:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>If process uses full time slice → CPU-bound → Move DOWN to lower priority</li>
            <li>If process blocks for I/O → Interactive → Move UP to higher priority</li>
          </ul>
          <p><strong>Advantages:</strong> Dynamic, reduces starvation, adapts to process behavior</p>
          <p><strong>Disadvantages:</strong> Complex to implement</p>
          <p><strong>Used in:</strong> Windows, Linux, macOS</p>
        </div>
      </section>

      {/* C. Comparison Table */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">C. Comparison of Algorithms</h2>
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Algorithm</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Preemptive?</th>
              <th className="border p-2">Advantages</th>
              <th className="border p-2">Disadvantages</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["FCFS", "Simple", "No", "Easy, fair", "Convoy effect, poor WT"],
              ["SJF", "Optimal WT", "Optional", "Minimizes waiting time", "Needs burst knowledge"],
              ["SRTF", "Optimal TAT", "Yes", "Best turnaround time", "Starvation, overhead"],
              ["Priority", "Flexible", "Optional", "Important tasks first", "Starvation possible"],
              ["RR", "Fair", "Yes", "Good response time", "Quantum tuning critical"],
              ["Multilevel Queue", "Structured", "Depends", "Process classification", "Inflexible"],
              ["Multilevel Feedback", "Adaptive", "Yes", "Self-optimizing, fair", "Complex implementation"]
            ].map(([algo, type, preemptive, adv, disadv], i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 font-medium">{algo}</td>
                <td className="border p-2">{type}</td>
                <td className="border p-2">{preemptive}</td>
                <td className="border p-2">{adv}</td>
                <td className="border p-2">{disadv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Key Takeaways */}
      <section className="space-y-2 p-4 border rounded-lg bg-gray-100">
        <h2 className="text-2xl font-bold">Key Takeaways</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Preemptive</strong> scheduling can interrupt running processes; <strong>non-preemptive</strong> cannot</li>
          <li><strong>SJF</strong> gives minimum average waiting time but needs future knowledge</li>
          <li><strong>Round Robin</strong> provides fairness and good response time for interactive systems</li>
          <li><strong>Multilevel Feedback Queue</strong> is most sophisticated and used in modern OS</li>
          <li>All algorithms involve <strong>trade-offs</strong> between CPU utilization, turnaround time, waiting time, and fairness</li>
        </ul>
      </section>
    </div>
  );
}