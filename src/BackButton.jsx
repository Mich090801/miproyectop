import React from "react";

const BackButton = () => {
  return (
    <button className="absolute left-[37px] top-[58px]" aria-label="Go back">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_556_3084)">
          <circle cx="25" cy="25" r="25" fill="#02457A" />
          <path
            d="M24.2302 34L15 25L24.2302 16M16.2826 25H35"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_556_3084">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default BackButton;
