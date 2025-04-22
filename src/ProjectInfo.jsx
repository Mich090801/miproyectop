import React from "react";

const ProjectInfo = () => {
  return (
    <div className="flex justify-between items-center mb-5 max-md:flex-col max-md:items-start max-sm:flex-col max-sm:items-start">
      <h2 className="text-4xl font-bold text-black">
        Proyecto de Investigación
      </h2>
      <h2 className="text-4xl font-bold text-black">SERVICIO</h2>
      <nav className="flex justify-center items-center bg-neutral-200 h-[30px] rounded-[100px] w-[650px] max-md:justify-around max-md:w-full max-sm:justify-around max-sm:w-full">
        <button className="text-xl h-[30px] text-neutral-400 w-[130px]">
          F2A
        </button>
        <button className="text-xl h-[30px] text-neutral-400 w-[130px]">
          F3
        </button>
        <button className="text-xl h-[30px] text-neutral-400 w-[130px]">
          F4
        </button>
        <button className="text-xl h-[30px] text-neutral-400 w-[130px]">
          F5
        </button>
        <button className="text-xl h-[30px] text-neutral-400 w-[130px]">
          F2B
        </button>
      </nav>
    </div>
  );
};

export default ProjectInfo;
