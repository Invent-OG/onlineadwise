"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { Plus, Minus, Star } from "lucide-react"; // Star icon as example

const faqs = [
  {
    question: "What is the mission of our company?",
    answer:
      "Our mission is to deliver innovative solutions that create value for our clients, empower our team, and make a positive impact on the community.",
  },
  {
    question: "When was the company founded?",
    answer:
      "We were founded in 2015 with a vision to provide high-quality services and build long-lasting relationships with our clients.",
  },
  {
    question: "What industries do we serve?",
    answer:
      "We work across multiple industries including technology, healthcare, retail, and finance, tailoring our solutions to meet each client's unique needs.",
  },
  {
    question: "What makes our team unique?",
    answer:
      "Our team combines diverse expertise, creativity, and dedication. We believe in collaboration, continuous learning, and delivering excellence in every project.",
  },
  {
    question: "Do we have any awards or recognitions?",
    answer:
      "Yes, over the years, we have received several industry awards recognizing our innovation, quality, and commitment to client success.",
  },
  {
    question: "How do we approach client projects?",
    answer:
      "We follow a structured approach: understanding the client’s goals, crafting tailored strategies, executing efficiently, and continuously optimizing for results.",
  },
  {
    question: "Can clients collaborate with us remotely?",
    answer:
      "Absolutely. We leverage modern communication tools to collaborate effectively with clients anywhere in the world.",
  },
  {
    question: "What are our core values?",
    answer:
      "Integrity, innovation, customer-centricity, teamwork, and continuous improvement guide everything we do.",
  },
];

function AboutFaqs() {
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
    <section className="relative bg-[#ffffff] mx-auto px-6 py-16 md:py-24 overflow-x-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
        GBP Management FAQs
      </h2>

      <div className="space-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden flex flex-col">
            {/* Question */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-4 md:p-6 text-left font-medium text-lg md:text-xl text-black group"
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
              className="h-0 opacity-0 overflow-hidden px-4 md:px-6 text-gray-500 text-base md:text-lg leading-relaxed border-l-4 border-yellow-500"
            >
              <p className="pb-4">{faq.answer}</p>
            </div>

            {/* Divider line */}
            {index < faqs.length - 1 && (
              <hr className="border-t border-black/20 mt-2 mb-2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutFaqs;
