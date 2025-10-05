import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import PaidAdsHero from "@/components/sections/servicePages/paidAds/PaidAdsHero";
import PaidContact from "@/components/sections/servicePages/paidAds/PaidContact";
import PaidFaq from "@/components/sections/servicePages/paidAds/PaidFaq";
import PaidFour from "@/components/sections/servicePages/paidAds/PaidFour";
import PaidMarquee from "@/components/sections/servicePages/paidAds/PaidMarquee";
import PaidSecond from "@/components/sections/servicePages/paidAds/PaidSecond";
import PaidTestimonial from "@/components/sections/servicePages/paidAds/PaidTestimonial";
import PaidThird from "@/components/sections/servicePages/paidAds/PaidThird";
import SocialContact from "@/components/sections/servicePages/socialMedia/SocialContact";
import SocialFaq from "@/components/sections/servicePages/socialMedia/SocialFaq";
import SocialFour from "@/components/sections/servicePages/socialMedia/SocialFour";
import SocialMediaHero from "@/components/sections/servicePages/socialMedia/SocialMediaHero";
import SocialSecond from "@/components/sections/servicePages/socialMedia/SocialSecond";
import SocialTestimonial from "@/components/sections/servicePages/socialMedia/SocialTestimonial";
import SocialThird from "@/components/sections/servicePages/socialMedia/SocialThird";
import React from "react";

function page() {
  return (
    <>
      <SocialMediaHero />
      <MarqueeService />
      <PaidMarquee />
      <SocialSecond />
      <SocialThird />
      <SocialFour />
      <SocialTestimonial />
      <SocialFaq />
      <SocialContact />
    </>
  );
}

export default page;
