"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { Plus, Minus, Star } from "lucide-react"; // Star icon as example

const faqs = [
  {
    question: "Why does my law firm need a professional website?",
    answer:
      "Your website is often the first impression potential clients have of your firm. A professional, well-designed website builds trust, communicates credibility, and makes it easy for clients to contact you.",
  },
  {
    question: "What makes a landing page effective?",
    answer:
      "An effective landing page is focused on one clear goal—driving visitors to take action. This could be calling your firm, filling out a consultation form, or starting a live chat. Strong design, compelling content, and clear calls-to-action make the difference.",
  },
  {
    question: "How can my website generate more leads?",
    answer:
      "By combining persuasive content, optimized layouts, fast load times, and SEO best practices, your website can attract more qualified visitors and convert them into paying clients.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for mobile devices, ensuring your potential clients have a seamless experience whether they visit on desktop, tablet, or phone.",
  },
  {
    question: "How important is website speed for conversions?",
    answer:
      "Extremely important. A slow site frustrates users and increases bounce rates. A fast-loading site keeps visitors engaged, improves SEO, and increases the likelihood of generating new leads.",
  },
  {
    question: "Can I track the performance of my website?",
    answer:
      "Absolutely. We integrate analytics and tracking tools to monitor calls, form submissions, and user behavior so you can see exactly how your site is performing.",
  },
  {
    question: "How long does it take to launch a website?",
    answer:
      "The timeline depends on the complexity of your site, but most law firm websites can be designed, developed, and launched within 6–10 weeks with proper collaboration.",
  },
  {
    question: "Do you handle SEO as part of the website build?",
    answer:
      "Yes, we follow SEO best practices from the ground up—optimizing code, site structure, and content—so your website is ready to rank and attract clients from day one.",
  },
];

function SupportFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    const answerEl = answerRefs.current[index];

    if (!answerEl) return;

    if (openIndex === index) {
      // Close
      gsap.to(answerEl, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      setOpenIndex(null);
    } else {
      // Close previous
      if (openIndex !== null && answerRefs.current[openIndex]) {
        gsap.to(answerRefs.current[openIndex], {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }

      // Open new
      gsap.to(answerEl, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      setOpenIndex(index);
    }
  };

  return (
    <section className="relative bg-black mx-auto px-6 py-16 md:py-24 overflow-x-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
        GBP Management FAQs
      </h2>

      <div className="space-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden flex flex-col">
            {/* Question */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-4 md:p-6 text-left font-medium text-lg md:text-xl text-white group"
            >
              <div className="flex items-center space-x-3">
                {/* Left side icon */}
                <div className="text-yellow-500 w-8 h-8 flex items-center justify-center">
                  <Star className="w-5 h-5" />
                </div>
                <span>{faq.question}</span>
              </div>

              {/* Right side plus/minus */}
              <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 rounded-full text-black transition-transform duration-300 group-hover:scale-110">
                {openIndex === index ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </div>
            </button>

            {/* Answer (animated container with left border) */}
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className="h-0 opacity-0 overflow-hidden px-4 md:px-6 text-gray-400 text-base md:text-lg leading-relaxed border-l-4 border-yellow-500"
            >
              <p className="pb-4">{faq.answer}</p>
            </div>

            {/* Divider line */}
            {index < faqs.length - 1 && (
              <hr className="border-t border-white/20 mt-2 mb-2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SupportFaq;
