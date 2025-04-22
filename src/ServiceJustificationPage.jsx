import React from "react";
import BackButton from "./BackButton";
import ServiceHeader from "./ServiceHeader";
import ServiceForm from "./ServiceForm";

const ServiceJustificationPage = () => {
  return (
    <main className="relative mx-auto w-full h-[1080px] max-w-[1920px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/882254a4ac705ac9dba8efdd910d6d966b4c59b8?placeholderIfAbsent=true"
        alt="Background"
        className="absolute size-full z-[-1]"
      />
      <BackButton />
      <ServiceHeader />
      <ServiceForm />
    </main>
  );
};
 
export default ServiceJustificationPage;
