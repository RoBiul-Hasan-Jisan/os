import React from "react";

const FileSystemsGuide = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600">File Systems</h1>

      {/* A. File Concepts */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">A. File Concepts</h2>
        <p><strong>File:</strong> Collection of related information stored on secondary storage.</p>
        
        <h3 className="font-semibold">Attributes of a File:</h3>
        <ul className="list-disc list-inside">
          <li>Name</li>
          <li>Type (text, binary, audio, etc.)</li>
          <li>Location on disk</li>
          <li>Size</li>
          <li>Protection/permissions</li>
          <li>Timestamps (creation, last access, modification)</li>
          <li>Ownership (user/group)</li>
        </ul>

        <h3 className="font-semibold">File Operations:</h3>
        <ul className="list-disc list-inside">
          <li>Create / Delete / Open / Close</li>
          <li>Read / Write / Append</li>
          <li>Rename / Seek / Truncate</li>
        </ul>

        <h3 className="font-semibold">File Types:</h3>
        <ul className="list-disc list-inside">
          <li>Regular files – contain user data (text, image, etc.)</li>
          <li>Directory files – contain list of file names and metadata</li>
          <li>Special files – represent devices (block/character)</li>
        </ul>
      </section>

      {/* B. File Access Methods */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">B. File Access Methods</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Sequential Access:</strong> Read/write data in order from beginning to end. 
            <br />Example: text files, tapes. Simple but slow for random access.
          </li>
          <li>
            <strong>Direct / Random Access:</strong> Jump directly to a specific location using address/offset. 
            <br />Example: databases, binary files.
          </li>
          <li>
            <strong>Indexed Access:</strong> Maintain an index table mapping logical blocks → physical blocks. 
            <br />Supports efficient search and retrieval.
          </li>
        </ul>
      </section>

      {/* C. Directory Structure */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">C. Directory Structure</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Single-Level Directory:</strong> All files in one directory. Problem: Name conflicts if many files.</li>
          <li><strong>Two-Level Directory:</strong> Separate directory for each user. Avoids name conflicts.</li>
          <li><strong>Tree-Structured Directory:</strong> Hierarchical directories/subdirectories. Example path: /home/user/file.txt</li>
          <li><strong>Acyclic Graph Directory:</strong> Supports shared files (links). No cycles allowed.</li>
          <li><strong>General Graph Directory:</strong> Supports arbitrary linking. May require cycle detection.</li>
        </ul>
      </section>

      {/* D. File System Mounting */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">D. File System Mounting</h2>
        <p>
          <strong>Mounting:</strong> Process of making a file system accessible at a certain point in the directory tree.
          <br />Example: Mount /dev/sdb1 at /mnt/data → /mnt/data now points to that filesystem.
        </p>
      </section>

      {/* E. File Sharing and Protection */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">E. File Sharing and Protection</h2>
        <p>
          <strong>File Sharing:</strong> Multiple users/processes access same file. Advantages: collaboration, efficiency. Risks: data inconsistency.
        </p>
        <h3 className="font-semibold">Protection Mechanisms:</h3>
        <ul className="list-disc list-inside">
          <li>Access Control Lists (ACLs)</li>
          <li>User/Group/Other Permissions – Unix-style permissions</li>
          <li>Encryption – secure file contents</li>
        </ul>
      </section>

      {/* F. File System Implementation */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">F. File System Implementation</h2>
        <h3 className="font-semibold">1. Allocation Methods:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Contiguous Allocation:</strong> Continuous blocks. Pros: Fast. Cons: External fragmentation.</li>
          <li><strong>Linked Allocation:</strong> File blocks linked via pointers. Pros: No external fragmentation. Cons: Sequential access only.</li>
          <li><strong>Indexed Allocation:</strong> Maintain index block storing all block pointers. Pros: Random access possible. Cons: Extra block required for index.</li>
        </ul>
      </section>

      {/* G. Free-Space Management */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">G. Free-Space Management</h2>
        <p>Goal: Track available disk blocks.</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Bit Vector / Bitmap:</strong> 1 bit per block → 0=free, 1=allocated. Easy sequential search.</li>
          <li><strong>Linked List of Free Blocks:</strong> Each free block points to next. Simple but slower sequential search.</li>
          <li><strong>Grouping:</strong> First free block stores addresses of next n free blocks. Reduces overhead.</li>
          <li><strong>Counting:</strong> Store starting block and number of contiguous free blocks. Efficient for large areas.</li>
        </ul>
      </section>

      {/* Key Takeaways */}
      <section className="bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-yellow-800"> Key Takeaways</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Files: Organized data units with attributes & operations.</li>
          <li>Access methods: Sequential (simple), Direct (random), Indexed (efficient).</li>
          <li>Directory structures: Single → Two-level → Tree → Graph (increasing flexibility).</li>
          <li>Mounting: Integrates filesystem into main directory tree.</li>
          <li>Protection: ACLs, Unix permissions, encryption.</li>
          <li>Allocation: Contiguous (fast), Linked (fragmentation-free), Indexed (random access).</li>
          <li>Free-space management: Bitmap, linked list, grouping, counting.</li>
        </ul>
      </section>
    </div>
  );
};

export default FileSystemsGuide;
