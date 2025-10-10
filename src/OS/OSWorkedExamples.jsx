import React from "react";

const OSWorkedExamples = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600">OS Worked Examples</h1>

      {/* 1. CPU Scheduling */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">1. CPU Scheduling</h2>
        <p>Processes:</p>
        <ul className="list-disc list-inside">
          <li>P1: AT=0, BT=8</li>
          <li>P2: AT=1, BT=4</li>
          <li>P3: AT=2, BT=9</li>
          <li>P4: AT=3, BT=5</li>
        </ul>

        <h3 className="font-semibold mt-2">Formulas</h3>
        <ul className="list-disc list-inside">
          <li>CT = Completion time</li>
          <li>TAT = CT − ArrivalTime</li>
          <li>WT = TAT − BurstTime</li>
          <li>Average = Sum / n</li>
        </ul>

        <h3 className="font-semibold mt-2">FCFS</h3>
        <p>Order: P1 → P2 → P3 → P4</p>
        <p>Avg WT = 8.75, Avg TAT = 15.25</p>

        <h3 className="font-semibold mt-2">SJF (non-preemptive)</h3>
        <p>Timeline: P1(0-8) → P2(8-12) → P4(12-17) → P3(17-26)</p>
        <p>Avg WT = 7.75, Avg TAT = 14.25</p>

        <h3 className="font-semibold mt-2">Round Robin (Quantum=2)</h3>
        <p>Execution slices simulated respecting arrival times.</p>
        <p>Avg WT = 12.75, Avg TAT = 19.25</p>
      </section>

      {/* 2. Page Replacement */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">2. Page Replacement</h2>
        <p>Reference string: 7,0,1,2,0,3,0,4,2,3,0,3,2</p>
        <p>Frames = 3</p>
        <ul className="list-disc list-inside">
          <li>FIFO → 10 page faults</li>
          <li>LRU → 9 page faults</li>
        </ul>
      </section>

      {/* 3. Disk Scheduling */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">3. Disk Scheduling</h2>
        <p>Requests: [98, 183, 37, 122, 14, 124, 65, 67]</p>
        <p>Initial head = 53, cylinder range 0–199</p>
        <ul className="list-disc list-inside">
          <li>FCFS: Total movement = 640</li>
          <li>SSTF: Total movement = 236</li>
          <li>SCAN (upward first): Total movement = 331</li>
        </ul>
        <p>SSTF minimizes movement; SCAN improves fairness; FCFS worst case.</p>
      </section>

      {/* 4. Short Theory Qs */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">4. Short Theory Qs</h2>

        <h3 className="font-semibold mt-2">Process vs Thread</h3>
        <p>
          Process: Own address space & resources; Thread: lightweight unit sharing process memory.
        </p>

        <h3 className="font-semibold mt-2">Paging vs Segmentation</h3>
        <p>
          Paging: Fixed-size pages, solves external fragmentation, internal fragmentation may exist.<br/>
          Segmentation: Variable-size segments matching program structure; external fragmentation possible.<br/>
          Segmentation with paging: combines benefits.
        </p>

        <h3 className="font-semibold mt-2">Preemptive vs Non-preemptive Scheduling</h3>
        <p>
          Preemptive: CPU can be taken away (RR, SRTF); better responsiveness.<br/>
          Non-preemptive: Runs to completion (FCFS, SJF NP); simpler but less responsive.
        </p>

        <h3 className="font-semibold mt-2">Internal vs External Fragmentation</h3>
        <p>
          Internal: wasted space inside allocated block.<br/>
          External: free memory fragmented into small unusable blocks.
        </p>

        <h3 className="font-semibold mt-2">Quick Formulas & Tips</h3>
        <ul className="list-disc list-inside">
          <li>TAT = Completion − Arrival</li>
          <li>WT = TAT − Burst</li>
          <li>Average = sum over processes / n</li>
          <li>Use timeline/Gantt chart for scheduling problems</li>
          <li>Simulate frames step-by-step for page replacement</li>
          <li>Disk scheduling: sum absolute head movements</li>
        </ul>
      </section>
    </div>
  );
};

export default OSWorkedExamples;
