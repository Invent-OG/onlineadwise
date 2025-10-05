import CrmAutomationHero from "@/components/sections/servicePages/crmAutomation/CrmAutomationHero";
import CrmContact from "@/components/sections/servicePages/crmAutomation/CrmContact";
import CrmFaq from "@/components/sections/servicePages/crmAutomation/CrmFaq";
import CrmFour from "@/components/sections/servicePages/crmAutomation/CrmFour";
import CrmMarquee from "@/components/sections/servicePages/crmAutomation/CrmMarquee";
import CrmSecond from "@/components/sections/servicePages/crmAutomation/CrmSecond";
import CrmTestimonial from "@/components/sections/servicePages/crmAutomation/CrmTestimonial";
import CrmThird from "@/components/sections/servicePages/crmAutomation/CrmThird";
import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import React from "react";

function page() {
  return (
    <>
      <CrmAutomationHero />
      <MarqueeService />
      <CrmMarquee />
      <CrmSecond />
      <CrmThird />
      <CrmFour />
      <CrmTestimonial />
      <CrmFaq />
      <CrmContact />
    </>
  );
}

export default page;
