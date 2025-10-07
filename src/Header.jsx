import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 text-2xl font-bold fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center">
        <a
          href="https://craft-byte-hq.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-blue-300 transition-colors duration-200"
        >
          CraftByteHQ
        </a>
      </div>
    </header>
  );
};

export default Header;
