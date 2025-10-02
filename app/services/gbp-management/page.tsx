import MarqueeText from "@/components/sections/MarqueeText";
import GbpContact from "@/components/sections/servicePages/gbpManagement/GbpContact";
import GbpFaqs from "@/components/sections/servicePages/gbpManagement/GbpFaqs";
import GbpFour from "@/components/sections/servicePages/gbpManagement/GbpFour";
import GbpHero from "@/components/sections/servicePages/gbpManagement/GbpHero";
import GbpMarquee from "@/components/sections/servicePages/gbpManagement/GbpMarquee";
import GbpSecond from "@/components/sections/servicePages/gbpManagement/GbpSecond";
import GbpThird from "@/components/sections/servicePages/gbpManagement/GbpThird";
import TestimonialGbp from "@/components/sections/servicePages/gbpManagement/TestimonialGbp";
import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import React from "react";

function page() {
  return (
    <>
      <GbpHero />
      <MarqueeService />
      <GbpMarquee />
      <GbpSecond />
      <GbpThird />
      <GbpFour />
      {/* <GbpFive /> */}
      <TestimonialGbp />
      <GbpFaqs />
      <GbpContact />
    </>
  );
}

export default page;
