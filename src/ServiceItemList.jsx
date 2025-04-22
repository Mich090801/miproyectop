import React from "react";

const ServiceItemList = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex mb-4 w-full gap-4">
        <input
          type="text"
          placeholder="Descripción"
          className="flex-1 px-3 py-3.5 text-2xl text-black bg-white rounded-xl shadow-sm"
        />
        <input
          type="text"
          placeholder="Material"
          className="flex-1 px-3 py-3.5 text-2xl text-black bg-white rounded-xl shadow-sm"
        />
        <input
          type="text"
          placeholder="Cantidad"
          className="flex-1 px-3 py-3.5 text-2xl text-black bg-white rounded-xl shadow-sm"
        />
        <input
          type="text"
          placeholder="Observación"
          className="flex-1 px-3 py-3.5 text-2xl text-black bg-white rounded-xl shadow-sm"
        />
      </div>
      <div className="flex mb-4 w-full gap-4">
        <input
          type="text"
          placeholder="Descripción"
          className="flex-1 px-3 py-3.5 text-2xl text-black bg-white rounded-xl shadow-sm"
        />
        <input
          type="text"
          placeholder="Material"
          className="flex-1 px-3 py-3.5 text-2xl text-black bg-white rounded-xl shadow-sm"
        />
        <input
          type="text"
          placeholder="Cantidad"
          className="flex-1 px-3 py-3.5 text-2xl text-black bg-white rounded-xl shadow-sm"
        />
        <input
          type="text"
          placeholder="Observaciones"
          className="flex-1 px-3 py-3.5 text-2xl text-black bg-white rounded-xl shadow-sm"
        />
      </div>
    </div>
  );
};

export default ServiceItemList;
