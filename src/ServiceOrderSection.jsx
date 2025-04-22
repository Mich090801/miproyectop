import React from "react";
import ServiceItemList from "./ServiceItemList";
import AddMoreButton from "./AddMoreButton";
import ApprovalButton from "./ApprovalButton";

const ServiceOrderSection = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="mb-5 text-2xl font-bold text-black uppercase bg-blue-300 h-[35px] rounded-[100px] w-[990px] max-md:w-full max-sm:w-full text-center leading-[35px]">
        ORDEN DE SERVICIO
      </h3>

      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col mb-4 w-full">
          <label className="mb-1.5 text-2xl text-black">Nombre del proyecto</label>
          <input
            type="text"
            placeholder="Nombre del proyecto"
            className="px-3 py-3.5 w-full text-2xl bg-white rounded-xl shadow-sm text-neutral-400"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label className="mb-1.5 text-2xl text-black">Número de proyecto</label>
          <input
            type="text"
            placeholder="Número de proyecto"
            className="px-3 py-3.5 w-full text-2xl bg-white rounded-xl shadow-sm text-neutral-400"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label className="mb-1.5 text-2xl text-black">Nombre del proveedor</label>
          <input
            type="text"
            placeholder="Nombre del proveedor"
            className="px-3 py-3.5 w-full text-2xl bg-white rounded-xl shadow-sm text-neutral-400"
          />
        </div>

        <h4 className="mb-2.5 w-full text-2xl text-black">
          Datos de la orden de servicio
        </h4>

        <ServiceItemList />
        <AddMoreButton />
        <ApprovalButton />
      </div>
    </section>
  );
};

export default ServiceOrderSection;
