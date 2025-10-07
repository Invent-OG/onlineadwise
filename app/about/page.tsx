import AboutAwards from "@/components/sections/aboutpages/AboutAwards";
import AboutElements from "@/components/sections/aboutpages/AboutElements";
import AboutFaq from "@/components/sections/aboutpages/AboutFaq";
import AboutHero from "@/components/sections/aboutpages/AboutHero";
import AboutMarquee from "@/components/sections/aboutpages/AboutMarquee";
import AboutMarqueeSecond from "@/components/sections/aboutpages/AboutMarqueeSecond";
import AboutMissions from "@/components/sections/aboutpages/AboutMissions";
import AboutTeam from "@/components/sections/aboutpages/AboutTeam";
import AboutTimeLine from "@/components/sections/aboutpages/AboutTimeLine";
import React from "react";

function page() {
  return (
    <>
      <AboutHero />
      <AboutMarquee />
      <AboutMarqueeSecond />
      <AboutAwards />
      <AboutMissions />
      <AboutElements />
      <AboutTeam />
      <AboutTimeLine />
      <AboutFaq />
    </>
  );
}

export default page;
