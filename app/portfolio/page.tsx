import PortFolioContent from "@/components/sections/portfolioPages/PortFolioContent";
import PortFolioHero from "@/components/sections/portfolioPages/PortFolioHero";
import PortFolioSecond from "@/components/sections/portfolioPages/PortFolioSecond";
import React from "react";

function page() {
  return (
    <>
      <PortFolioHero />
      {/* <PortFolioContent /> */}
      <PortFolioSecond />
    </>
  );
}

export default page;
