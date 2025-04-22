import React from "react";
import ProjectInfo from "./ProjectInfo";
import ServiceOrderSection from "./ServiceOrderSection";

const ServiceForm = () => {
  return (
    <section className="box-border absolute p-5 rounded-3xl bg-white bg-opacity-70 h-[888px] left-[102px] top-[152px] w-[1717px] max-md:p-4">
      <ProjectInfo />
      <ServiceOrderSection />
    </section>
  );
};

export default ServiceForm;
