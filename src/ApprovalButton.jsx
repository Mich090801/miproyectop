import React from "react";

const ApprovalButton = () => {
  return (
    <button className="flex justify-center items-center px-0 py-2 mt-5 rounded-xl shadow-sm cursor-pointer bg-sky-950 w-[888px] max-md:w-full max-sm:w-full">
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3.5"
      >
        <path
          d="M29 8.75L15 25.25L9 19.0625M9 25.25L3 19.0625M23 8.75L14.5 18.8047"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-2xl font-semibold text-white">Vo Bo</span>
    </button>
  );
};

export default ApprovalButton;
