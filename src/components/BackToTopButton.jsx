// components/BackToTopButton.jsx
import React from "react";

const BackToTopButton = () => {
  return (
    <div className="flex justify-center mb-6">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition flex items-center justify-center"
        aria-label="برگشت به بالا"
      >
        {/* Up arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default BackToTopButton;
