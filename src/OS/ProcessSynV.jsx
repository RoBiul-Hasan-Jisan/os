import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProcessSynV() {
  const [csProcess, setCsProcess] = useState(null);
  const [waitingQueue, setWaitingQueue] = useState([]);
  const [semaphore, setSemaphore] = useState(1);
  const [deadlock, setDeadlock] = useState(false);

  // Enter critical section
  const handleEnterCS = (pid) => {
    if (semaphore === 1) {
      setSemaphore(0);
      setCsProcess(pid);
      setWaitingQueue((prev) => prev.filter((p) => p !== pid));
    } else {
      if (!waitingQueue.includes(pid)) setWaitingQueue((prev) => [...prev, pid]);
    }
  };

  // Exit critical section
  const handleExitCS = () => {
    setSemaphore(1);
    setCsProcess(null);
    // Automatically let next process enter CS
    if (waitingQueue.length > 0) handleEnterCS(waitingQueue[0]);
  };

  // Trigger deadlock simulation
  const triggerDeadlock = () => {
    setDeadlock(true);
  };

  // Reset everything
  const resetAll = () => {
    setCsProcess(null);
    setWaitingQueue([]);
    setSemaphore(1);
    setDeadlock(false);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600 text-center">
         Process Synchronization & Deadlock Visualizer
      </h1>

      {/* Semaphore / Critical Section */}
      <div className="border rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Critical Section Simulation (Semaphore)</h2>
        <div className="flex gap-2 mb-4">
          {[1, 2, 3].map((pid) => (
            <button
              key={pid}
              onClick={() => handleEnterCS(pid)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Process {pid} enter CS
            </button>
          ))}
          <button
            onClick={handleExitCS}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Exit CS
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 border rounded-xl">
            <h3 className="font-bold">Semaphore</h3>
            <p className="text-2xl">{semaphore}</p>
          </div>

          <div className="p-4 border rounded-xl">
            <h3 className="font-bold">Critical Section</h3>
            {csProcess ? (
              <motion.div
                className="p-3 bg-green-400 text-white rounded-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                Process {csProcess} executing
              </motion.div>
            ) : (
              <p className="text-gray-500">Empty</p>
            )}
          </div>

          <div className="p-4 border rounded-xl">
            <h3 className="font-bold">Waiting Queue</h3>
            {waitingQueue.length > 0 ? (
              waitingQueue.map((p) => (
                <motion.div
                  key={p}
                  className="p-2 bg-yellow-300 rounded-md mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Process {p}
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500">No waiting process</p>
            )}
          </div>
        </div>
      </div>

      {/* Deadlock Visualization */}
      <div className="border rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Deadlock Visualization</h2>
        <div className="flex gap-2 mb-4">
          <button
            onClick={triggerDeadlock}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Trigger Deadlock
          </button>
          <button
            onClick={resetAll}
            className="bg-gray-500 text-white px-3 py-1 rounded"
          >
            Reset
          </button>
        </div>

        <div className="flex justify-center items-center gap-10 mt-6">
          <motion.div
            className={`w-32 h-32 flex items-center justify-center rounded-full border-4 text-lg font-bold ${
              deadlock ? "bg-red-400 text-white" : "bg-green-300"
            }`}
            animate={{ rotate: deadlock ? 360 : 0 }}
            transition={{ duration: 2, repeat: deadlock ? Infinity : 0 }}
          >
            P1
          </motion.div>

          <motion.div
            className={`w-32 h-32 flex items-center justify-center rounded-full border-4 text-lg font-bold ${
              deadlock ? "bg-red-400 text-white" : "bg-green-300"
            }`}
            animate={{ rotate: deadlock ? -360 : 0 }}
            transition={{ duration: 2, repeat: deadlock ? Infinity : 0 }}
          >
            P2
          </motion.div>
        </div>

        {deadlock && (
          <p className="mt-6 text-center text-red-500 font-semibold text-lg">
             Deadlock Occurred! Both processes are waiting for each other.
          </p>
        )}
      </div>
    </div>
  );
}
