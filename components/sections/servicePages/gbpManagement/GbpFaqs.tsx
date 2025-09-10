"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "1.Why are Google Business Profiles important?",
    answer:
      "Google Business Profiles (GBP) help your business appear prominently in local search results and on Google Maps, making it easier for potential customers to find you. They provide essential information like your address, hours, contact details, and customer reviews—all in one place. A well-optimized GBP increases your visibility, builds trust, and drives more foot traffic and sales.",
  },
  {
    question: "2.How can GBP optimization improve my local SEO?",
    answer:
      "Optimizing your GBP helps your business show up higher in local map packs and search results. This means more visibility, more clicks, and ultimately more customers for your business.",
  },
  {
    question: "3.What information should I include in my GBP?",
    answer:
      "Your GBP should always include accurate business name, address, phone number (NAP), hours of operation, website, categories, services, and high-quality images to build credibility.",
  },
  {
    question: "4.Do customer reviews really matter?",
    answer:
      "Yes, reviews are one of the strongest ranking factors in GBP. Positive reviews improve trust and influence customer decisions. Responding to both positive and negative reviews shows professionalism.",
  },
  {
    question: "5.Can I post updates on my GBP?",
    answer:
      "Absolutely. GBP allows you to post updates, promotions, and events directly on your profile. Regular updates keep your business active and help engage your audience.",
  },
  {
    question: "6.What are local citations and why are they important?",
    answer:
      "Local citations are mentions of your business (name, address, phone) across directories and websites. Consistent citations strengthen local SEO and help verify your business information to Google.",
  },
  {
    question: "7.How do GBP insights help my business?",
    answer:
      "GBP insights show you how customers find your business, what actions they take (calls, visits, clicks), and what keywords they use. These analytics help refine your local marketing strategy.",
  },
];

function GbpFaqs() {
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
    <section className="relative bg-[#FBD256] mx-auto px-6 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
        GBP Management FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" overflow-hidden">
            {/* Question */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-4 md:p-6 text-left font-medium text-lg md:text-xl text-black"
            >
              {faq.question}
              {openIndex === index ? (
                <Minus className="w-6 h-6 text-black" />
              ) : (
                <Plus className="w-6 h-6 text-black" />
              )}
            </button>

            {/* Answer (animated container) */}
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className="h-0 opacity-0 overflow-hidden px-4 md:px-6 text-gray-600 text-base md:text-lg leading-relaxed"
            >
              <p className="pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GbpFaqs;
