import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import WebContact from "@/components/sections/servicePages/websiteLanding/WebContact";
import WebFaq from "@/components/sections/servicePages/websiteLanding/WebFaq";
import WebFour from "@/components/sections/servicePages/websiteLanding/WebFour";
import WeblandingHero from "@/components/sections/servicePages/websiteLanding/WeblandingHero";
import WebLandingMarquee from "@/components/sections/servicePages/websiteLanding/WebLandingMarquee";
import WebMarquee from "@/components/sections/servicePages/websiteLanding/WebMarquee";
import WebSecond from "@/components/sections/servicePages/websiteLanding/WebSecond";
import WebTestimonial from "@/components/sections/servicePages/websiteLanding/WebTestimonial";
import WebThird from "@/components/sections/servicePages/websiteLanding/WebThird";
import React from "react";

function page() {
  return (
    <>
      <WeblandingHero />
      <MarqueeService />
      <WebMarquee />
      <WebSecond />
      <WebThird />
      <WebFour />
      <WebTestimonial />
      <WebFaq />
      <WebContact />
    </>
  );
}

export default page;
