import React from "react";

export default function CPUScheduling() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center"> CPU Scheduling Algorithms</h1>

      {/* A. Scheduling Criteria */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">A. Scheduling Criteria</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>CPU Utilization:</strong> Keep CPU busy; aim  90%.</li>
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
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">B. Scheduling Algorithms</h2>

        {/* FCFS */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">1. FCFS (First Come First Serve)</h3>
          <p>Concept: Run processes in the order they arrive. Type: Non-preemptive.</p>
          <p>Advantages: Simple; easy to implement.</p>
          <p>Disadvantages: Poor for short jobs if a long job comes first (convoy effect).</p>
          <p><strong>Example:</strong></p>
          <table className="w-full border border-gray-300 text-left">
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
          <p>Execution Order: P1 → P2 → P3</p>
        </div>

        {/* SJF */}
        <div>
          <h3 className="text-xl font-semibold">2. SJF (Shortest Job First)</h3>
          <p>Pick the process with the shortest CPU burst next. Non-preemptive version.</p>
          <p>Advantages: Minimizes average waiting time.</p>
          <p>Disadvantages: Requires burst knowledge; long jobs may starve.</p>
        </div>

        {/* SRTF */}
        <div>
          <h3 className="text-xl font-semibold">3. SRTF (Shortest Remaining Time First)</h3>
          <p>Preemptive version of SJF. New shorter process can interrupt running process.</p>
          <p>Advantages: Better turnaround than FCFS.</p>
          <p>Disadvantages: More context switches; potential starvation.</p>
        </div>

        {/* Priority Scheduling */}
        <div>
          <h3 className="text-xl font-semibold">4. Priority Scheduling</h3>
          <p>Process with highest priority runs first.</p>
          <ul className="list-disc list-inside">
            <li>Non-preemptive: Current process continues until completion.</li>
            <li>Preemptive: Higher-priority process can interrupt running one.</li>
          </ul>
          <p>Disadvantages: Low-priority processes may starve (aging can solve this).</p>
        </div>

        {/* Round Robin */}
        <div>
          <h3 className="text-xl font-semibold">5. Round Robin (RR)</h3>
          <p>Each process gets a fixed time slice (quantum); if unfinished, goes back to the queue.</p>
          <p>Type: Preemptive. Advantages: Fair, good for time-sharing. Disadvantages: Context switch overhead.</p>
        </div>

        {/* Multilevel Queue */}
        <div>
          <h3 className="text-xl font-semibold">6. Multilevel Queue Scheduling</h3>
          <p>Multiple queues based on process type (system, interactive, batch); each queue has its own scheduling algorithm.</p>
          <p>Disadvantages: Inflexible; processes cannot move between queues.</p>
        </div>

        {/* Multilevel Feedback Queue */}
        <div>
          <h3 className="text-xl font-semibold">7. Multilevel Feedback Queue Scheduling</h3>
          <p>Like multilevel queue, but processes can move between queues based on behavior.</p>
          <p>Advantages: Dynamic, reduces starvation. Disadvantages: Complex to implement.</p>
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
              ["FCFS", "Simple", "No", "Easy", "Convoy effect, poor average WT"],
              ["SJF", "Optimal (for TAT)", "Optional", "Minimizes WT", "Needs burst knowledge, may starve"],
              ["SRTF", "Optimal", "Yes", "Minimizes TAT better", "Starvation, frequent context switch"],
              ["Priority", "Flexible", "Optional", "Prioritizes important tasks", "Starvation possible"],
              ["RR", "Fair", "Yes", "Good for time-sharing", "Overhead, quantum tuning"],
              ["Multilevel Queue", "Structured", "Depends", "Classifies processes", "Inflexible"],
              ["Multilevel Feedback Queue", "Adaptive", "Yes", "Dynamic, reduces starvation", "Complex"]
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
      <section className="space-y-2">
        <h2 className="text-2xl font-bold"> Key Takeaways</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Preemptive scheduling can interrupt running processes; non-preemptive cannot.</li>
          <li>Trade-offs exist between CPU utilization, turnaround time, waiting time, and fairness.</li>
          <li>Multilevel feedback queue is one of the most efficient algorithms for general-purpose OS.</li>
        </ul>
      </section>
    </div>
  );
}
