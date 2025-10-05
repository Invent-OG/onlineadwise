import AnalyticsContact from "@/components/sections/servicePages/analytics/AnalyticsContact";
import AnalyticsFaq from "@/components/sections/servicePages/analytics/AnalyticsFaq";
import AnalyticsFour from "@/components/sections/servicePages/analytics/AnalyticsFour";
import AnalyticsHero from "@/components/sections/servicePages/analytics/AnalyticsHero";
import AnalyticsMarquee from "@/components/sections/servicePages/analytics/AnalyticsMarquee";
import AnalyticsSecond from "@/components/sections/servicePages/analytics/AnalyticsSecond";
import AnalyticsTestimonial from "@/components/sections/servicePages/analytics/AnalyticsTestimonial";
import AnalyticsThird from "@/components/sections/servicePages/analytics/AnalyticsThird";
import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import React from "react";

function page() {
  return (
    <>
      <AnalyticsHero />
      <MarqueeService />
      <AnalyticsMarquee />
      <AnalyticsSecond />
      <AnalyticsThird />
      <AnalyticsFour />
      <AnalyticsTestimonial />
      <AnalyticsFaq />
      <AnalyticsContact />
    </>
  );
}

export default page;
