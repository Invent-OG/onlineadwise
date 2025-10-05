import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import PaidAdsHero from "@/components/sections/servicePages/paidAds/PaidAdsHero";
import PaidContact from "@/components/sections/servicePages/paidAds/PaidContact";
import PaidFaq from "@/components/sections/servicePages/paidAds/PaidFaq";
import PaidFour from "@/components/sections/servicePages/paidAds/PaidFour";
import PaidMarquee from "@/components/sections/servicePages/paidAds/PaidMarquee";
import PaidSecond from "@/components/sections/servicePages/paidAds/PaidSecond";
import PaidTestimonial from "@/components/sections/servicePages/paidAds/PaidTestimonial";
import PaidThird from "@/components/sections/servicePages/paidAds/PaidThird";
import React from "react";

function page() {
  return (
    <>
      <PaidAdsHero />
      <MarqueeService />
      <PaidMarquee />
      <PaidSecond />
      <PaidThird />
      <PaidFour />
      <PaidTestimonial />
      <PaidFaq />
      <PaidContact />
    </>
  );
}

export default page;
