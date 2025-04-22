import React from "react";

const AddMoreButton = () => {
  return (
    <button className="flex justify-center items-center px-16 py-2 mt-5 bg-blue-300 rounded-xl shadow-sm cursor-pointer">
      <svg
        width="35"
        height="34"
        viewBox="0 0 35 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2.5"
      >
        <path
          d="M30.25 17C30.25 9.96094 24.5391 4.25 17.5 4.25C10.4609 4.25 4.75 9.96094 4.75 17C4.75 24.0391 10.4609 29.75 17.5 29.75C24.5391 29.75 30.25 24.0391 30.25 17Z"
          stroke="black"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M17.5 11.6875V22.3125M22.8125 17H12.1875"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Agregar más</span>
    </button>
  );
};

export default AddMoreButton;
