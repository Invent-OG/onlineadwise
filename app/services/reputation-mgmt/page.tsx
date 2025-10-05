import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import RepContact from "@/components/sections/servicePages/reputationmgmt/RepContact";
import RepFaq from "@/components/sections/servicePages/reputationmgmt/RepFaq";
import RepFour from "@/components/sections/servicePages/reputationmgmt/RepFour";
import RepHero from "@/components/sections/servicePages/reputationmgmt/RepHero";
import RepMarquee from "@/components/sections/servicePages/reputationmgmt/RepMarquee";
import RepSecond from "@/components/sections/servicePages/reputationmgmt/RepSecond";
import RepTestimonial from "@/components/sections/servicePages/reputationmgmt/RepTestimonial";
import RepThird from "@/components/sections/servicePages/reputationmgmt/RepThird";
import React from "react";

function page() {
  return (
    <>
      <RepHero />
      <MarqueeService />
      <RepMarquee />
      <RepSecond />
      <RepThird />
      <RepFour />
      <RepTestimonial />
      <RepFaq />
      <RepContact />
    </>
  );
}

export default page;
