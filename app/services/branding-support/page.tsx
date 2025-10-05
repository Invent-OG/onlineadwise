import BrandingSupportHero from "@/components/sections/servicePages/brandingSupport/BrandingSupportHero";
import SupportContact from "@/components/sections/servicePages/brandingSupport/SupportContact";
import SupportFaq from "@/components/sections/servicePages/brandingSupport/SupportFaq";
import SupportFour from "@/components/sections/servicePages/brandingSupport/SupportFour";
import SupportMarquee from "@/components/sections/servicePages/brandingSupport/SupportMarquee";
import SupportSecond from "@/components/sections/servicePages/brandingSupport/SupportSecond";
import SupportTestimonial from "@/components/sections/servicePages/brandingSupport/SupportTestimonial";
import SupportThird from "@/components/sections/servicePages/brandingSupport/SupportThird";
import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import React from "react";

function page() {
  return (
    <>
      <BrandingSupportHero />
      <MarqueeService />
      <SupportMarquee />
      <SupportSecond />
      <SupportThird />
      <SupportFour />
      <SupportTestimonial />
      <SupportFaq />
      <SupportContact />
    </>
  );
}

export default page;
