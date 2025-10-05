"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  BarChart2,
  Search,
  Edit2,
  Code,
  Monitor,
  Link,
  Layers,
  PieChart,
  Wrench,
  Cpu,
} from "lucide-react";

const services = [
  { title: "HIGH DR/DA LINKS", icon: <BarChart2 />, link: "gbp-management" },
  {
    title: "INDUSTRY-RELEVANT CONTENT",
    icon: <Search />,
    link: "website-landing",
  },
  { title: "DO FOLLOW LINKS", icon: <Edit2 />, link: "paid-ads" },
  { title: "NO AUTHOR BIO LINKS", icon: <Code />, link: "social-media" },
  {
    title: "TRAFFIC SIGNALS MONITORING",
    icon: <Monitor />,
    link: "crm-automation",
  },
  { title: "INDEXATION MONITORING", icon: <Link />, link: "reputation-mgmt" },
  { title: "1 MONTH TURNAROUND", icon: <Layers />, link: "email-sms" },
  { title: "6-MONTH LINK WARRANTY", icon: <PieChart />, link: "local-seo" },
  { title: "ANALYTICS", icon: <Wrench />, link: "analytics" },
  { title: "BRANDING SUPPORT", icon: <Cpu />, link: "branding-support" },
];

export default function PaidFour() {
  const router = useRouter();

  return (
    <div className="overflow-x-hidden">
      {/* Services Section */}
      <div className="py-16 px-6 bg-black text-white flex justify-center">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
            Our <span className="text-yellow-500">Standards</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                onClick={() => router.push(service.link)}
                className="group cursor-pointer p-6 border border-transparent rounded-lg transition-all duration-300 flex flex-col items-center justify-center text-center bg-[#111111] hover:border-yellow-500"
              >
                <div className="mb-4 text-yellow-500 group-hover:text-yellow-500 transform transition-transform duration-500 group-hover:rotate-12">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-white group-hover:text-yellow-500">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => router.push("/all-services")}
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              VIEW ALL SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* Link Building Partner Section */}
      <div className="py-4 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-center font-serif text-3xl sm:text-5xl md:text-2xl">
            LET US BE YOUR LINK BUILDING PARTNER
          </h2>
          <p className="text-center font-handwritten text-lg pb-8 sm:text-xl md:text-md font-medium max-w-7xl mx-auto">
            We build links that reduce costs, save time, and boost SEO
            performance, helping businesses deliver amazing results for their
            clients. Whether you are a small solo practitioner or a larger
            multi-partner firm, we are fully prepared to meet your link building
            needs. Take advantage of our vast connections at an affordable
            price.
          </p>
        </div>
      </div>
    </div>
  );
}
