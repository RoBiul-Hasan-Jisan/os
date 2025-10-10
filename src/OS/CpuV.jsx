import React, { useState, useEffect, useRef } from "react";

// CPU Scheduling Visualizer
// Single-file React component (Tailwind CSS assumed). Default export.
// Features:
// - Editable process table (PID, Arrival, Burst, Priority)
// - Algorithm selector: FCFS, SJF (non-preemptive), SRTF (preemptive SJF), Round Robin, Priority (preemptive)
// - Quantum input for RR
// - "Run" to compute schedule and render Gantt chart + metrics
// - Simple animations with inline CSS (no external libs required)

export default function CpuV() {
  const [processes, setProcesses] = useState([
    { pid: "P1", arrival: 0, burst: 5, priority: 2 },
    { pid: "P2", arrival: 1, burst: 3, priority: 1 },
    { pid: "P3", arrival: 2, burst: 8, priority: 3 },
    { pid: "P4", arrival: 3, burst: 6, priority: 4 },
  ]);

  const [algorithm, setAlgorithm] = useState("FCFS");
  const [quantum, setQuantum] = useState(2);
  const [gantt, setGantt] = useState([]);
  const [stats, setStats] = useState({});
  const [timelineScale, setTimelineScale] = useState(20); // px per time unit
  const containerRef = useRef(null);

  // Utility: deep copy processes
  const copyProcesses = () => processes.map(p => ({ ...p }));

  // Helper to compute stats given gantt and original processes
  function computeStats(ganttArr, procs) {
    // For each pid find first start and completion
    const comp = {};
    const firstStart = {};
    for (const seg of ganttArr) {
      if (firstStart[seg.pid] === undefined) firstStart[seg.pid] = seg.start;
      comp[seg.pid] = Math.max(comp[seg.pid] || 0, seg.end);
    }
    const res = procs.map(p => {
      const completion = comp[p.pid] ?? p.arrival + p.burst; // fallback
      const turnaround = completion - p.arrival;
      const waiting = turnaround - p.burst;
      const response = (firstStart[p.pid] ?? p.arrival) - p.arrival;
      return { pid: p.pid, arrival: p.arrival, burst: p.burst, completion, turnaround, waiting, response };
    });
    const avg = (key) => (res.reduce((s, r) => s + r[key], 0) / res.length).toFixed(2);
    return { table: res, averages: { waiting: avg('waiting'), turnaround: avg('turnaround'), response: avg('response') } };
  }

  // ---------- Scheduling algorithm implementations ----------

  // FCFS (non-preemptive)
  function fcfs(procList) {
    const q = [...procList].sort((a, b) => a.arrival - b.arrival || a.pid.localeCompare(b.pid));
    let time = 0;
    const gantt = [];
    for (const p of q) {
      time = Math.max(time, p.arrival);
      gantt.push({ pid: p.pid, start: time, end: time + p.burst });
      time += p.burst;
    }
    return gantt;
  }

  // SJF non-preemptive
  function sjf(procList) {
    const procs = procList.map(p => ({ ...p }));
    const n = procs.length;
    let time = 0;
    const gantt = [];
    const finished = new Set();
    while (finished.size < n) {
      const available = procs.filter(p => p.arrival <= time && !finished.has(p.pid));
      if (available.length === 0) {
        // jump to next arrival
        time = Math.min(...procs.filter(p => !finished.has(p.pid)).map(p => p.arrival));
        continue;
      }
      available.sort((a, b) => a.burst - b.burst || a.arrival - b.arrival);
      const p = available[0];
      gantt.push({ pid: p.pid, start: time, end: time + p.burst });
      time += p.burst;
      finished.add(p.pid);
    }
    return gantt;
  }

  // SRTF (preemptive SJF)
  function srtf(procList) {
    const procs = procList.map(p => ({ ...p, remaining: p.burst }));
    const n = procs.length;
    let time = 0;
    const gantt = [];
    while (procs.some(p => p.remaining > 0)) {
      const available = procs.filter(p => p.arrival <= time && p.remaining > 0);
      if (available.length === 0) {
        time = Math.min(...procs.filter(p => p.remaining > 0).map(p => p.arrival));
        continue;
      }
      available.sort((a, b) => a.remaining - b.remaining || a.arrival - b.arrival);
      const cur = available[0];
      // run for 1 unit (to allow preemption when new process arrives)
      const start = time;
      time += 1;
      cur.remaining -= 1;
      const end = time;
      // append or merge with previous segment if same pid and contiguous
      const last = gantt[gantt.length - 1];
      if (last && last.pid === cur.pid && last.end === start) last.end = end; else gantt.push({ pid: cur.pid, start, end });
    }
    return gantt;
  }

  // Round Robin
  function roundRobin(procList, q) {
    const procs = procList.map(p => ({ ...p, remaining: p.burst }));
    const queue = [];
    let time = 0;
    const gantt = [];
    const n = procs.length;

    // helper: add arrivals at current time
    function addArrivals(t) {
      procs.forEach(p => {
        if (p.arrival === t) queue.push(p);
      });
    }

    addArrivals(0);
    // if nothing at time 0, jump
    if (queue.length === 0) {
      const next = Math.min(...procs.map(p => p.arrival));
      time = next;
      addArrivals(time);
    }

    while (procs.some(p => p.remaining > 0)) {
      if (queue.length === 0) {
        // jump to next arrival
        const next = Math.min(...procs.filter(p => p.remaining > 0 && p.arrival > time).map(p => p.arrival));
        if (!isFinite(next)) break;
        time = next;
        addArrivals(time);
        continue;
      }
      const cur = queue.shift();
      if (cur.remaining <= 0) continue;
      const start = time;
      const run = Math.min(q, cur.remaining);
      time += run;
      cur.remaining -= run;
      const end = time;
      const last = gantt[gantt.length - 1];
      if (last && last.pid === cur.pid && last.end === start) last.end = end; else gantt.push({ pid: cur.pid, start, end });
      // add arrivals that occurred during this run
      for (let t = start + 1; t <= time; t++) addArrivals(t);
      if (cur.remaining > 0) queue.push(cur);
    }
    return gantt;
  }

  // Priority preemptive (lower number = higher priority)
  function priorityPreemptive(procList) {
    const procs = procList.map(p => ({ ...p, remaining: p.burst }));
    let time = 0;
    const gantt = [];
    while (procs.some(p => p.remaining > 0)) {
      const available = procs.filter(p => p.arrival <= time && p.remaining > 0);
      if (available.length === 0) {
        time = Math.min(...procs.filter(p => p.remaining > 0).map(p => p.arrival));
        continue;
      }
      available.sort((a, b) => a.priority - b.priority || a.arrival - b.arrival);
      const cur = available[0];
      const start = time;
      time += 1; // run for 1 time unit to allow preemption
      cur.remaining -= 1;
      const end = time;
      const last = gantt[gantt.length - 1];
      if (last && last.pid === cur.pid && last.end === start) last.end = end; else gantt.push({ pid: cur.pid, start, end });
    }
    return gantt;
  }

  // Main run function
  function runSchedule() {
    const procs = copyProcesses();
    // Validation: ensure unique PIDs
    const pidSet = new Set();
    for (const p of procs) {
      if (!p.pid) p.pid = `P${Math.random().toString(36).slice(2,5)}`;
      if (pidSet.has(p.pid)) {
        alert('Duplicate PID found. Please ensure each process has a unique PID.');
        return;
      }
      pidSet.add(p.pid);
      p.arrival = Number(p.arrival);
      p.burst = Math.max(0, Number(p.burst));
      p.priority = Number(p.priority);
    }

    let g = [];
    if (algorithm === 'FCFS') g = fcfs(procs);
    else if (algorithm === 'SJF') g = sjf(procs);
    else if (algorithm === 'SRTF') g = srtf(procs);
    else if (algorithm === 'RR') g = roundRobin(procs, Number(quantum));
    else if (algorithm === 'Priority') g = priorityPreemptive(procs);

    setGantt(g);
    setStats(computeStats(g, procs));
    // auto scale to fit
    const maxTime = g.reduce((m, s) => Math.max(m, s.end), 0) || Math.max(...procs.map(p => p.arrival + p.burst));
    const containerWidth = containerRef.current ? containerRef.current.clientWidth : 800;
    const scale = Math.max(12, Math.floor(containerWidth / Math.max(10, maxTime)));
    setTimelineScale(scale);
  }

  // UI helpers
  function updateProcess(index, key, value) {
    const ps = copyProcesses();
    ps[index][key] = value;
    setProcesses(ps);
  }

  function addProcess() {
    const id = `P${processes.length + 1}`;
    setProcesses([...processes, { pid: id, arrival: 0, burst: 1, priority: 1 }]);
  }

  function removeProcess(i) {
    const ps = copyProcesses();
    ps.splice(i, 1);
    setProcesses(ps);
  }

  // Color map for PIDs
  const colorFor = (pid) => {
    const hash = pid.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const colors = ["bg-blue-400","bg-green-400","bg-yellow-400","bg-red-400","bg-indigo-400","bg-pink-300","bg-emerald-400","bg-purple-400"];
    return colors[hash % colors.length];
  }

  // Small helper to format segments into display string
  function formatGanttLabel(seg) {
    return `${seg.pid} (${seg.end - seg.start})`;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold">CPU Scheduling Visualizer</h1>
      <p className="text-sm text-gray-600">Interactive visualizer showing Gantt chart and metrics for common CPU scheduling algorithms.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex gap-2 items-center">
            <label className="font-medium">Algorithm:</label>
            <select className="border rounded p-1" value={algorithm} onChange={e => setAlgorithm(e.target.value)}>
              <option>FCFS</option>
              <option>SJF</option>
              <option>SRTF</option>
              <option>RR</option>
              <option>Priority</option>
            </select>
            {algorithm === 'RR' && (
              <>
                <label className="ml-4">Quantum:</label>
                <input type="number" min={1} className="w-20 border rounded p-1" value={quantum} onChange={e => setQuantum(e.target.value)} />
              </>
            )}
            <button className="ml-auto bg-blue-600 text-white px-3 py-1 rounded" onClick={runSchedule}>Run</button>
            <button className="ml-2 border px-3 py-1 rounded" onClick={() => { setGantt([]); setStats({}); }}>Clear</button>
          </div>

          <div className="overflow-x-auto border rounded p-2">
            <table className="min-w-full text-sm">
              <thead className="text-left text-gray-600">
                <tr>
                  <th className="pr-4">PID</th>
                  <th className="pr-4">Arrival</th>
                  <th className="pr-4">Burst</th>
                  <th className="pr-4">Priority</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {processes.map((p, i) => (
                  <tr key={p.pid} className="align-top">
                    <td className="pr-4 py-2">
                      <input value={p.pid} onChange={e => updateProcess(i, 'pid', e.target.value)} className="border rounded p-1 w-24" />
                    </td>
                    <td className="pr-4 py-2">
                      <input type="number" value={p.arrival} onChange={e => updateProcess(i, 'arrival', Number(e.target.value))} className="border rounded p-1 w-20" />
                    </td>
                    <td className="pr-4 py-2">
                      <input type="number" min={0} value={p.burst} onChange={e => updateProcess(i, 'burst', Number(e.target.value))} className="border rounded p-1 w-20" />
                    </td>
                    <td className="pr-4 py-2">
                      <input type="number" value={p.priority} onChange={e => updateProcess(i, 'priority', Number(e.target.value))} className="border rounded p-1 w-20" />
                    </td>
                    <td className="py-2">
                      <button className="text-sm text-red-500" onClick={() => removeProcess(i)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3">
              <button className="border rounded px-3 py-1" onClick={addProcess}>Add Process</button>
              <button className="ml-2 border rounded px-3 py-1" onClick={() => setProcesses([
                { pid: 'P1', arrival: 0, burst: 5, priority: 2 },
                { pid: 'P2', arrival: 1, burst: 3, priority: 1 },
                { pid: 'P3', arrival: 2, burst: 8, priority: 3 },
                { pid: 'P4', arrival: 3, burst: 6, priority: 4 },
              ])}>Load Sample</button>
            </div>
          </div>

          {/* Gantt chart container */}
          <div className="mt-4 border rounded p-3">
            <h3 className="font-semibold mb-2">Gantt Chart</h3>
            <div ref={containerRef} className="w-full overflow-x-auto">
              <div className="relative min-h-[80px] p-2 bg-gray-50 border rounded">
                {/* Time ruler */}
                <div className="absolute left-2 top-0 h-6 flex items-end">
                  {/* render numbers from 0 to max time */}
                  {(() => {
                    const maxT = gantt.reduce((m, s) => Math.max(m, s.end), 0) || 10;
                    const ticks = [];
                    for (let t = 0; t <= maxT; t++) {
                      ticks.push(
                        <div key={t} style={{ width: timelineScale, textAlign: 'center' }} className="text-xs text-gray-500">{t}</div>
                      );
                    }
                    return <div className="flex ml-12">{ticks}</div>;
                  })()}
                </div>

                <div style={{ marginTop: 18 }} className="flex items-center h-14">
                  {/* Gantt bars */}
                  <div className="flex items-center" style={{ marginLeft: 48 }}>
                    {gantt.length === 0 && (
                      <div className="text-gray-500 text-sm">No schedule yet — click Run to generate.</div>
                    )}
                    {gantt.map((seg, idx) => {
                      const width = Math.max(2, (seg.end - seg.start) * timelineScale);
                      return (
                        <div key={idx} className={`mx-1 rounded shadow-sm text-white text-xs flex items-center justify-center ${colorFor(seg.pid)}`} style={{ width }} title={`${seg.pid}: ${seg.start} → ${seg.end}`}>
                          <div className="px-1">{formatGanttLabel(seg)}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* Legend */}
            <div className="mt-3 flex gap-2 flex-wrap">
              {processes.map(p => (
                <div key={p.pid} className="flex items-center gap-2 text-sm">
                  <div className={`${colorFor(p.pid)} w-4 h-4 rounded`}></div>
                  <div>{p.pid} (burst {p.burst}, arrival {p.arrival})</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="md:col-span-1 space-y-4">
          <div className="border rounded p-3">
            <h3 className="font-semibold">Metrics</h3>
            {stats.table ? (
              <div className="mt-2 text-sm">
                <table className="w-full text-left text-sm">
                  <thead className="text-gray-600">
                    <tr><th>PID</th><th>Arrival</th><th>Burst</th><th>Waiting</th><th>Turnaround</th><th>Response</th></tr>
                  </thead>
                  <tbody>
                    {stats.table.map(row => (
                      <tr key={row.pid} className="odd:bg-white even:bg-gray-50">
                        <td className="py-1">{row.pid}</td>
                        <td>{row.arrival}</td>
                        <td>{row.burst}</td>
                        <td>{row.waiting}</td>
                        <td>{row.turnaround}</td>
                        <td>{row.response}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-3 text-sm">
                  <div>Average waiting time: <b>{stats.averages.waiting}</b></div>
                  <div>Average turnaround time: <b>{stats.averages.turnaround}</b></div>
                  <div>Average response time: <b>{stats.averages.response}</b></div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500">No metrics yet. Run a schedule to see results.</div>
            )}

            <div className="mt-3 text-xs text-gray-600">
              Tip: Try different algorithms and compare the Gantt chart and average waiting/turnaround times to see how algorithm choice affects performance.
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="font-semibold">Quick Explainers</h3>
            <ul className="text-sm list-disc ml-5 mt-2 space-y-1">
              <li><b>FCFS</b>: Runs processes in arrival order (simple, can cause long waits).</li>
              <li><b>SJF</b>: Picks the job with smallest burst next (optimal average wait but needs knowledge of bursts).</li>
              <li><b>SRTF</b>: Preemptive SJF; switch when a shorter job arrives.</li>
              <li><b>RR</b>: Time-sliced; good for interactive systems. Tune quantum.</li>
              <li><b>Priority</b>: Runs highest priority first; can be preemptive. Use aging to prevent starvation.</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="text-xs text-gray-500">Built for teaching — modify processes and click Run to see how each algorithm schedules them.</div>
    </div>
  );
}
