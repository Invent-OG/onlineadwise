"use client";
import React, { useEffect, useRef } from "react";

function GbpFive() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      // Parallax scroll effect
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);
          gsap.to(bgRef.current, {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: bgRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-Screen Parallax Grid Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 text-center">
          GBP Marketing
        </h2>
        <div className="space-y-6 text-black text-base md:text-lg leading-relaxed">
          <p>
            If you’re here we think that you likely understand how important
            proper Google Business Profile management can be for your business.
            In high-paying niches the difference between the 4th spot in a map
            pack and the 3rd can potentially result in the difference of tens of
            thousands of dollars each month. We understand this and want to
            offer GBP marketing services that move the needle for you and your
            business.
          </p>
          <p>
            Unlike many other digital marketing companies out there, we have a
            strict focus on GBP optimization and rankings. We know what it takes
            to rank a Google My Business listing high, and we can do it at an
            affordable price that won’t break the bank for your business.
          </p>
          <p>
            A highly optimized Google Business Profile is essential for local
            businesses seeking to enhance their online presence and connect with
            potential customers in their area. When users search for services or
            products in their vicinity, Google prioritizes local results, often
            displaying them prominently on the search engine results page. This
            is especially crucial for small businesses that rely on local
            customers to keep them in business.
          </p>
          <p>
            Moreover, Google Business Profiles provide essential information
            about a business, such as its location, hours of operation, contact
            details, and customer reviews. This information is vital for
            consumers who want to make informed decisions quickly. Customer
            reviews play a significant role in influencing consumer behavior.
            All reviews good or bad, should be responded to promptly.
          </p>
          <p>
            Another critical feature of GBP is the ability to post updates,
            offers, and events directly on your profile. This functionality
            allows businesses to communicate timely information to their
            audience, such as special promotions, new product launches, or
            upcoming events. By keeping your profile active and engaging, you
            can attract more attention and encourage customers to take action,
            whether that means visiting your website, calling your business, or
            stopping by your location.
          </p>
          <p>
            In addition to reviews and posts another critical factor is local
            citations and link building. Local citations are online mentions of
            a business’s name, address, and phone number (NAP) across various
            websites, directories, and platforms. These citations can appear on
            local business directories, social media platforms, review sites,
            and even blogs. Local citations play a crucial role in local SEO and
            are particularly important for businesses looking to enhance their
            visibility in search engine results, especially on Google.
          </p>
          <p>
            Another thing that can be done to help bolster your online
            reputation is to add a website to your GBP. A website tells both
            Google and your potential customers that you’re a more legitimate
            and reputable business. Additionally, you can link both to and from
            your website to your GBP. If done right, you’ll rank in the top 3 of
            the Google map pack as well as near the top in the actual search
            engine results. We offer affordable web design services to help you
            get a site created.
          </p>
          <p>
            Lastly, Google Business Profiles offer valuable insights and
            analytics that can help businesses understand their audience better.
            By tracking how customers find and interact with your profile, you
            can gain insights into their preferences and behaviors. This data
            can inform your marketing strategies, helping you tailor your
            approach to better meet the needs of your target audience. In an
            increasingly competitive landscape, leveraging these insights can
            give local businesses a significant advantage in attracting and
            retaining customers.
          </p>
          <p>
            If you’d like to know more about optimizing your profile, or if
            you’d like to try out GBP management services please feel free to
            contact us or place an order today!
          </p>
        </div>
      </div>
    </section>
  );
}

export default GbpFive;
