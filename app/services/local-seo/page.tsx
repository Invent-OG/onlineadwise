import LocalContact from "@/components/sections/servicePages/localSEO/LocalContact";
import LocalFaq from "@/components/sections/servicePages/localSEO/LocalFaq";
import LocalFour from "@/components/sections/servicePages/localSEO/LocalFour";
import LocalMarquee from "@/components/sections/servicePages/localSEO/LocalMarquee";
import LocalSecond from "@/components/sections/servicePages/localSEO/LocalSecond";
import LocalSeoHero from "@/components/sections/servicePages/localSEO/LocalSeoHero";
import LocalTestimonial from "@/components/sections/servicePages/localSEO/LocalTestimonial";
import LocalThird from "@/components/sections/servicePages/localSEO/LocalThird";
import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import React from "react";

function page() {
  return (
    <>
      <LocalSeoHero />
      <MarqueeService />
      <LocalMarquee />
      <LocalSecond />
      <LocalThird />
      <LocalFour />
      <LocalTestimonial />
      <LocalFaq />
      <LocalContact />
    </>
  );
}

export default page;
