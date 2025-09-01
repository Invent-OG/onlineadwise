import CardsScroll from "@/components/sections/servicePages/CardsScroll";
import ServiceCard from "@/components/sections/servicePages/ServiceCard";
import WhyChoose from "@/components/sections/servicePages/WhyChoose";
import React from "react";

function page() {
  return (
    <>
      <ServiceCard />
      <WhyChoose />
      <CardsScroll />
    </>
  );
}

export default page;
