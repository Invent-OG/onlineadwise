import EmailContact from "@/components/sections/servicePages/emailSms/EmailContact";
import EmailFaq from "@/components/sections/servicePages/emailSms/EmailFaq";
import EmailFour from "@/components/sections/servicePages/emailSms/EmailFour";
import EmailMarquee from "@/components/sections/servicePages/emailSms/EmailMarquee";
import EmailSecond from "@/components/sections/servicePages/emailSms/EmailSecond";
import EmailSmsHero from "@/components/sections/servicePages/emailSms/EmailSmsHero";
import EmailSms from "@/components/sections/servicePages/emailSms/EmailSmsHero";
import EmailTestimonial from "@/components/sections/servicePages/emailSms/EmailTestimonial";
import EmailThird from "@/components/sections/servicePages/emailSms/EmailThird";
import MarqueeService from "@/components/sections/servicePages/marqueeService/MarqueeService";
import React from "react";

function page() {
  return (
    <>
      <EmailSmsHero />
      <MarqueeService />
      <EmailMarquee />
      <EmailSecond />
      <EmailThird />
      <EmailFour />
      <EmailTestimonial />
      <EmailFaq />
      <EmailContact />
    </>
  );
}

export default page;
