import GbpContact from "@/components/sections/servicePages/gbpManagement/GbpContact";
import GbpFaqs from "@/components/sections/servicePages/gbpManagement/GbpFaqs";
import GbpFive from "@/components/sections/servicePages/gbpManagement/GbpFive";
import GbpFour from "@/components/sections/servicePages/gbpManagement/GbpFour";
import GbpHero from "@/components/sections/servicePages/gbpManagement/GbpHero";
import GbpSecond from "@/components/sections/servicePages/gbpManagement/GbpSecond";
import GbpThird from "@/components/sections/servicePages/gbpManagement/GbpThird";
import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import React from "react";

function page() {
  return (
    <>
      <GbpHero />
      <MarqueeService />
      <GbpSecond />
      <GbpThird />
      <GbpFour />
      <GbpFive />
      <GbpFaqs />
      <GbpContact />
    </>
  );
}

export default page;
