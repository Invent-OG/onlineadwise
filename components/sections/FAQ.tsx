"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "What if I don't have a big budget for ads?",
      answer:
        "Our system is designed to work with budgets as low as $25/day. We focus on maximizing ROI, not spending more money. Many of our clients start small and scale up as they see results.",
    },
    {
      question: "How fast will I see results?",
      answer:
        "Most salons see an increase in bookings within the first 2 weeks. Full system optimization typically takes 30 days, but you'll start seeing leads and bookings much sooner.",
    },
    {
      question: "Do you work with all types of salons and spas?",
      answer:
        "We specialize in nail salons, day spas, massage therapy, facial treatments, and wellness centers. If you serve local clients who book appointments, we can help you grow.",
    },
    {
      question: "What if I'm not tech-savvy?",
      answer:
        "No problem! We handle all the technical setup for you. Our system is designed to run automatically, and we provide full training and ongoing support.",
    },
    {
      question: "Is this just another expensive marketing agency?",
      answer:
        "No. We're performance-based and results-focused. We only succeed when you succeed. Plus, our guarantee means you have zero risk.",
    },
    {
      question: "What makes you different from other marketing companies?",
      answer:
        "We specialize exclusively in beauty and wellness businesses. We understand your industry, your customers, and what actually works. Plus, we offer a results guarantee that most agencies won't.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full px-6 py-2 mb-6">
              <HelpCircle className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                Got Questions?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about growing your salon business
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-yellow-400 transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-6">
                    <div className="border-t border-gray-700/50 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-gray-700/50">
              <p className="text-lg text-gray-300 mb-4">
                Still have questions?
              </p>
              <p className="text-yellow-400 font-semibold">
                Book your free call and we&#39;ll answer everything personally
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
